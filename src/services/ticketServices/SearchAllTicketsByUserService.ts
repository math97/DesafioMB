import { getRepository } from "typeorm";
import Ticket from "../../models/Ticket";

interface Request {
  user_id: string,
}

class SearchAllTicketsByUser {
  public async execute({user_id}:Request){
    const ticketRepository = getRepository(Ticket);

    const ticket = ticketRepository.find({where:{user_id}})

    return ticket
  }
}

export default SearchAllTicketsByUser;