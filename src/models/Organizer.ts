import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';
import Event from './Event';

@Entity('organizers')
class Organizer { 

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  company_name: string;

  @Column()
  cnpj: string;

  @Column()
  password: string;

  @Column()
  phone_number: number;

  @Column()
  email: string;

  @OneToMany(()=>Event,event=>event.organizer)
  events: Event[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // constructor({name,company_name,cnpj,password,email,phone_number}:Omit<Organizer,'id'>){
  //   this.id = uuid();
  //   this.name = name;
  //   this.company_name = company_name;
  //   this.cnpj = cnpj;
  //   this.password = password;
  //   this.email = email;
  //   this.phone_number = phone_number;
  // }
}


export default Organizer;