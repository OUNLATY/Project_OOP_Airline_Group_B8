// The department or employee
import {Airline} from "../Airline/Airline.ts";

export class Department{
constructor(private name:string, private airline:Airline){}

    getNameOfDepartment():string{
        return this.name;
    }

    getCompanyOfDepartment():Airline{
        return this.airline;
    }

}