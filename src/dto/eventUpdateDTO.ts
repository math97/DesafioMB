export default interface EventUpdateDTO {
   id: string,
   name?: string,
   description?: string,
   date?: Date,
   ticket_limit?: number,
   ticket_price?: number,
}