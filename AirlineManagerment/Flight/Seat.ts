import {Aeroplane} from "../Airline/Aeroplane"

export class Seat {
    private number: number;
    private type: string; 
    private isAvailable: boolean;
  
    constructor(
      number: number,
      type: string,
      isAvailable: boolean = true,
    ) {
      this.number = number;
      this.type = type;
      this.isAvailable = isAvailable;
    }
  
    getSeatNumber():number{
      return this.number;
    }
  
    setAvailability(availability: boolean): void {
      this.isAvailable = availability;
    }
    getIsAvailable(): boolean {
      return this.isAvailable;
    }
    getIsUnAvailable(): boolean {
      return (this.isAvailable = false);
    }
  }
  