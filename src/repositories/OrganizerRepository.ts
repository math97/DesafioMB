import Organizer from '../models/Organizer';

class OrganizersRepository {
  private organizers: Organizer[];

  constructor(){
    this.organizers = [];
  }

  public create(organizer:Organizer):Organizer{
    this.organizers.push(organizer);
    console.log(this.organizers);
    

    return organizer;
  }

  public findByEmail(email:string){    
    const organizer =  this.organizers.find(o =>o.email===email);
    
    return organizer;
  }
}

export default OrganizersRepository;