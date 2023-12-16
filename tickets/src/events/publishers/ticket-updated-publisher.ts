import { Publisher, Subjects, TicketUpdatedEvent } from "@rktickets123/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated; 
}
