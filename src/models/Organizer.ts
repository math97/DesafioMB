import {v4 as uuid} from 'uuid';

class Organizer { 
  id: string;

  name: string;

  company_name: string;

  cnpj: string;

  password: string;

  phone_number: number;

  email: string;

  constructor({name,company_name,cnpj,password,email,phone_number}:Omit<Organizer,'id'>){
    this.id = uuid();
    this.name = name;
    this.company_name = company_name;
    this.cnpj = cnpj;
    this.password = password;
    this.email = email;
    this.phone_number = phone_number;
  }
}


export default Organizer;