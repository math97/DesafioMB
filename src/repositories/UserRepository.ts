import { EntityRepository, Repository } from "typeorm";
import User from "../models/User";

@EntityRepository()
class UserRepository extends Repository<User> {
  // private users : User[];

  // constructor(){
  //   this.users = [];
  // }

  // public create(user:User){
  //   this.users.push(user);

  //   return user;
  // }
  // public findById(id:string):User | undefined{
  //   const user =  this.users.find(u => u.id === id);

  //   return user;
  // }
  // public async findByEmail(email:string):Promise<User | null>{
  //   const user = await this.findOne({where:{email}});

  //   return user || null;
  // }

}

export default UserRepository;