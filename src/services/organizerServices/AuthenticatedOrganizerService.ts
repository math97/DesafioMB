import OrganizersRepository from "../../repositories/OrganizerRepository";

interface Request {
  email: string,
  password: string,
}

class AuthenticatedOrganizerService {
  private organizerRepository: OrganizersRepository;
  
  constructor(organizerRepository: OrganizersRepository) {
    this.organizerRepository = organizerRepository;
  } 

  public async execute({email,password}:Request){
    const organizerExist = this.organizerRepository.findByEmail(email);

    if (!organizerExist) throw new Error('Organizer not found');

    if(organizerExist.password === password){
      return { message:'authorized'};
    }else{
      throw new Error("Credentials don't match");
    }
  }
}

export default AuthenticatedOrganizerService;