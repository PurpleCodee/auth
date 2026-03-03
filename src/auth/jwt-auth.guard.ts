/*Este archivo es bastate importante,
ya que es el encargado de proteger las rutas que requieren autenticación JWT*/
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
    export class JwtAuthGuard extends AuthGuard('jwt') {
     canActivate(context: ExecutionContext) {
     return super.canActivate(context);
    }

    handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}