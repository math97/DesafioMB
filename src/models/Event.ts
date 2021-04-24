import {v4 as uuid} from 'uuid';

import Organizer from "./Organizer";

class Event {
  id: string;

  name: string;

  description: string | null;

  ticket_limit: number;

  ticket_price: number;

  ticket_sold: number;

  date: Date;

  organizerId:string;

  constructor({name,description,ticket_limit,ticket_price,ticket_sold,date,organizerId}:Omit<Event,'id'>){
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.ticket_limit = ticket_limit;
    this.ticket_price = ticket_price;
    this.ticket_sold = ticket_sold;
    this.date = date;
    this.organizerId = organizerId;
  }
}

export default Event;