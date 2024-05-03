
import { Flight } from "../Flight/Flight";
import {Baggage } from "../Baggage/Baggage";

export class Booking {
    private bookingNumber: number;
    private price: number;
    private flights: Flight[];  // Changed to array of flights
    private Bag: Baggage[]; // Changed to array
    constructor(bookingNumber: number, price: number, flight: Flight,Bag: Baggage) {
        this.bookingNumber = bookingNumber;
        this.price = price;
        this.flights= [];
        this.Bag = []  ;// Updated
    }
    getFlight(flight:Flight): void{
        this.flights.push(flight);
    }

    getBag(bag:Baggage): void{
        this.Bag.push(bag)
    }


    
}