import { Transform } from 'class-transformer'
import { IsEmail, IsString, MinLength } from 'class-validator'
import { Role } from '@prisma/client'

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  name: string

  @IsEmail()
  email: string

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  role: Role

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  document: string

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  type: string

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  gender: string

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  phone: string
}
