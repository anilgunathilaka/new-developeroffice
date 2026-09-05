import { Injectable } from '@nestjs/common';
import { PageMeta } from '../common/view-model';

/**
 * Central metadata (CLAUDE.md §9). Titles/descriptions are verbatim from strategy.md §24.
 * Every controller pulls its PageMeta from here so copy stays in one place.
 */
@Injectable()
export class SeoService {
  readonly siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  readonly siteName = 'Developer Office';

  canonical(path: string): string {
    return `${this.siteUrl}${path === '/' ? '' : path}`;
  }

  home(): PageMeta {
    return {
      title: 'Developer Office \u2014 Engineering-Grade Software from Colombo',
      description:
        'A research-driven engineering studio in Colombo building production software and AI systems where reliability, accuracy and privacy matter. Thirty years.',
      keywords: 'software engineering studio, AI engineering, product engineering, software development Sri Lanka',
      canonical: this.canonical('/'),
      pageCss: 'home',
      nav: '',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: this.siteName,
          url: this.siteUrl,
          address: { '@type': 'PostalAddress', addressLocality: 'Nugegoda, Colombo', addressCountry: 'LK' },
          email: process.env.ENQUIRY_TO || 'hello@developeroffice.com',
        },
        { '@context': 'https://schema.org', '@type': 'WebSite', name: this.siteName, url: this.siteUrl },
      ],
    };
  }

  simple(partial: Partial<PageMeta> & Pick<PageMeta, 'title' | 'description'>, path: string): PageMeta {
    return { canonical: this.canonical(path), ...partial };
  }
}
