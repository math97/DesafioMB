import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';

import authConfig from '../../config/authConfig';
import User from '../../models/User';
import UserRepository from '../../repositories/UserRepository';

interface Request {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute( {email, password}:Request ){

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({where:{email}});

    console.log(user);

    if (!user) throw new Error('Incorrect email/password combination.');

    const passwordMatched = await compare(password,user.password) ;
    
    if (!passwordMatched) throw new Error('Incorrect email/password combination.');

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService;