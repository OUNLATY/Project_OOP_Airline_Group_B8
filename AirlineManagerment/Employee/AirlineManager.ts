import { Employee } from "./Employee";
import { Department } from "../Department/Department";
import { Gender } from "../Person/Gender";
import { Airline } from "../Airline/Airline";
import { Flight } from "../Flight/Flight";
import { Booking } from "../Booking/Booking";

export class AirlineManager extends Employee {
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
  
  
    getDepartmentsFromAirline(airline: Airline): Department[] {
        return airline.getDepartments();
      }
  
    getAllEmployeesInDepartment(department: Department): Employee[] {
      return department.getEmployees();
    }
  
    getAllFlights(airline: Airline): Flight[] {
      return airline.getFlights();
    }
  
    getAllBookings(airline: Airline): Booking[] {
      return airline.getBookings();
    }
  }