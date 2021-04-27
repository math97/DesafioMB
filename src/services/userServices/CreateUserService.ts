import { getRepository } from "typeorm";
import { hash } from 'bcryptjs';
import User from "../../models/User";
import AppError from "../../errors/AppError";

interface Request{
  name: string;
  cpf: string;
  password: string;
  email: string;
  phone_number: number;
}

class CreateUserService {
  public async execute({name,cpf,email,password,phone_number}:Request):Promise<User>{
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where:[{ email },{cpf}],
    });

    if (checkUserExists) throw new AppError('Email address or cpf already used',403);

    const hashedPassword = await hash(password,8);

    const user = userRepository.create({name,cpf,email,password:hashedPassword,phone_number})

    await userRepository.save(user);

    return user;
  }

}

export default CreateUserService;