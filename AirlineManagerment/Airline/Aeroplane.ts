import {Seat} from "../Flight/Seat"
export class Aeroplane {
    private name: string;
    private airlineCode: string;
    private seats: Seat[] = [];
  
    constructor(name: string, airlineCode: string) {
      this.name = name;
      this.airlineCode = airlineCode;
    }
  
    getName(): string {
      return this.name;
    }
    getAeroplaneCode(): string {
      return this.airlineCode;
    }
    addSeat(seat: Seat): void {
      this.seats.push(seat);
    }
  
    getSeats(): Seat[] {
      return this.seats;
    }
  
    getAvailableSeats(): Seat[] {
      return this.seats.filter((seat) => seat.getIsAvailable());
    }
  
    getUnavailableSeats(): Seat[] {
      return this.seats.filter((seat) => seat.getIsUnAvailable());
    }
}