import { Booking } from '../model/Booking';

export class BookingService {
  private bookings: Booking[] = [];

  addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }

  listBookings(): Booking[] {
    return this.bookings;
  }
}
