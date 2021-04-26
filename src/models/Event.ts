import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Organizer from './Organizer';

@Entity('events')
class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string ;

  @Column()
  ticket_limit: number;

  @Column()
  ticket_price: number;

  @Column()
  ticket_sold: number;

  @Column()
  date: Date;

  @Column()
  organizer_id: string;

  @ManyToOne(()=>Organizer,organizer=>organizer.events)
  @JoinColumn({name: 'organizer_id'})
  organizer:Organizer;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Event;