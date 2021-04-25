import { sign } from 'jsonwebtoken';

import authConfig from '../../config/authConfig';
import UserRepository from '../../repositories/UserRepository';

interface Request {
  email: string;
  password: string;
}

class AuthenticateUserService {
  private usersRepository : UserRepository;

  constructor(usersRepository:UserRepository){
    this.usersRepository = usersRepository;
  }

  public async execute( {email, password}:Request ){

    const user =  this.usersRepository.findByEmail(email)

    console.log(user);
    

    if (!user) throw new Error('Incorrect email/password combination.');

    const passwordMatched = password === user.password ? true : false ;

    console.log(!!passwordMatched);
    console.log(!passwordMatched);
    console.log(passwordMatched);

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