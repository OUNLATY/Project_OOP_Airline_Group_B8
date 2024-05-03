import { Person } from "./Person";
import { Gender } from "./Gender";
import { Ticket } from "../Ticket/Ticket";
import { MealPreference } from "../Flight/MealPreference ";

export class Passenger extends Person {
    private mealPreference: MealPreference;
    private ticket: Ticket;
    constructor(
        name: string, 
        gender: Gender, 
        dateOfBirth: string,
        nationality:string,
    private  email:string,
    private phoneNumber:string,
    private address:string,
   ticket: Ticket,
    mealPreference: MealPreference,
    ) {
        super(name, gender, dateOfBirth, nationality);
        this.ticket = ticket;
        this.mealPreference = mealPreference;
    }

    getEmail():string{
        return this.email;
    }

    getPhoneNumber():string{
        return this.phoneNumber;
    }
    
    getAddress():string{
        return this.address;
    }

    getContacts():string{
        return `Email: ${this.getEmail()}, Phone Number: ${this.getPhoneNumber()}, Address: ${this.getAddress()}`;
    }
    hasReturnTicket(): boolean {
        return this.ticket.hasReturnTicket();
    }
    
 
    



}