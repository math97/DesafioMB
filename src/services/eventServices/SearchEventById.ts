import { getRepository } from 'typeorm';

import Event from '../../models/Event';

class SearchEventById {
  public async execute(id:string){
    const eventsRepository = getRepository(Event);

    const event = eventsRepository.findOne({where:{id}});

    return event;
  }
}

export default SearchEventById;