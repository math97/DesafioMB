import { Router } from 'express';

import CreateUserService from '../services/userServices/CreateUserService'

import UserRepository from '../repositories/UserRepository';

const userRoutes = Router();

const userRepository = new UserRepository();

userRoutes.post('/',async (request,response)=>{
  const { name,cpf,password,email,phone_number}  = request.body;

  const createUser = new CreateUserService(userRepository);
  const user = await createUser.execute({name,cpf,password,email,phone_number});

  response.json(user);
});

export default userRoutes;