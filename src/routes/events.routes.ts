import { Router} from 'express';

import CreateEventService from '../services/eventServices/CreateEventService';
import SearchAllEventsByOrganizerIdService from '../services/eventServices/SearchAllEventsByOrganizerIdService';
import UpdateEventService from '../services/eventServices/UpdateEventService';
import DeleteEventService from '../services/eventServices/DeleteEventService';

import EventUpdateDTO from '../dto/eventUpdateDTO';

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

eventRoutes.put('/',async (request,response)=>{
  
  const  eventData:EventUpdateDTO  = request.body;

  const updateEvent = new UpdateEventService(eventsRepository);

  const event = await updateEvent.execute(eventData);

  response.json(event);
});

eventRoutes.delete('/',async(request,response)=>{  
  const {eventId} = request.query;
  
  if(!eventId || eventId === undefined) throw new Error('eventId not send');

  const deleteEventService = new DeleteEventService(eventsRepository);

  deleteEventService.execute(eventId as string);

  response.status(204).send();

});

export default eventRoutes;