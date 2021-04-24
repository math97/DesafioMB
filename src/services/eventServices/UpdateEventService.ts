import EventUpdateDTO from "../../dto/eventUpdateDTO";
import EventsRepository from "../../repositories/EventRepository";

class UpdateEventService {
  private eventsRepository:EventsRepository
  constructor(eventsRepository:EventsRepository){
    this.eventsRepository = eventsRepository;
  }
  public async execute(eventData:EventUpdateDTO){

    const event = this.eventsRepository.findById(eventData.id);

    console.log(event);
    

    if(!!event) {
      if(event.ticket_sold > 0) throw new Error('Update denied because tickets already sold');
  
      if(eventData.name) event.name = eventData.name;
      if(eventData.description) event.description = eventData.description;
      if(eventData.date) event.date = eventData.date;
      if(eventData.ticket_price) event.ticket_price = eventData.ticket_price;
      if(eventData.ticket_limit) event.ticket_limit = eventData.ticket_limit;
    }
    return event;
  }
}

export default UpdateEventService;