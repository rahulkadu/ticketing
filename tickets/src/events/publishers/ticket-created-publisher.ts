import { Publisher, Subjects, TicketCreatedEvent } from "@rktickets123/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated; 
}
