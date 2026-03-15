import { IsOptional, IsString, MinLength } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateUserDto {
  @IsString()
  @Unique(['id_user'])
  id_user: string;

  @IsString()
  @Unique(['username'])
  @MinLength(4)
  username: string;

  @IsString()
  @MinLength(8)
  @Unique(['password'])
  password: string;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  jobTitle?: string;
}
