import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// La entidad User representa la tabla de usuarios en la base de datos
@Entity()
export class User {
    //clave primaria del usuario, se genera automaticamente con uuid
    @PrimaryGeneratedColumn('uuid')
    id_user: string;

    //nombre de usuario, se almacena como texto
    @Column('text',{
    unique: true,
    })
    username: string;
    
    //contraseña del usuario, se almacena como texto
    @Column('text' ,{
    unique: true,
    })
    password: string;
}
