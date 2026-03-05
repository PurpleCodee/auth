import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/*Controla el acceso a rutas protegidas utilizando la estrategia de autentificacion local
del usuario y la contraseña valida el acceso si son correctas con LocalStrategy, si son correctas
añade req.user, y si son incorrectas bloquea el acceso*/
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
}