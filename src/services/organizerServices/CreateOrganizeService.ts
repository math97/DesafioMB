import { getRepository } from "typeorm";
import Organizer from "../../models/Organizer";

interface Request {
  name: string,
  companyName: string,
  cnpj:string,
  password:string,
  email: string,
  phone_number: number;
}

class CreateOrganizeService { 
  public async execute({name,companyName,cnpj,password,email,phone_number}:Request):Promise<Organizer>{
    
    const organizerRepository = getRepository(Organizer);

    const organizerEmail = organizerRepository.findOne({where:[{email},{cnpj}]});
    
    if(!organizerEmail) throw new Error('An account with this email adress or cnpj already exist')

    const organizer = organizerRepository.create({name,cnpj,company_name:companyName,email,phone_number,password});

    organizerRepository.save(organizer);
    
    return organizer;
  }
}

export default CreateOrganizeService;