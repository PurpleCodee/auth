// import { Post, UseGuards, Request } from '@nestjs/common';
// import { LocalAuthGuard } from './local-auth.guard';
// import { Controller } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Controller()
// export class AuthController {
//     constructor(private authService: AuthService){}

//     //End point del login
//     @UseGuards(LocalAuthGuard)
//     @Post('auth/login')
//     async login(@Request() req) {
//     return req.user;
//     }

//     //End point del logout
//     @UseGuards(LocalAuthGuard)
//     @Post('auth/logout')
//     async logout(@Request() req) {
//     return req.logout();
//     }
// }



