import { getRepository } from "typeorm";
import { hash } from 'bcryptjs';
import Organizer from "../../models/Organizer";
import AppError from "../../errors/AppError";

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
    
    if(!organizerEmail) throw new AppError('An account with this email adress or cnpj already exist',403);

    const hashedPassword = await hash(password,8);

    const organizer = organizerRepository.create({name,cnpj,company_name:companyName,email,phone_number,password:hashedPassword});

    organizerRepository.save(organizer);
    
    return organizer;
  }
}

export default CreateOrganizeService;