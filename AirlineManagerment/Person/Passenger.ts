import {Person} from "./Person"
import {Gender} from "./Gender"
import {Booking} from "../Booking/Booking"
import {Baggage} from "../Baggage/Baggage"
import {BoardingPass} from "../BoardingPass/BoardingPass"
import {Ticket} from "../Ticket/Ticket"
import {Flight} from "../Flight/Flight"
import {Meal} from "../Flight/Meal"
import {Seat} from "../Flight/Seat"
import { Airline } from "../Airline/Airline"

export class Passenger extends Person {
      private baggages: Baggage[];
      private boardingPass: BoardingPass | null;
      private ticket: Ticket | null; 
      private airline!: Airline;

    
      constructor(
        name: string,
        gender: Gender,
        dateOfBirth: string,
        nationality: string,
        private email: string,
        private phoneNumber: string,
        private address: string,
        baggages: Baggage[]=[],
        boardingPass: BoardingPass | null = null,
        ticket: Ticket | null = null,
      ) {
        super(name, gender, dateOfBirth, nationality);
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.baggages = baggages;
        this.boardingPass = boardingPass;
        this.ticket = ticket; 
      }
      getBaggage(): Baggage[] {
        return this.baggages;
      }
    
      bookFlightWithSeatSelection(
        airline:Airline,
        flight: Flight,
        passengers: Passenger[],
        selectedSeats: Seat[],
        returnFlight: Flight | null = null,
        isReturn: boolean = false,
        meals: Meal[] = []
      ): Booking {
        // Validate selected seats
        const validSelectedSeats = selectedSeats.filter((seat) =>
          flight.getAvailableSeats().includes(seat)
        );
    
        if (validSelectedSeats.length !== passengers.length) {
          console.log(
            "Number of selected seats should match the number of passengers."
          );
        }
    
        // Check if any of the selected seats are not available
        const unavailableSeats = selectedSeats.filter(
          (seat) => !seat.getIsAvailable()
        );
        if (unavailableSeats.length > 0) {
          console.log("Some selected seats are not available.");
          // return null;
        }
    
        // Update availability of selected seats
        validSelectedSeats.forEach((seat) => seat.setAvailability(false));
        const booking = new Booking(
          airline,
          flight,
          passengers,
          returnFlight,
          isReturn,
          meals,
          validSelectedSeats
        );
        airline.addBooking(booking);
        return booking;
      }
    
      getBoardingPass(): BoardingPass | null {
        return this.boardingPass;
      }
    
      setBoardingPass(boardingPass: BoardingPass): void {
        this.boardingPass = boardingPass;
      }
    
      addBoardingPass(boardingPass: BoardingPass): void {
        this.boardingPass = boardingPass;
      }
  
      getTicket(): Ticket | null {
        return this.ticket;
      }
      setTicket(ticket: Ticket): void {
      this.ticket = ticket;
    }
      
    }
    
    