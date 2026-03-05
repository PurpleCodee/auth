import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // El metodo debe de encontrar el usuario por su username usando el userRepository y devolver el usuario encontrado o objeto vacio
  findByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }
}
