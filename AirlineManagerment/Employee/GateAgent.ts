import { Gender } from "../Person/Gender";
import { Employee } from "./Employee";
import { Airline } from "../Airline/Airline";
import { Department } from "../Department/Department";
import { Flight } from "../Flight/Flight";
import { Gate } from "../Flight/Gate";
import { Booking } from "../Booking/Booking";
import { BoardingPass } from "../BoardingPass/BoardingPass";
import { Passenger } from "../Person/Passenger";

export class GateAgent extends Employee {
  private gate: Gate;

  constructor(
    name: string,
    gender: Gender,
    dateOfBirth: string,
    nationality: string,
    phoneNumber: string,
    email: string,
    private airline: Airline,
    gate: Gate 
  ) {
    super(name, gender, dateOfBirth, nationality, phoneNumber, email);
    this.gate = gate;
  }

  getGate(): Gate {
    return this.gate;
  }

  getAirline(): Airline {
    return this.airline;
  }

  getAllBookingsFromAirline(airline: Airline): Booking[] {
    return airline.getBookings();
  }

  setBoardingPassAttributes(
    boardingPass: BoardingPass,
    isAccept: boolean,
    hasPassport: boolean
  ): void {
    boardingPass.setIsAccept(isAccept);
    boardingPass.setHasPassport(hasPassport);
  }

  addPassengerToFlight(passenger: Passenger, flight: Flight): void {
    flight.addPassenger(passenger);
    console.log(
      `Passenger ${passenger.getName()} added to flight ${flight.getFlightNumber()}.`
    );
  }

  addBoardingPassToPassengerIfAttributesTrue(
    boardingPass: BoardingPass,
    passenger: Passenger
  ): void {
    if (boardingPass.getIsAccept() && boardingPass.getHasPassport()) {
      passenger.addBoardingPass(boardingPass);
      console.log(`Boarding pass added to passenger ${passenger.getName()}.`);
    } else {
      console.log(
        `Boarding pass cannot be added to passenger ${passenger.getName()} due to missing attributes.`
      );
    }
  }

  addPassengerToFlightIfBoardingPassNotNull(
    passenger: Passenger,
    flight: Flight
  ): void {
    const boardingPass = passenger.getBoardingPass();
    if (boardingPass) {
      flight.addPassenger(passenger);
      console.log(
        `Passenger ${passenger.getName()} added to flight ${flight.getFlightNumber()}.`
      );
    } else {
      console.log(
        `Passenger ${passenger.getName()} does not have a boarding pass.`
      );
    }
  }

  getAllPassengersFromAirlineBookings(airline: Airline): Passenger[] {
    const allBookings = airline.getBookings();
    const allPassengers: Passenger[] = [];

    for (const booking of allBookings) {
      const passengers = booking.getPassengers();
      allPassengers.push(...passengers);
    }

    return allPassengers;
  }
}
