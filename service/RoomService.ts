import { Room } from '../model/Room';

export class RoomService {
  private rooms: Room[] = [];

  constructor() {
    // Preload rooms
    this.rooms = [
      new Room(1, 'Single Room', 100),
      new Room(2, 'Double Room', 150),
      new Room(3, 'Suite', 300),
    ];
  }

  listRooms(): Room[] {
    return this.rooms;
  }

  checkAvailability(roomId: number): boolean {
    const room = this.rooms.find(r => r.id === roomId);
    return room ? room.isAvailable : false;
  }

  bookRoom(roomId: number): boolean {
    const room = this.rooms.find(r => r.id === roomId);
    if (room && room.isAvailable) {
      room.isAvailable = false;
      return true;
    }
    return false;
  }

  getRoomById(roomId: number): Room | undefined {
    return this.rooms.find(r => r.id === roomId);
  }
}
