import { getRepository } from "typeorm";

import SearchAllTicketsByEvent from  './SearchAllTicketsByEventService';
import SearchEventById from  '../eventServices/SearchEventById';
import Ticket from "../../models/Ticket";
import AppError from "../../errors/AppError";

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

    if(!event) throw new AppError('Event not found',402);

    if(ticketsAlreadySold.length < event.ticket_limit ){
      const ticket = ticketRepository.create({event_id,user_id})
      
      await ticketRepository.save(ticket);
  
      return ticket;
    }
    else throw new AppError('Tickets Sold Out',403);
  }
}

export default GenerateTicket;