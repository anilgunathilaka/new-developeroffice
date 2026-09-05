import { Controller, Get, Header } from '@nestjs/common';
import { SeoService } from './seo.service';
import { work, workExtra } from '../content/work';
import { capabilities } from '../content/capabilities';
import { insights } from '../content/insights';

@Controller()
export class SitemapController {
  constructor(private readonly seo: SeoService) {}

  @Get('robots.txt')
  @Header('Content-Type', 'text/plain')
  robots(): string {
    return `User-agent: *\nAllow: /\nSitemap: ${this.seo.canonical('/sitemap.xml')}\n`;
  }

  @Get('sitemap.xml')
  @Header('Content-Type', 'application/xml')
  sitemap(): string {
    const paths = [
      '/', '/work', '/capabilities', '/studio', '/studio/approach', '/studio/team',
      '/studio/careers', '/insights', '/contact', '/contact/start-a-project',
      '/contact/general-enquiries',
      ...[...work, ...workExtra].map((w) => `/work/${w.slug}`),
      ...capabilities.map((c) => `/capabilities/${c.slug}`),
      ...insights.map((i) => `/insights/${i.slug}`),
    ];
    const urls = paths
      .map((p) => `  <url><loc>${this.seo.canonical(p)}</loc></url>`)
      .join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  }
}
