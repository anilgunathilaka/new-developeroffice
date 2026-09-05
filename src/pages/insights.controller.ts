import { Controller, Get, Param, Render, NotFoundException } from '@nestjs/common';
import { SeoService } from '../seo/seo.service';
import { insights, findInsight } from '../content/insights';

@Controller('insights')
export class InsightsController {
  constructor(private readonly seo: SeoService) {}

  @Get()
  @Render('insights/index')
  index() {
    return {
      meta: this.seo.simple(
        {
          title: 'Insights \u2014 Research, Engineering, AI & Product | Developer Office',
          description:
            'Notes from real engagements on language AI, legal AI, production agents and engineering, written for people who build.',
          pageCss: 'insights',
          nav: 'insights',
        },
        '/insights',
      ),
      insights,
    };
  }

  @Get(':slug')
  @Render('insights/detail')
  detail(@Param('slug') slug: string) {
    const article = findInsight(slug);
    if (!article) throw new NotFoundException();
    return {
      meta: this.seo.simple(
        {
          title: `${article.title} \u2014 Developer Office`,
          description: article.summary,
          pageCss: 'insight-detail',
          nav: 'insights',
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.summary,
            articleSection: article.category,
          },
        },
        `/insights/${slug}`,
      ),
      article,
    };
  }
}
