import { getRepository } from 'typeorm';

class SearchAllEvents {
  public async execute(){
    const eventsRepository = getRepository(Event);

    const events = eventsRepository.find();
    return events;
  }
}

export default SearchAllEvents;