import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

/** Footer / general contact form (strategy.md §18 General Enquiries: name, email, message). */
export class CreateContactDto {
  @IsString() @MinLength(1) @MaxLength(120)
  name!: string;

  @IsEmail() @MaxLength(200)
  email!: string;

  @IsString() @MinLength(1) @MaxLength(4000)
  message!: string;

  // Honeypot: real users leave this empty; bots fill it (CLAUDE.md §11).
  @IsOptional() @IsString()
  website?: string;
}
