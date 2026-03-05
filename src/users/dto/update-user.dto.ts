import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// El user DTO sirve para actualizar los datos del usuario,
// se extiende del CreateUserDto y se hace parcial para que no sea necesario enviar todos los campos
export class UpdateUserDto extends PartialType(CreateUserDto) {}
