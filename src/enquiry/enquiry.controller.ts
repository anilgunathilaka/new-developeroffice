import { Body, Controller, Get, HttpCode, HttpStatus, Post, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { SeoService } from '../seo/seo.service';
import { EnquiryService } from './enquiry.service';
import { CreateEnquiryDto, PROJECT_TYPES, TIMELINES } from './dto/create-enquiry.dto';
import { CSRF_COOKIE, generateCsrfToken, readCookie, verifyCsrf } from '../common/csrf';

type EnquiryValues = Partial<Record<'name' | 'organisation' | 'email' | 'projectType' | 'problem' | 'timeline' | 'budget' | 'extra', string>>;

@Controller('contact/start-a-project')
export class EnquiryController {
  constructor(
    private readonly seo: SeoService,
    private readonly enquiry: EnquiryService,
  ) {}

  private meta() {
    return this.seo.simple(
      {
        title: 'Start a Project — Developer Office',
        description:
          'Have a difficult technology problem? Start a technical conversation with an engineer at Developer Office in Colombo.',
        pageCss: 'contact',
      },
      '/contact/start-a-project',
    );
  }

  private issueCsrfCookie(req: Request, res: Response): string {
    const existing = readCookie(req.headers.cookie, CSRF_COOKIE);
    if (existing) return existing;
    const token = generateCsrfToken();
    res.cookie(CSRF_COOKIE, token, { httpOnly: true, sameSite: 'strict', path: '/' });
    return token;
  }

  @Get()
  @Render('contact/start-a-project')
  form(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return {
      meta: this.meta(),
      projectTypes: PROJECT_TYPES,
      timelines: TIMELINES,
      values: {},
      errors: null,
      csrfToken: this.issueCsrfCookie(req, res),
    };
  }

  // Body is untyped here (not the DTO class) so Nest's global ValidationPipe
  // skips it and lets us validate manually below — a failure re-renders this
  // same view with inline field errors instead of throwing a JSON 400
  // (CLAUDE.md §11: "re-renders with a success state or inline field errors").
  @Post()
  @HttpCode(HttpStatus.OK)
  @Render('contact/start-a-project')
  async submit(@Body() body: Record<string, unknown>, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const cookieToken = readCookie(req.headers.cookie, CSRF_COOKIE);
    const base = {
      meta: this.meta(),
      projectTypes: PROJECT_TYPES,
      timelines: TIMELINES,
      csrfToken: this.issueCsrfCookie(req, res),
    };

    if (!verifyCsrf(cookieToken, body['_csrf'])) {
      return { ...base, values: {}, errors: { form: 'This form expired. Please try again.' } };
    }

    const dto = plainToInstance(CreateEnquiryDto, body);
    const violations = await validate(dto, { whitelist: true });

    if (violations.length > 0) {
      const errors: Record<string, string> = {};
      for (const violation of violations) {
        const [firstMessage] = Object.values(violation.constraints ?? {});
        if (firstMessage) errors[violation.property] = firstMessage;
      }
      const values: EnquiryValues = {
        name: dto.name,
        organisation: dto.organisation,
        email: dto.email,
        projectType: dto.projectType,
        problem: dto.problem,
        timeline: dto.timeline,
        budget: dto.budget,
        extra: dto.extra,
      };
      return { ...base, values, errors };
    }

    // Honeypot filled => bot. Show success without processing the enquiry.
    if (!dto.website) {
      await this.enquiry.submit(dto);
    }

    return { ...base, success: true, values: {} };
  }
}
