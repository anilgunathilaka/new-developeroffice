import { IsEmail, IsIn, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export const PROJECT_TYPES = [
  'Product engineering',
  'AI engineering',
  'Applied research',
  'Language & data',
  'Enterprise systems',
  'Technology advisory',
  'Not sure yet',
] as const;

export const TIMELINES = ['Exploring', '< 3 months', '3\u20136 months', '6+ months', 'Ongoing'] as const;

export class CreateEnquiryDto {
  @IsString() @MinLength(1) @MaxLength(120)
  name!: string;

  @IsString() @MinLength(1) @MaxLength(160)
  organisation!: string;

  @IsEmail() @MaxLength(200)
  email!: string;

  @IsIn(PROJECT_TYPES as unknown as string[])
  projectType!: string;

  @IsString() @MinLength(1) @MaxLength(4000)
  problem!: string;

  @IsOptional() @IsIn(TIMELINES as unknown as string[])
  timeline?: string;

  @IsOptional() @IsString() @MaxLength(120)
  budget?: string;

  @IsOptional() @IsString() @MaxLength(4000)
  extra?: string;

  // Honeypot: real users leave this empty; bots fill it (CLAUDE.md §11).
  @IsOptional() @IsString()
  website?: string;
}
