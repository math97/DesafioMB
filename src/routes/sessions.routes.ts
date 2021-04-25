import { Router } from 'express';

import AuthenticateUserService from '../services/sessionServices/AuthenticateUserService';
import AuthenticateOrganizerService from '../services/sessionServices/AuthenticateOrganizerService';

import UserRepository from '../repositories/UserRepository';

const sessionRoutes = Router();

const userRepository = new UserRepository();

sessionRoutes.post('/users',async(request,response)=>{
  const { email,password } = request.body;

  const authenticateUserService = new AuthenticateUserService(userRepository);

  const {user,token } = await authenticateUserService.execute({email,password});

  return response.json({user,token});
});
sessionRoutes.post('/organizers',async(request,response)=>{
  const { email,password } = request.body;

  const authenticateOrganizerService = new AuthenticateOrganizerService(userRepository);

  const {user,token } = await authenticateOrganizerService.execute({email,password});

  return response.json({user,token});
});

export default sessionRoutes;