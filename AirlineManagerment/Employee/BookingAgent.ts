import { Airline } from "../Airline/Airline";
import { Department } from "../Department/Department";
import { Gender } from "../Person/Gender";
import { Employee } from "./Employee";
import { Gate } from "../Flight/Gate";
import { Booking } from "../Booking/Booking";
import { Ticket } from "../Ticket/Ticket";
import { Passenger } from "../Person/Passenger";

export class BookingAgent extends Employee {
    constructor(
      name: string,
      gender: Gender,
      dateOfBirth: string,
      nationality: string,
      phoneNumber: string,
      email: string,
      private airline: Airline
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
  
    getAllBookings(): Booking[] {
      return this.airline.getBookings();
    }
  
    addBooking(booking: Booking): void {
      this.airline.addBooking(booking);
    }
  
    getAllPassengers(): Passenger[] {
      const bookings = this.airline.getBookings();
      const passengers: Passenger[] = [];
  
      for (const booking of bookings) {
        passengers.push(...booking.getPassengers());
      }
  
      return passengers;
    }
  
    addGateForBooking(booking: Booking, gate: Gate): void {
      booking.addGateToBooking(gate);
    }
     assignTicketToPassenger(passenger: Passenger, ticket: Ticket): void {
    passenger.setTicket(ticket);
  }
  }

  