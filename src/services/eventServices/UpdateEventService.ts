import { getRepository } from "typeorm";
import EventUpdateDTO from "../../dto/eventUpdateDTO";
import Event from '../../models/Event';

class UpdateEventService {
  public async execute(eventData:EventUpdateDTO){

    const eventsRepository = getRepository(Event)

    const event = await eventsRepository.findOne({where:{id:eventData.id}});
    
    if(event) {
      if(event.ticket_sold > 0) throw new Error('Update denied because tickets already sold');
  
      if(eventData.name) event.name = eventData.name;
      if(eventData.description) event.description = eventData.description;
      if(eventData.date) event.date = eventData.date;
      if(eventData.ticket_price) event.ticket_price = eventData.ticket_price;
      if(eventData.ticket_limit) event.ticket_limit = eventData.ticket_limit;

      eventsRepository.save(event)
    }
    return event;
  }
}

export default UpdateEventService;