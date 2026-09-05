import { Module } from '@nestjs/common';
import { SeoModule } from '../seo/seo.module';
import { EnquiryController } from './enquiry.controller';
import { EnquiryService } from './enquiry.service';

@Module({
  imports: [SeoModule],
  controllers: [EnquiryController],
  providers: [EnquiryService],
})
export class EnquiryModule {}
