import { getRepository } from "typeorm";
import Ticket from "../../models/Ticket";

interface Request {
  ticket_id: string,
}

class SearchTicketById {
  public async execute({ticket_id}:Request){
    const ticketRepository = getRepository(Ticket);

    const ticket = ticketRepository.find({where:{id:ticket_id}})

    return ticket

  }
}

export default SearchTicketById;