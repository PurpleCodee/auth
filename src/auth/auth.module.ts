import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import type { StringValue } from 'ms';

/*Este módulo autentifica a los usuarios con JWT
contiene las constantes necesarias para generar tokens de acceso
que expiran en 60 s por cuestion de seguridad*/
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => {
        const expiresIn = (cfg.get<string>('JWT_EXPIRES_IN') ?? '25d') as StringValue;

        return {
        secret: cfg.get<string>('JWT_SECRET'),
        signOptions: { expiresIn },
      };
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  
  exports: [AuthService],
})
export class AuthModule {}
