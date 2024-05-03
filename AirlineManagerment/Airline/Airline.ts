import { Employee } from "../Employee/Employee";

export class Airline{
    private name: string;
    private location: string;
    private airlineCode: string;
    // private employee_flight:Employee[];

    constructor(name: string, location: string, airlineCode: string){
        this.name = name;
        this.location = location;
        this.airlineCode = airlineCode;
        // this.employee_flight = [];
    }


  
}