import{Pilot} from "../Employee/Pilot";
import{FlightAttendant} from "../Employee/FlightAttendant";
import{Crew} from "../Employee/Crew";
import{AirlineMechanic} from "../Employee/AirlineMechanic";
import{Aeroplane} from "../Airline/Aeroplane";
import{Seat} from "../Flight/Seat";
import{Passenger} from "../Person/Passenger";
export class Flight {
    private flightNumber: number;
    private departureDate: Date;
    private arrivalTime: Date;
    private departureLocation: string;
    private departureAirport: string;
    private landingLocation: string;
    private park: string;
    private pilots: Pilot[]=[];
    private flightAttendants: FlightAttendant[]=[];
    private crews: Crew[]=[];
    private airlineMechanics: AirlineMechanic[]=[];
    private aeroplane: Aeroplane;
    private passengers: Passenger[] = []; // Added passengers array
    private isStartFlight: boolean = false;
    private isLanding: boolean = false;
  
    constructor(
      flightNumber: number,
      departureDate: Date,
      arrivalTime: Date,
      departureLocation: string,
      departureAirport: string,
      landingLocation: string,
      park: string,
      pilots: Pilot[]=[],
      flightAttendants: FlightAttendant[]=[],
      crews: Crew[]=[],
      airlineMechanics: AirlineMechanic[]=[],
      aeroplane: Aeroplane
      
    ) {
      // Initialize all properties
      this.flightNumber = flightNumber;
      this.departureDate = departureDate;
      this.arrivalTime = arrivalTime;
      this.departureLocation = departureLocation;
      this.departureAirport = departureAirport;
      this.landingLocation = landingLocation;
      this.park = park;
      this.pilots = pilots;
      this.flightAttendants = flightAttendants;
      this.crews = crews;
      this.airlineMechanics = airlineMechanics;
      this.aeroplane = aeroplane;
    }
  
    getFlightNumber(): number {
      return this.flightNumber;
    }
  
    getDepartureDate(): Date {
      return this.departureDate;
    }
  
    getArrivalTime(): Date {
      return this.arrivalTime;
    }
  
    getDepartureLocation(): string {
      return this.departureLocation;
    }
  
    getDepartureAirport(): string {
      return this.departureAirport;
    }
  
    getLandingLocation(): string {
      return this.landingLocation;
    }
  
    getPark(): string {
      return this.park;
    }
  
    getPilot(): Pilot[] {
      return this.pilots;
    }
      getPilots(): Pilot[] {
        return this.pilots;
      }
    
      assignPilot(pilot: Pilot): void {
        this.pilots.push(pilot);
      }
  
    getFlightAttendant(): FlightAttendant[] {
      return this.flightAttendants;
    }
  
    getAeroplane(): Aeroplane {
      return this.aeroplane;
    }
    addPassenger(passenger: Passenger): void {
      this.passengers.push(passenger);
    }
  
    getPassengers(): Passenger[] {
      return this.passengers;
    }
  
    getAvailableSeats(): Seat[] {
      return this.aeroplane.getAvailableSeats();
    }
    setStartFlight(isStart: boolean): void {
        this.isStartFlight = isStart;
    }
  
    setLanding(isLanding: boolean): void {
        this.isLanding = isLanding;
    }
  }