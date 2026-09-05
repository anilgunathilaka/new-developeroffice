import { Controller, Get, Render } from '@nestjs/common';
import { SeoService } from '../seo/seo.service';

@Controller('studio')
export class StudioController {
  constructor(private readonly seo: SeoService) {}

  @Get()
  @Render('studio/about')
  about() {
    return {
      meta: this.seo.simple(
        {
          title: 'The Studio \u2014 Developer Office, Colombo',
          description:
            'A thirty-year engineering studio in Colombo combining research, AI and product delivery in one dedicated team.',
          pageCss: 'studio',
          nav: 'studio',
        },
        '/studio',
      ),
    };
  }

  @Get('approach')
  @Render('studio/approach')
  approach() {
    return {
      meta: this.seo.simple(
        {
          title: 'Our Approach \u2014 Developer Office',
          description: 'Five stages, from first question to running system: Understand, Model, Build, Validate, Operate.',
          pageCss: 'studio',
          nav: 'studio',
        },
        '/studio/approach',
      ),
    };
  }

  @Get('team')
  @Render('studio/team')
  team() {
    return {
      meta: this.seo.simple(
        {
          title: 'Team \u2014 Developer Office',
          description: 'Engineers, researchers, and the depth to move between them.',
          pageCss: 'studio',
          nav: 'studio',
        },
        '/studio/team',
      ),
    };
  }

  @Get('careers')
  @Render('studio/careers')
  careers() {
    return {
      meta: this.seo.simple(
        {
          title: 'Careers \u2014 Developer Office',
          description: 'Work on problems that have to be right.',
          pageCss: 'studio',
          nav: 'studio',
        },
        '/studio/careers',
      ),
    };
  }
}
