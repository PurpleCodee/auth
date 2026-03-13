import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard'; //Importo el LocalAuthGuard para proteger la ruta de logout
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService
  ) {}

  /*End point del login que utiliza el LocalAuthGuard
  para autenticar al usuario y generar un token de acceso JWT*/
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
  }


  /*End point protegido por el JwtAuthGuard, solo accesible para usuarios autenticados con un token JWT válido
   En este end point compruebo el usuario autenticado */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
