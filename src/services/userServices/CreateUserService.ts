import User from "../../models/User";
import UserRepository from "../../repositories/UserRepository";

interface Request{
  name: string;
  cpf: string;
  password: string;
  email: string;
  phone_number: number;
}

class CreateUserService {

  private userRepositories: UserRepository;

  constructor(userRepositories: UserRepository){
    this.userRepositories = userRepositories;
  }

  public async execute({name,cpf,email,password,phone_number}:Request){
    const user = new User({name,cpf,email,password,phone_number})

    this.userRepositories.create(user);

    return user;
  }

}

export default CreateUserService;