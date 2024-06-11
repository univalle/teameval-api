import { Role } from '@prisma/client'

// id          String      @id
// email       String      @unique
// name        String
// password    String
// document    String
// type        String
// birthday    DateTime
// Gender      String
// Phone       String

export class CreateUserDto {
  name: string
  email: string
  password: string
  role: Role
  document: string
  type: string
  gender: string
  phone: string
}
