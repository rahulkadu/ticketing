import { Publisher, OrderCancelledEvent, Subjects } from '@rktickets123/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
