import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import Event from '../../models/Event';

class DeleteEventService {
  public async execute(eventId:string):Promise<void>{
    const eventRepository = getRepository(Event);

    const event = await eventRepository.findOne({where:{id:eventId}});    
    if(!event) throw new AppError('Event not found',404);
    eventRepository.remove(event);
  }
}
export default DeleteEventService;