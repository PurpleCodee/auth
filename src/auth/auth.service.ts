import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt"; // Importo el servicio JWT para generar tokens de acceso

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService, // Inyecto el servicio JWT en el constructor
  ) {}

  // El método validateUser se encarga de validar las credenciales del usuario
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // El método login genera un token de acceso JWT para el usuario autenticado
  async login(user: any) {
    const payload = { username: user.username, userID: user.id_user };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
