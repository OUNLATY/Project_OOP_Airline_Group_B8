
import { Flight } from "../Flight/Flight";
import {Baggage } from "../Baggage/Baggage";
import { BoardingPass } from "../BoardingPass/BoardingPass";

export class Booking {
    private bookingNumber: number;
    private price: number;
    private boarding_pass: BoardingPass[];  // Changed to array of boarding_pass
    private Bag: Baggage[]; // Changed to array
    constructor(bookingNumber: number, price: number, boarding_pass: BoardingPass,Bag: Baggage) {
        this.bookingNumber = bookingNumber;
        this.price = price;
        this.boarding_pass= [];
        this.Bag = []  ;// Updated
    }
    addBoardingPass(BoardingPass:BoardingPass): void{
        this.boarding_pass.push(BoardingPass);
    }

    addBag(bag:Baggage): void{
        this.Bag.push(bag)
    }


    
}