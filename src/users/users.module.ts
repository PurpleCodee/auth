import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [],
  providers: [UsersService],
  // Es necesario importar el módulo de TypeORM para que NestJS
  // pueda manejar la entidad User y realizar operaciones en la base de datos
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
