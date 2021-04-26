import { Router } from 'express';

import AuthenticateUserService from '../services/sessionServices/AuthenticateUserService';
import AuthenticateOrganizerService from '../services/sessionServices/AuthenticateOrganizerService';

const sessionRoutes = Router();

sessionRoutes.post('/users',async(request,response)=>{
  const { email,password } = request.body;

  const authenticateUserService = new AuthenticateUserService();

  const {user,token } = await authenticateUserService.execute({email,password});

  return response.json({user,token});
});
sessionRoutes.post('/organizers',async(request,response)=>{
  const { email,password } = request.body;

  const authenticateOrganizerService = new AuthenticateOrganizerService();

  const {organizer,token } = await authenticateOrganizerService.execute({email,password});

  return response.json({organizer,token});
});

export default sessionRoutes;