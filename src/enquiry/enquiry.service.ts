import { Injectable, Logger } from '@nestjs/common';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';

@Injectable()
export class EnquiryService {
  private readonly logger = new Logger(EnquiryService.name);

  /**
   * Handle a validated enquiry. For the starter this logs to the server;
   * wire up SMTP (env vars in .env.example) to send to ENQUIRY_TO.
   * Route to a real engineer inbox, not a generic alias (strategy.md §18).
   */
  async submit(dto: CreateEnquiryDto): Promise<void> {
    const to = process.env.ENQUIRY_TO || 'hello@developeroffice.com';
    this.logger.log(`New enquiry -> ${to}: ${dto.name} (${dto.organisation}) / ${dto.projectType}`);
    // TODO: integrate nodemailer or a transactional email provider here.
  }
}
