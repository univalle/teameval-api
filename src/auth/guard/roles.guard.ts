import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Role } from '../../common/enums/rol.enum'
import { ROLES_KEY } from '../decorators/roles.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (!role) {
      console.log('No role found')
      return true
    }

    const { user } = context.switchToHttp().getRequest()

    console.log('User role:', user.role)

    if (user.role === Role.ADMIN) {
      return true
    }

    return role === user.role
  }
}
