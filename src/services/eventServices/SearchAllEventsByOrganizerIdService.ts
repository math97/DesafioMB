import { getRepository } from 'typeorm';
import EventsRepository from '../../repositories/EventRepository';

interface Request {
  organizerId: string,
}

class SearchAllEventsByOrganizerId {
  public async execute({organizerId}:Request){

    const eventsRepository = getRepository(Event);

    const events = eventsRepository.find({where:{organizer_id:organizerId}});

    return events;

  }
}

export default SearchAllEventsByOrganizerId;