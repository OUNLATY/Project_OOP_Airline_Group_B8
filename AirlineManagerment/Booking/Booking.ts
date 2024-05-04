import {Airline} from "../Airline/Airline"
import {Flight} from "../Flight/Flight"
import {Passenger} from "../Person/Passenger"
import {Meal} from "../Flight/Meal"
import {Seat} from "../Flight/Seat"
import {Gate} from "../Flight/Gate"
export class Booking {
    private airline: Airline;
    private flight: Flight;
    private returnFlight: Flight | null; 
    private passengers: Passenger[];
    private isReturn: boolean;
    private meals: Meal[]; 
    private seats: Seat[]; 
    private gates: Gate[] = []; 
  
    constructor(
      airline: Airline,
      flight: Flight,
      passengers: Passenger[],
      returnFlight: Flight | null = null,
      isReturn: boolean = false,
      meals: Meal[],
      seats: Seat[] = []
    ) {
      this.airline = airline;
      this.flight = flight;
      this.returnFlight = returnFlight;
      this.passengers = passengers;
      this.isReturn = isReturn;
      this.meals = meals;
      this.seats = seats;
    }
  
    getAirline(): Airline {
      return this.airline;
    }
  
    getFlight(): Flight {
      return this.flight;
    }
  
    getReturnFlight(): Flight | null {
      return this.returnFlight;
    }
  
    getPassengers(): Passenger[] {
      return this.passengers;
    }
  
    isReturnBooking(): boolean {
      return this.isReturn;
    }
  
    getMeal(): Meal[] {
      return this.meals;
    }
  
    getSeats(): Seat[] {
      return this.seats;
    }
  
    addGateToBooking(gate: Gate): void {
      this.gates.push(gate);
    }
  
    getGates(): Gate[] {
      return this.gates;
    }
  }