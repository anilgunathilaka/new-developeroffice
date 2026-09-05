import { Module } from '@nestjs/common';
import { SeoModule } from '../seo/seo.module';
import { HomeController } from './home.controller';
import { WorkController } from './work.controller';
import { CapabilitiesController } from './capabilities.controller';
import { StudioController } from './studio.controller';
import { InsightsController } from './insights.controller';
import { ContactController } from './contact.controller';

@Module({
  imports: [SeoModule],
  controllers: [
    HomeController,
    WorkController,
    CapabilitiesController,
    StudioController,
    InsightsController,
    ContactController,
  ],
})
export class PagesModule {}
