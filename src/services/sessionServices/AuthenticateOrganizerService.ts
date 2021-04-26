import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';

import authConfig from '../../config/authConfig';
import Organizer from '../../models/Organizer';

interface Request {
  email: string;
  password: string;
}

class AuthenticateOrganizerService {
  public async execute( {email, password}:Request ){

    const organizersRepository = getRepository(Organizer);

    const organizer = await organizersRepository.findOne({where:{email}});

    if (!organizer) throw new Error('Incorrect email/password combination.');

    const passwordMatched = password === organizer.password ? true : false ;
    
    if (!passwordMatched) throw new Error('Incorrect email/password combination.');

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