import { Router} from 'express';

import OrganizersRepository from '../repositories/OrganizerRepository';
import CreateOrganizerService from '../services/organizerServices/CreateOrganizeService';


const organizerRoutes = Router()

organizerRoutes.post('/',async (request,response)=>{  

  const {name,companyName,cnpj,email,password,phone_number} = request.body;
  
  const createOrganizerService = new CreateOrganizerService();
  
  const organizerResponse = await createOrganizerService.execute({name,companyName,cnpj,email,password,phone_number});

  response.json({organizerResponse});

});

export default organizerRoutes;