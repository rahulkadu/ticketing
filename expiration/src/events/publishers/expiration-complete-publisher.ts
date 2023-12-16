import { Publisher, ExpirationCompleteEvent, Subjects } from '@rktickets123/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
