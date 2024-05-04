import { Aeroplane } from "./Aeroplane";
import { Airport } from "../Airport/Airport";
import { Department } from "../Department/Department";
import { Flight } from "../Flight/Flight";
import { Gate } from "../Flight/Gate";
import { Seat } from "../Flight/Seat";
import { Booking } from "../Booking/Booking";

export class Airline {
  private name: string;
  private location: string;
  private airlineCode: string;
  private aeroplanes: Aeroplane[] = [];
  private departments: Department[] = [];
  private flights: Flight[] = [];
  private gates: Gate[] = [];
  private bookings: Booking[] = [];
  private airports: Airport[] = [];

  constructor(name: string, location: string, airlineCode: string) {
    this.name = name;
    this.location = location;
    this.airlineCode = airlineCode;
  }

  getName(): string {
    return this.name;
  }

  getLocation(): string {
    return this.location;
  }

  getAirlineCode(): string {
    return this.airlineCode;
  }

  addAeroplane(aeroplane: Aeroplane): void {
    this.aeroplanes.push(aeroplane);
  }

  getAeroplanes(): Aeroplane[] {
    return this.aeroplanes;
  }

  addAirport(airport:Airport): void{
    this.airports.push(airport);
  }
  getAirports():Airport[]{
    return this.airports;
  }

  addDepartment(department: Department): void {
    this.departments.push(department);
  }

  getDepartments(): Department[] {
    return this.departments;
  }

  addFlight(flight: Flight): void {
    this.flights.push(flight);
  }

  getFlights(): Flight[] {
    return this.flights;
  }

  addGate(gate: Gate): void {
    this.gates.push(gate);
  }

  getGates(): Gate[] {
    return this.gates;
  }
  addBookingToAirline(booking: Booking): void {
    this.bookings.push(booking);
  }

  addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }

  getBookings(): Booking[] {
    return this.bookings;
  }
  getAllAvailableSeats(): Seat[] {
    let availableSeats: Seat[] = [];
    this.aeroplanes.forEach((aeroplane) => {
      const aeroplaneSeats = aeroplane.getAvailableSeats();
      availableSeats = availableSeats.concat(aeroplaneSeats);
    });
    return availableSeats;
  }
}
