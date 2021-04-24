import Organizer from "../../models/Organizer";
import OrganizersRepository from "../../repositories/OrganizerRepository";

interface Request {
  name: string,
  companyName: string,
  cnpj:string,
  password:string,
  email: string,
  phone_number: number;
}

class CreateOrganizeService { 
  private organizerRepository: OrganizersRepository;
  
  constructor(organizerRepository: OrganizersRepository) {
    this.organizerRepository = organizerRepository;
  } 
  public async execute({name,companyName,cnpj,password,email,phone_number}:Request):Promise<Organizer>{
        
    const organizerEmail = this.organizerRepository.findByEmail(email);
    
    if(!!organizerEmail) throw new Error('An account with this email already exist')

    const organizer = new Organizer({name,company_name:companyName,cnpj,password,email,phone_number});

    this.organizerRepository.create(organizer);
    
    return organizer;
  }
}

export default CreateOrganizeService;