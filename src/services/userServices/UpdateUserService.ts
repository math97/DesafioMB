import { getRepository } from "typeorm";
import UserUpdateDTO from "../../dto/userUpdateDTO";
import User from "../../models/User";
import UserRepository from "../../repositories/UserRepository";

class UpdateUserService{
  public async execute(userData:UserUpdateDTO){
    
    const userRepository = getRepository(User);

    const user = await  userRepository.findOne({where:{id:userData.id}});

    if(!user) throw new Error('User not found');

    if (userData.cpf) user.cpf = userData.cpf;
    if (userData.email) user.email = userData.email;
    if (userData.name) user.name = userData.name;
    if (userData.password) user.password = userData.password;
    if (userData.phone_number) user.phone_number = userData.phone_number;

    await userRepository.save(user);

    return user;    
  }
}

export default UpdateUserService;