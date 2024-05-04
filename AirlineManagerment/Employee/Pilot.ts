import { Airline } from "../Airline/Airline";
import { Department } from "../Department/Department";
import { Flight } from "../Flight/Flight";
import { Gender } from "../Person/Gender";
import { Employee } from "./Employee";
export class Pilot extends Employee {
    constructor(
      name: string,
      gender: Gender,
      dateOfBirth: string,
      nationality: string,
      phoneNumber: string,
      email: string,
      private salary: number
    ) {
      super(
        name,
        gender,
        dateOfBirth,
        nationality,
        phoneNumber,
        email,
      );
    }
  
    getSalary(): number {
      return this.salary;
    }
    getFlightsFromAirline(airline: Airline): Flight[] {
      return airline.getFlights();
    }
    startFlight(flight: Flight): void {
          flight.setStartFlight(true);
          console.log(`Flight ${flight.getFlightNumber()} has started.`);
      }
      landFlight(flight: Flight): void {
          flight.setLanding(true);
          console.log(`Flight ${flight.getFlightNumber()} has landed.`);
      }
  
  }