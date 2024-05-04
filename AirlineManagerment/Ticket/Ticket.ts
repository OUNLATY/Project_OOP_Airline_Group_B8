export class Ticket {
    private passengerName: string;
    private departureDate: Date;
   private aeroplaneCode: string;
    private seatNumber: number;
    private flightRoute: string;
    private gateNumber: string;
  
    constructor(
      passengerName: string,
      departureDate: Date,
      aeroplaneCode: string,
      seatNumber: number,
      flightRoute: string,
      gateNumber: string
       
    ) {
      this.passengerName = passengerName;
      this.departureDate = departureDate;
      this.seatNumber = seatNumber;
      this.aeroplaneCode = aeroplaneCode;
      this.flightRoute = flightRoute;
      this.gateNumber = gateNumber;
  
    }
  
    getPassengerName(): string{
      return this.passengerName;
    }
  
  
    getDepartureDate(): Date {
      return this.departureDate;
    }
  
    getAeroplaneCode():string{
      return this.aeroplaneCode;
    }
  
      getSeatNumber(): number {
      return this.seatNumber;
    }
  
    getFlightRoute():string{
      return this.flightRoute
    }
  
  
  }