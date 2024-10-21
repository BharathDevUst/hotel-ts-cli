import inquirer from 'inquirer';
import { RoomService } from '../service/RoomService';
import { BookingService } from '../service/BookingService';
import { Booking } from '../model/Booking';

const roomService = new RoomService();
const bookingService = new BookingService();

export class HotelController {
  async manageRooms() {
    const choices = [
      'List Available Rooms',
      'Check Room Availability',
      'Book a Room',
      'Exit'
    ];

    let shouldExit = false;

    while (!shouldExit) {
      const { action } = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What do you want to do?',
          choices
        }
      ]);

      switch (action) {
        case 'List Available Rooms':
          this.listAvailableRooms();
          break;
        case 'Check Room Availability':
          await this.checkRoomAvailability();
          break;
        case 'Book a Room':
          await this.bookRoom();
          break;
        case 'Exit':
          shouldExit = true;
          break;
      }
    }
  }

  listAvailableRooms() {
    console.log('Available Rooms:');
    const rooms = roomService.listRooms();
    rooms.forEach(room => {
      if (room.isAvailable) {
        console.log(`${room.id}. ${room.name} - $${room.pricePerNight}/night`);
      }
    });
  }

  async checkRoomAvailability() {
    const { roomId } = await inquirer.prompt([
      {
        type: 'number',
        name: 'roomId',
        message: 'Enter the room ID:',
        validate: (input) => input ? !isNaN(input) ? true : 'Please enter a valid number' : 'Please enter a valid number',
      }
    ]);

    const isAvailable = roomService.checkAvailability(roomId);
    console.log(isAvailable ? 'Room is available' : 'Room is not available');
  }

  async bookRoom() {
    const { roomId } = await inquirer.prompt([
      {
        type: 'number',
        name: 'roomId',
        message: 'Enter the room ID to book:',
        validate: (input) => input ? !isNaN(input) ? true : 'Please enter a valid number': 'Please enter a valid number',
      }
    ]);

    const isAvailable = roomService.checkAvailability(roomId);

    if (isAvailable) {
      const { customerName, days } = await inquirer.prompt([
        {
          type: 'input',
          name: 'customerName',
          message: 'Enter customer name:',
        },
        {
          type: 'number',
          name: 'days',
          message: 'How many days will the customer stay?',
          validate: (input) => input ? input > 0 ? true : 'Please enter a valid number of days' : 'Please enter a valid number',
        }
      ]);

      const room = roomService.getRoomById(roomId);
      if (room) {
        const totalPrice = room.pricePerNight * days;
        const booking = new Booking(roomId, customerName, days, totalPrice);

        roomService.bookRoom(roomId);
        bookingService.addBooking(booking);

        console.log(`Room booked successfully for ${days} days. Total: $${totalPrice}`);
      }
    } else {
      console.log('Room is not available.');
    }
  }
}
