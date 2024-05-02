//TODO:

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
    private passengers: Passenger[]=[] ;
    constructor(flightNumber: number, departureDate: Date, arrivalTime:Date,departureLocation:string, departureAirport:string,destinationAirport: string, landingLocation:string, park:string,passenger:Passenger) {
        this.flightNumber = flightNumber;
        this.departureDate = departureDate;
        this.arrivalTime = arrivalTime;
        this.departureAirport = departureAirport;
        this.departureLocation = departureLocation;
        this.destinationAirport = destinationAirport;
        this.landingLocation = landingLocation;
        this.park = park;
        this.passengers;
    }

    getFlightName(): string {
        return this.flightNumber.toString();
    }
    getDepartureDate(): Date {
        return this.departureDate;
    }

    getArrivalTime(): Date {
        return this.arrivalTime;
    }

    getDepartureLocation(): string {
        return this.departureLocation;
    }

    getDepartureAirport(): string {
        return this.departureAirport;
    }

    getDestinationAirport(): string {
        return this.destinationAirport;
    }

    getLandingLocation(): string {
        return this.landingLocation;
    }

    getPark(): string {
        return this.park;
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

