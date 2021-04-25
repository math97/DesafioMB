import User from "../models/User";

class UserRepository {
  private users : User[];

  constructor(){
    this.users = [];
  }

  public create(user:User){
    this.users.push(user);

    return user;
  }
  public findById(id:string):User | undefined{
    const user =  this.users.find(u => u.id === id);

    return user;
  }

}

export default UserRepository;