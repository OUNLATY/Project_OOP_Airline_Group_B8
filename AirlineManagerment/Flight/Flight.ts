//TODO:

import { Crew } from "../Employee/Crew";
import { FlightAttendant } from "../Employee/FlightAttendant";
import { Pilot } from "../Employee/Pilot";
import { Passenger } from "../Person/Passenger";

 

export class Flight {
    private flightNumber: number;
    private departureDate: Date;
    private arrivalTime: Date;
    private departureAirport: string;
    private departureLocation: string;
    private destinationAirport: string;
    private landingLocation: string;
    private park: string;
    private passengers: Passenger[] ;
    private pilots:Pilot[];
    private flightAttendant:FlightAttendant[];
    private crew:Crew[];

    constructor(flightNumber: number,
        departureDate: Date, 
        arrivalTime:Date,departureLocation:string, 
        departureAirport:string,destinationAirport: string, 
        landingLocation:string, 
        park:string,
        passenger:Passenger[],
        pilot:Pilot[],
        flightAttendant:FlightAttendant[],
        crew:Crew[]) {

        this.flightNumber = flightNumber;
        this.departureDate = departureDate;
        this.arrivalTime = arrivalTime;
        this.departureAirport = departureAirport;
        this.departureLocation = departureLocation;
        this.destinationAirport = destinationAirport;
        this.landingLocation = landingLocation;
        this.park = park;
        this.passengers= passenger|| [];
        this.pilots= pilot || [];
        this.flightAttendant= flightAttendant || [];
        this.crew= crew || [];

        
    }

    addPassenger(passenger:Passenger):void {
        this.passengers.push(passenger);
    }
    getPassengers(): Passenger[] {
        return this.passengers;
    }
    getPassengersWithReturnTickets(): Passenger[] {
        return this.passengers.filter(passenger => passenger.hasReturnTicket());
    }
}

