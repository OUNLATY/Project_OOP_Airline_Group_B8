import { Airline } from "../Airline/Airline";
import { Department } from "../Department/Department";
import { Flight } from "../Flight/Flight";
import { Gender } from "../Person/Gender";
import { Employee } from "./Employee";
export class Crew extends Employee {
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
  }