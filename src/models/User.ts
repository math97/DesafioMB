import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';
import Ticket from './Ticket';

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

  @OneToMany(()=>Ticket,ticket => ticket.user)
  tickets:Ticket[];

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