import {Department} from "../Department/Department";
import {Employee} from "./Employee";
import {Gender} from "../Person/Gender";

export class FlightAttendant extends Employee{
constructor(
    name:string,
    gender:Gender,
    dateOfBirth:string,
    nationality:string,
    phoneNumber:string,
    email:string,
    department:Department,
    private salary:number
){
    super(name, gender, dateOfBirth, nationality, phoneNumber, email, department)
}

    getSalary(): number{
        return this.salary;
    }
}