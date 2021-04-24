import { Router} from 'express';

import CreateEventService from '../services/eventServices/CreateEventService';
import SearchAllEventsByOrganizerIdService from '../services/eventServices/SearchAllEventsByOrganizerIdService';


import EventsRepository from '../repositories/EventRepository';

const eventRoutes = Router()

const eventsRepository = new EventsRepository();

eventRoutes.post('/',async (request,response)=>{  
  const {name,description,date,ticket_limit,ticket_price,organizerId } = request.body;

  const createEvent = new CreateEventService(eventsRepository);

  const event = await createEvent.execute({name,description,organizerId,date,ticket_limit,ticket_price,ticket_sold:0});

  response.json(event);
});

eventRoutes.get('/',async (request,response)=>{
  const organizer = request.query.organizerId;

  const organizerId = organizer?.toString();

  const searchByOrganizerId = new SearchAllEventsByOrganizerIdService(eventsRepository);

  if(!!organizerId){
    const events = await searchByOrganizerId.execute({organizerId});
    response.json(events);

  }
});

export default eventRoutes;