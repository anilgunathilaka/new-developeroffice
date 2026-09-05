import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PagesModule } from './pages/pages.module';
import { EnquiryModule } from './enquiry/enquiry.module';
import { SeoModule } from './seo/seo.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), SeoModule, PagesModule, EnquiryModule],
})
export class AppModule {}
