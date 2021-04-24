import Event from '../models/Event';

class EventsRepository {
  private events: Event[];

  constructor(){
    this.events = [];
  }

  public create(event:Event):Event{
    this.events.push(event);
  
    return event;
  }

  public findByOrganizer(organizerId:string){
     const events = this.events.filter(organizer => organizer.organizerId === organizerId);
     return events;
  }
}

export default EventsRepository;