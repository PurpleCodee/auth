import { ExtractJwt, Strategy } from 'passport-jwt';//crear la estrategia de autenticación JWT
import { PassportStrategy } from '@nestjs/passport';//crear una estrategia personalizada de autenticación JWT
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';//constantes necesarias para generar tokens de acceso JWT

// Valida el token de acceso JWT en cada solicitud protegida
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,//Utiliza la constante secreta para validar el token de acceso JWT
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
    //devuelve ID y nombre del token para poder utilizarlas en los controladores
  }
}
