import { EntityRepository, Repository } from "typeorm";
import Ticket from "../models/Ticket";

@EntityRepository()
class TicketRepository extends Repository<Ticket> {

}

export default TicketRepository;