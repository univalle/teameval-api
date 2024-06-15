import { User, UserRole } from '@prisma/client'

export class CreateUserDto implements User {
  code: string
  email: string
  id: number
  name: string
  password: string
  role: UserRole[]
  createdAt: Date
  updatedAt: Date
}
