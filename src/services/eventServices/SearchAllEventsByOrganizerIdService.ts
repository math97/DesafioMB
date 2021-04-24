import EventsRepository from '../../repositories/EventRepository';

interface Request {
  organizerId: string,
}

class SearchAllEventsByOrganizerId {

  private eventsRepository: EventsRepository;
  
  constructor(eventsRepository: EventsRepository) {
    this.eventsRepository = eventsRepository;
  } 

  public async execute({organizerId}:Request){
    const events = this.eventsRepository.findByOrganizer(organizerId)

    return events;

  }
}

export default SearchAllEventsByOrganizerId;