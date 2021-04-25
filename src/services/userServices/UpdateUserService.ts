import UserUpdateDTO from "../../dto/userUpdateDTO";
import User from "../../models/User";
import UserRepository from "../../repositories/UserRepository";

class UpdateUserService{

  private userRepository:UserRepository;

  constructor(userRepository:UserRepository){
    this.userRepository = userRepository;
  }

  public async execute(userData:UserUpdateDTO){

    const user = this.userRepository.findById(userData.id);

    if(!user) throw new Error('User not found');

    if (userData.cpf) user.cpf = userData.cpf;
    if (userData.email) user.email = userData.email;
    if (userData.name) user.name = userData.name;
    if (userData.password) user.password = userData.password;
    if (userData.phone_number) user.phone_number = userData.phone_number;

    console.log(this.userRepository);

    return user;    
  }
}

export default UpdateUserService;