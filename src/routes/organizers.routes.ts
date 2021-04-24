import { Router} from 'express';

import OrganizersRepository from '../repositories/OrganizerRepository';
import CreateOrganizerService from '../services/organizerServices/CreateOrganizeService';
import AuthenticatedOrganizerService from '../services/organizerServices/AuthenticatedOrganizerService';
import Organizer from '../models/Organizer';

const organizerRoutes = Router()

const organizerRepository = new OrganizersRepository();

organizerRoutes.post('/',async (request,response)=>{  

  const {name,companyName,cnpj,email,password,phone_number} = request.body;
  
  const createOrganizerService = new CreateOrganizerService(organizerRepository);
  
  const organizerResponse = await createOrganizerService.execute({name,companyName,cnpj,email,password,phone_number});

  response.json({organizerResponse});

});

organizerRoutes.post('/authorized',async (request,response)=>{
  const { email,password } = request.body;
  
  const authenticatedOrganizer = new AuthenticatedOrganizerService(organizerRepository);

  const authorized = await authenticatedOrganizer.execute({email,password});  

  if(authorized) response.json(authorized);

})

export default organizerRoutes;