import { Request, Response, Router} from 'express';

import CreateEventService from '../services/eventServices/CreateEventService';
import SearchAllEventsByOrganizerIdService from '../services/eventServices/SearchAllEventsByOrganizerIdService';
import SearchAllEvents from '../services/eventServices/SearchAllEventsService';
import UpdateEventService from '../services/eventServices/UpdateEventService';
import DeleteEventService from '../services/eventServices/DeleteEventService';

import EventUpdateDTO from '../dto/eventUpdateDTO';

import ensureAuthenticated from '../middlewares/ensureOrganizerAuthenticated';

const eventRoutes = Router()


eventRoutes.use(ensureAuthenticated);

eventRoutes.post('/',async (request:Request,response:Response)=>{  
  const {name,description,date,ticket_limit,ticket_price,organizerId } = request.body;

  const createEvent = new CreateEventService();

  const event = await createEvent.execute({name,description,organizerId,date,ticket_limit,ticket_price,ticket_sold:0});

  response.json(event);
});

eventRoutes.get('/',async (request:Request,response:Response)=>{
  const {organizer} = request.query;

  const searchAllEvents = new SearchAllEvents();

  if(organizer) {
    const searchByOrganizerId = new SearchAllEventsByOrganizerIdService();
    const organizerId = organizer?.toString();

    const events = await searchByOrganizerId.execute({organizerId});
    response.json(events);
}
  const events = await searchAllEvents.execute();

  console.log(events);
  

  response.json(events);

});

eventRoutes.put('/',async (request:Request,response:Response)=>{
  
  const  eventData:EventUpdateDTO  = request.body;

  const updateEvent = new UpdateEventService();

  const event = await updateEvent.execute(eventData);

  response.json(event);
});

eventRoutes.delete('/',async (request:Request,response:Response)=>{  
  const {eventId} = request.query;
  
  if(!eventId || eventId === undefined) throw new Error('eventId not send');

  const deleteEventService = new DeleteEventService();

  deleteEventService.execute(eventId as string);

  response.status(204).send();

});

export default eventRoutes;