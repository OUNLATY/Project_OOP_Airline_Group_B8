import {Department} from "../Department/Department";
import {Person} from "../Person/Person";
import { Gender } from "../Person/Gender";
import { Pilot } from "./Pilot";

export abstract class Employee extends Person {

    constructor(
        name:string,
        gender:Gender,
        dateOfBirth:string,
        nationality:string,
        private phoneNumber:string,
        private email:string,
        private department:Department,
        
    ){
        super(name,gender,dateOfBirth,nationality);
        
    }
   

    getPhoneNumber():string {
        return this.phoneNumber;
    }
    
    getEmail():string{
        return this.email;
    }

    getContacts():string{
        return `Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }

    getDepartment():Department{
        return this.department;
    }

    
}