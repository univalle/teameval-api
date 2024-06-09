import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getJsonHello(): string {
    return JSON.stringify({ message: 'Hello World! 🧨' })
  }
}
