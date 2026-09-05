import { Controller, Get, Param, Render, NotFoundException } from '@nestjs/common';
import { SeoService } from '../seo/seo.service';
import { allProjectCards, findCaseStudy, work, workExtra } from '../content/work';

@Controller('work')
export class WorkController {
  constructor(private readonly seo: SeoService) {}

  @Get()
  @Render('work/index')
  index() {
    return {
      meta: this.seo.simple(
        {
          title: 'Selected Work \u2014 Developer Office',
          description:
            'Production systems in language technology, legal AI, financial platforms and AI agents — with the problems, engineering and results behind them.',
          pageCss: 'work',
          nav: 'work',
        },
        '/work',
      ),
      projects: allProjectCards(),
    };
  }

  @Get(':slug')
  @Render('work/detail')
  detail(@Param('slug') slug: string) {
    const study = findCaseStudy(slug);
    if (!study) {
      // Slugs that exist as project cards but don't yet have a full case study
      // (workExtra) render a stub rather than 404, since they're linked in nav/footer.
      const stub = workExtra.find((w) => w.slug === slug);
      if (!stub) throw new NotFoundException();
      return {
        meta: this.seo.simple(
          {
            title: `${stub.name} \u2014 Developer Office`,
            description: stub.descriptor,
            pageCss: 'work-detail',
            nav: 'work',
          },
          `/work/${slug}`,
        ),
        stub,
        related: [],
      };
    }
    const related = study.related
      .map((s) => work.find((w) => w.slug === s))
      .filter((w): w is NonNullable<typeof w> => Boolean(w));
    return {
      meta: this.seo.simple(
        {
          title: `${study.name} \u2014 Developer Office`,
          description: study.descriptor,
          pageCss: 'work-detail',
          nav: 'work',
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Work', item: this.seo.canonical('/work') },
              { '@type': 'ListItem', position: 2, name: study.name, item: this.seo.canonical(`/work/${study.slug}`) },
            ],
          },
        },
        `/work/${slug}`,
      ),
      study,
      related,
    };
  }
}
