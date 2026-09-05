import { Module } from '@nestjs/common';
import { SeoService } from './seo.service';
import { SitemapController } from './sitemap.controller';

@Module({
  controllers: [SitemapController],
  providers: [SeoService],
  exports: [SeoService],
})
export class SeoModule {}
