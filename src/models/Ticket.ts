import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Event from "./Event";
import User from "./User";

@Entity('tickets')
class Ticket {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(()=>User,user=>user.tickets)
  @JoinColumn({name: 'user_id'})
  user:User

  @Column()
  event_id: string;

  @ManyToOne(()=>Event,event=>event.tickets)
  @JoinColumn({name: 'event_id'})
  event:Event


}

export default Ticket;