import { Controller, Get, Param, Render, NotFoundException } from '@nestjs/common';
import { SeoService } from '../seo/seo.service';
import { capabilities, findCapability } from '../content/capabilities';
import { work } from '../content/work';

@Controller('capabilities')
export class CapabilitiesController {
  constructor(private readonly seo: SeoService) {}

  @Get()
  @Render('capabilities/index')
  index() {
    return {
      meta: this.seo.simple(
        {
          title: 'Capabilities \u2014 Product, AI, Research & Enterprise Engineering',
          description:
            'Product engineering, AI engineering, applied research, language & data, enterprise systems and technology advisory — from one team.',
          pageCss: 'capabilities',
          nav: 'capabilities',
        },
        '/capabilities',
      ),
      capabilities,
    };
  }

  @Get(':slug')
  @Render('capabilities/detail')
  detail(@Param('slug') slug: string) {
    const cap = findCapability(slug);
    if (!cap) throw new NotFoundException();
    const related = cap.related
      .map((s) => work.find((w) => w.slug === s))
      .filter((w): w is NonNullable<typeof w> => Boolean(w));
    return {
      meta: this.seo.simple(
        {
          title: `${cap.name} \u2014 Developer Office`,
          description: cap.hero,
          pageCss: 'capability-detail',
          nav: 'capabilities',
        },
        `/capabilities/${slug}`,
      ),
      capability: cap,
      related,
    };
  }
}
