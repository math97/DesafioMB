import EventsRepository from "../../repositories/EventRepository";

class DeleteEventService {

  private eventsRepository : EventsRepository

  constructor(eventsRepository:EventsRepository){
    this.eventsRepository = eventsRepository;
  }

  public async execute(eventId:string):Promise<void>{
    const event = this.eventsRepository.findById(eventId);    
    if(!event) throw new Error('Event not found');
    this.eventsRepository.delete(event);
  }
}
export default DeleteEventService;