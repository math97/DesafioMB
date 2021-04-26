import { getRepository } from "typeorm";
import Event from '../../models/Event';

class DeleteEventService {
  public async execute(eventId:string):Promise<void>{
    const eventRepository = getRepository(Event);

    const event = await eventRepository.findOne({where:{id:eventId}});    
    if(!event) throw new Error('Event not found');
    eventRepository.remove(event);
  }
}
export default DeleteEventService;