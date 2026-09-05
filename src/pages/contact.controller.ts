import { Controller, Get, Render } from '@nestjs/common';
import { SeoService } from '../seo/seo.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly seo: SeoService) {}

  @Get()
  @Render('contact/index')
  index() {
    return {
      meta: this.seo.simple(
        {
          title: 'Contact \u2014 Developer Office',
          description: 'Email, phone and location for Developer Office in Colombo.',
          pageCss: 'contact',
        },
        '/contact',
      ),
    };
  }

  @Get('general-enquiries')
  @Render('contact/general-enquiries')
  general() {
    return {
      meta: this.seo.simple(
        {
          title: 'General Enquiries \u2014 Developer Office',
          description: 'Press, partnerships and general questions.',
          pageCss: 'contact',
        },
        '/contact/general-enquiries',
      ),
    };
  }
}
