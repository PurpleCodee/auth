import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id_user: string;

  @Column('text', {
    unique: true,
  })
  username: string;

  @Column('text', {
    unique: true,
  })
  password: string;

  @Column('text', {
    nullable: true,
  })
  fullName?: string | null;

  @Column('text', {
    nullable: true,
  })
  jobTitle?: string | null;
}
