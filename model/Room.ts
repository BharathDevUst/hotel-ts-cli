export class Room {
    constructor(
      public id: number,
      public name: string,
      public pricePerNight: number,
      public isAvailable: boolean = true
    ) {}
  }
  