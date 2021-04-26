import { getRepository } from "typeorm";
import Event from "../../models/Event";

interface Request {
  name: string,
  description: string,
  date: Date,
  ticket_limit: number,
  ticket_price: number,
  ticket_sold: 0,
  organizerId:string,
}

class CreateEventService { 
  public async execute({name,description,date,ticket_limit,ticket_price,ticket_sold,organizerId}:Request):Promise<Event>{
      
      const eventRepository = getRepository(Event);
      const event = eventRepository.create({name,description,date,ticket_limit,ticket_price,ticket_sold,organizer_id:organizerId});

      await eventRepository.save(event);

      return event;
  }
}

export default CreateEventService;