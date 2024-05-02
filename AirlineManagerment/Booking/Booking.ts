import { Passenger } from "../Person/Passenger";
import { Flight } from "../Flight/Flight";
import {Baggage } from "../Baggage/Baggage";



export class Booking {
    private bookingNumber: number;
    private fee: number;
    private flights: Flight[];  // Changed to array of flights
    private Bag: Baggage[]; // Changed to array
    constructor(bookingNumber: number, fee: number, flight: Flight,Bag: Baggage) {
        this.bookingNumber = bookingNumber;
        this.fee = fee;
        this.flights= [];
        this.Bag = []  ;// Updated
    }
    getFlight(flight:Flight): void{
        this.flights.push(flight);
    }
    
}