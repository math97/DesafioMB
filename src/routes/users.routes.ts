import { Request, Response, Router } from 'express';

import CreateUserService from '../services/userServices/CreateUserService';
import UpdateUserService from '../services/userServices/UpdateUserService';

import UserUpdateDTO from '../dto/userUpdateDTO';

import UserRepository from '../repositories/UserRepository';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRoutes = Router();

const userRepository = new UserRepository();

userRoutes.post('/',async (request,response)=>{
  const { name,cpf,password,email,phone_number}  = request.body;

  const createUser = new CreateUserService(userRepository);
  const user = await createUser.execute({name,cpf,password,email,phone_number});

  response.json(user);
});

userRoutes.put('/',ensureAuthenticated,async (request:Request,response:Response)=>{

  const userData:UserUpdateDTO  = request.body;

  const userUpdateService = new UpdateUserService();

  const user = await userUpdateService.execute(userData);

  response.json(user);

});

export default userRoutes;