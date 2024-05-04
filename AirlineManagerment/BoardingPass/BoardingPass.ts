export class BoardingPass {
    private passengerName: string;
    private flightDate: Date;
    // private flightTime: Date;
    private aeroplaneCode: string;
    private seatNumber: number;
    private flightRoute: string;
    private gateNumber: string;
    private isAccept: boolean = false; 
    private hasPassport: boolean = false;
  
    constructor(
      passengerName: string,
      flightDate: Date,
      // flightTime: Date,
      aeroplaneCode: string,
      seatNumber: number,
      flightRoute: string,
      gateNumber: string,
      isAccept: boolean = false
    ) {
      this.passengerName = passengerName;
      this.flightDate = flightDate;
      // this.flightTime = flightTime;
      this.aeroplaneCode = aeroplaneCode;
      this.seatNumber = seatNumber;
      this.flightRoute = flightRoute;
      this.gateNumber = gateNumber;
      this.isAccept = isAccept;
    }
  
    getPassengerName(): string {
      return this.passengerName;
    }
  
    getFlightDate(): Date {
      return this.flightDate;
    }
  
    // getFlightTime(): Date {
    //   return this.flightTime;
    // }
  
    getAeroplaneCode(): string {
      return this.aeroplaneCode;
    }
  
    getSeatNumber(): number {
      return this.seatNumber;
    }
  
    getFlightRoute(): string {
      return this.flightRoute;
    }
    getGateNumber(): string {
      return this.gateNumber;
    }
  
    setIsAccept(value: boolean): void {
      this.isAccept = value;
    }
  
    getIsAccept(): boolean {
      return this.isAccept;
    }
  
    setHasPassport(value: boolean): void {
      this.hasPassport = value;
    }
  
    getHasPassport(): boolean {
      return this.hasPassport;
    }
  }