import { EntityRepository, Repository } from 'typeorm';
import Event from '../models/Event';

@EntityRepository()
class EventsRepository extends Repository<Event> {
  // private events: Event[];

  // constructor(){
  //   this.events = [];
  // }

  // public create(event:Event):Event{
  //   this.events.push(event);
  
  //   return event;
  // }

  // public findByOrganizer(organizerId:string){
  //    const events = this.events.filter(organizer => organizer.organizerId === organizerId);
  //    return events;
  // }

  // public  findById(eventId:string){
    
  //   const event =  this.events.find(e => e.id ===eventId);

  //   return event;
  // }

  // public delete(event:Event){
  //   const indexEvent = this.events.findIndex(e => e.id ===event.id);  
  //   this.events.splice(indexEvent,1);
  // }
}

export default EventsRepository;