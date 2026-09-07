import { Body, Controller, HttpCode, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { EnquiryService } from './enquiry.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { CSRF_COOKIE, readCookie, safeReturnPath, verifyCsrf } from '../common/csrf';

@Controller('contact')
export class ContactFormController {
  constructor(private readonly enquiry: EnquiryService) {}

  @Post('general-enquiries')
  @HttpCode(HttpStatus.SEE_OTHER)
  async submit(
    @Body() body: Record<string, unknown>,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const back = safeReturnPath(body.returnTo);
    const fail = () => res.redirect(303, `${back}?contact=error#site-contact`);

    const cookieToken = readCookie(req.headers.cookie, CSRF_COOKIE);
    if (!verifyCsrf(cookieToken, body['_csrf'])) return fail();

    const dto = plainToInstance(CreateContactDto, body);
    const violations = await validate(dto, { whitelist: true });
    if (violations.length > 0) return fail();

    if (!dto.website) {
      await this.enquiry.submitContact(dto);
    }

    return res.redirect(303, `${back}?contact=sent#site-contact`);
  }
}
