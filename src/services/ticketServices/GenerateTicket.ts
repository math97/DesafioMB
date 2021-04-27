import { getRepository } from "typeorm";

import SearchAllTicketsByEvent from  './SearchAllTicketsByEventService';
import SearchEventById from  '../eventServices/SearchEventById';
import Ticket from "../../models/Ticket";

interface Request {
  user_id: string,
  event_id: string,
}

class GenerateTicket {
  public async execute({event_id,user_id}:Request){
    const ticketRepository = getRepository(Ticket);

    const searchAllTicketsByEvent = new SearchAllTicketsByEvent();
    const searchEventById = new SearchEventById();

    const ticketsAlreadySold = await searchAllTicketsByEvent.execute({event_id});
    const event = await searchEventById.execute(event_id);

    if(!event) throw new Error('Event not found');

    if(ticketsAlreadySold.length < event.ticket_limit ){
      const ticket = ticketRepository.create({event_id,user_id})
      
      await ticketRepository.save(ticket);
  
      return ticket;
    }
    else throw new Error('Tickets Sold Out');
  }
}

export default GenerateTicket;