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

}

export default UserRepository;