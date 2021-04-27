import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';

import authConfig from '../../config/authConfig';
import Organizer from '../../models/Organizer';
import AppError from '../../errors/AppError';

interface Request {
  email: string;
  password: string;
}

class AuthenticateOrganizerService {
  public async execute( {email, password}:Request ){

    const organizersRepository = getRepository(Organizer);

    const organizer = await organizersRepository.findOne({where:{email}});

    if (!organizer) throw new AppError('Incorrect email/password combination.',403);

    const passwordMatched = await compare(password,organizer.password) ;
    
    if (!passwordMatched) throw new AppError('Incorrect email/password combination.',403);

    const token = sign({}, authConfig.jwt.secret, {
      subject: organizer.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      organizer,
      token,
    }
  }
}

export default AuthenticateOrganizerService;