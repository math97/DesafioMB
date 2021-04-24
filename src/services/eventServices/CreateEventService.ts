import Event from "../../models/Event";
import Organizer from "../../models/Organizer";
import EventsRepository from "../../repositories/EventRepository";

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
  private eventsRepository: EventsRepository;
  
  constructor(eventsRepository: EventsRepository) {
    this.eventsRepository = eventsRepository;
  } 
  public async execute({name,description,date,ticket_limit,ticket_price,ticket_sold,organizerId}:Request):Promise<Event>{
        
      const event = new Event({name,description,date,ticket_limit,ticket_price,ticket_sold,organizerId});

      this.eventsRepository.create(event);

      return event;
  }
}

export default CreateEventService;