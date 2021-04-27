import { response, Router } from 'express';

import GenerateTicket from '../services/ticketServices/generateTicket';
import SearchTicketById from '../services/ticketServices/SearchTicketByIdService';

const ticketRoutes = Router();

ticketRoutes.post('/',async (request,response)=>{

  const {user_id,event_id }= request.body;

  const generateTicket = new GenerateTicket();

  const ticket = await generateTicket.execute({user_id,event_id});

  response.json(ticket);
});

ticketRoutes.get('/',async (request,response)=>{

  const {ticketId} = request.query;

  const searchTicketById = new SearchTicketById();

  if(ticketId){
    const ticket_id = ticketId.toString();
    
    const ticket = await searchTicketById.execute({ticket_id});

    response.json(ticket);
  }

  
  
});



export default ticketRoutes;