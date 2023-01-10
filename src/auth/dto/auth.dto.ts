import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  full_name: string;
}
