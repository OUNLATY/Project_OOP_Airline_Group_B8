import { Employee } from "./Employee";
import { Department } from "../Department/Department";
import { Gender } from "../Person/Gender";
import { Airline } from "../Airline/Airline";
import { Flight } from "../Flight/Flight";

export class AirportController extends Employee {
    constructor(
      name: string,
      gender: Gender,
      dateOfBirth: string,
      nationality: string,
      phoneNumber: string,
      email: string,
      private experienceYears: number // Specific to AirportController
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
  
    getExperienceYears(): number {
      return this.experienceYears;
    }
  
    getAllFlights(airline: Airline): Flight[] {
      return airline.getFlights();
    }
    getAllDepartments(airline: Airline): Department[] {
      return airline.getDepartments();
    }
  }