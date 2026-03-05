import { IsString, MinLength } from "class-validator";
import { Unique } from "typeorm";

export class CreateUserDto {
    // Validaciones necesarias

    // La propiedad primaria tiene que ser un string, ya que se genera con uuid y debe de ser unica
    @IsString()
    @Unique(['id_user'])
    id_user: string;

    // El nombre de usuario es un string, debe ser unico y con una longitud minima de 4 caracteres
    @IsString()
    @Unique(['username'])
    @MinLength(4)
    username: string;

    // La contraseña es un string y debe ser unica y se almacena como texto
    @IsString()
    @MinLength(8)
    @Unique(['password'])
    password: string;
}
