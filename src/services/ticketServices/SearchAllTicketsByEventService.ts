import { getRepository } from "typeorm";
import Ticket from "../../models/Ticket";

interface Request {
  event_id: string,
}

class SearchAllTicketsByEvent {
  public async execute({event_id}:Request){
    const ticketRepository = getRepository(Ticket);

    const ticket = ticketRepository.find({where:{event_id}})

    return ticket

  }
}

export default SearchAllTicketsByEvent;