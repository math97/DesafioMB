import {v4 as uuid} from 'uuid';

class User {
  id: string;
  
  name: string;

  cpf: string;

  password: string;

  email: string;

  phone_number: number;

  constructor({name,cpf,email,password,phone_number}:Omit<User,'id'>){
    this.id = uuid();
    this.name = name;
    this.cpf = cpf;
    this.password = password;
    this.email = email;
    this.phone_number = phone_number;
  }
}

export default User;