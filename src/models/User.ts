import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';

@Entity('users')
class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phone_number: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // constructor({name,cpf,email,password,phone_number}:Omit<User,'id'>){
  //   this.id = uuid();
  //   this.name = name;
  //   this.cpf = cpf;
  //   this.password = password;
  //   this.email = email;
  //   this.phone_number = phone_number;
  // }
}

export default User;