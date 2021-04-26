import { getRepository } from "typeorm";
import User from "../../models/User";

interface Request{
  name: string;
  cpf: string;
  password: string;
  email: string;
  phone_number: number;
}

class CreateUserService {
  public async execute({name,cpf,email,password,phone_number}:Request){
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where:[{ email },{cpf}],
    });

    if (checkUserExists) throw new Error('Email address or cpf already used');

    const user = userRepository.create({name,cpf,email,password,phone_number})

    await userRepository.save(user);

    return user;
  }

}

export default CreateUserService;