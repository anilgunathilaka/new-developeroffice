import { Controller, Get, Render } from '@nestjs/common';
import { SeoService } from '../seo/seo.service';
import { stats } from '../content/stats';
import { work } from '../content/work';
import { insights } from '../content/insights';

@Controller()
export class HomeController {
  constructor(private readonly seo: SeoService) {}

  @Get()
  @Render('home')
  home() {
    return {
      meta: this.seo.home(),
      stats,
      featured: work.slice(0, 4), // four featured projects (strategy.md §7.04)
      insights: insights.slice(0, 3),
    };
  }
}
