import { Module } from '@nestjs/common';
// import { UsersModule } from './users2/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga variables de entorno

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 5432),// Asegura que el puerto sea un número
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // carga automática de entidades
      synchronize: true, // sincroniza tablas (solo en desarrollo)
      logging: true,
    }),
    UsersModule,
  ]
})
export class AppModule {}
