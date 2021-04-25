import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';

import Organizer from "./Organizer";

@Entity('events')
class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string //| null;

  @Column()
  ticket_limit: number;

  @Column()
  ticket_price: number;

  @Column()
  ticket_sold: number;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @Column()
  // organizerId:string;

  // constructor({name,description,ticket_limit,ticket_price,ticket_sold,date,organizerId}:Omit<Event,'id'>){
  //   this.id = uuid();
  //   this.name = name;
  //   this.description = description;
  //   this.ticket_limit = ticket_limit;
  //   this.ticket_price = ticket_price;
  //   this.ticket_sold = ticket_sold;
  //   this.date = date;
  //   this.organizerId = organizerId;
  // }
}

export default Event;