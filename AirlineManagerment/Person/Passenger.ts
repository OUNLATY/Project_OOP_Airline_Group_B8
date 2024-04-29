import { Person } from "./Person";
import { Gender } from "./Gender";

export class Passenger extends Person {
    constructor(
        name: string, 
        gender: Gender, 
        dateOfBirth: string,
        nationality:string,
    private  email:string,
    private phoneNumber:string,
    private address:string
    // private BoardingPass: BoardingPass 
    ) {
        super(name, gender, dateOfBirth, nationality);
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

}