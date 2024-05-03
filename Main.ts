import {Person} from "./AirlineManagerment/Person/Person";
import { Gender } from "./AirlineManagerment/Person/Gender";
import {Passenger} from "./AirlineManagerment/Person/Passenger";
import {Employee} from "./AirlineManagerment/Employee/Employee";
import {Pilot} from "./AirlineManagerment/Employee/Pilot";
import {FlightAttendant} from "./AirlineManagerment/Employee/FlightAttendant";
import {AirlineMechanic} from "./AirlineManagerment/Employee/AirlineMechanic";
import {Crew} from "./AirlineManagerment/Employee/Crew";
import {Department} from "./AirlineManagerment/Department/Department";
import { Airline } from "./AirlineManagerment/Airline/Airline";

import { Baggage } from "./AirlineManagerment/Baggage/Baggage"; 
import { Flight } from "./AirlineManagerment/Flight/Flight";
import { Ticket } from "./AirlineManagerment/Ticket/Ticket";
import { MealPreference } from "./AirlineManagerment/Flight/MealPreference ";
import {Booking} from "./AirlineManagerment/Booking/Booking";
// import { BoardingPass } from "./AirlineManagerment/BoardingPass/BoardingPass";


let airline1 = new Airline("airline1","Cambodia","PP-PNC")
let airline2 = new Airline("airline2","France","FR-PNF")

// create Department
const department1 = new Department("Operations", airline1);
const department2 = new Department("Marketing", airline2);


// for Passenger
const passenger1 = new Passenger("Tiv Nguot",Gender.FEMALE,"1990-01-01","Khmer","Tiv@gmail.com","097-879-9055","26B Main St.2004",new Ticket("ABC123", true), new MealPreference("Vegetarian"));
const passenger2 = new Passenger("Sokunthea Poeun",Gender.MALE,"1999-02-04","Khmer","Sokunthea@gmail.com","088-436-7484","45E Main St.2004",new Ticket("XYZ123", false), new MealPreference("Vegan"));


// for Pilot
const pilot1 = new Pilot("John Smith", Gender.MALE, "1985-07-20", "American", "1234567890", "john@example.com", department1, 75000);
const pilot2 = new Pilot("Emma Johnson", Gender.FEMALE, "1990-04-15", "British", "9876543210", "emma@example.com", department2, 80000);
// console.log(pilot1);

// create flighAtttendant
const flightAttendant1 = new FlightAttendant("Sarah Johnson", Gender.FEMALE, "1992-03-18", "American", "1234567890", "sarah@example.com", department1, 40000);
const flightAttendant2 = new FlightAttendant("Emily Wilson", Gender.MALE, "1995-06-22", "British", "9876543210", "emily@example.com", department2, 40000);

// create crew
const crew1 = new Crew("David Wilson", Gender.MALE, "1978-11-30", "Irish", "3334445555", "david@example.com", department1, 58000);
const crew2 = new Crew("Olivia Smith", Gender.FEMALE, "1998-09-20", "American", "2223334444", "olivia@example.com", department2, 63000);

// For Flight
const flight1 = new Flight(1, new Date('2024-04-28T08:00:00'), new Date('2024-05-02T10:00:00'), 'Phnom Penh', 'Pochentong', 'Siem Reap', 'Phnom Penh', 'Park: Angkor Wat',[passenger1],[pilot1],[flightAttendant1],[crew1]);
const flight2 = new Flight(2, new Date('2024-04-28T10:00:00'), new Date('2024-05-05T12:00:00'), 'phnom Penh', 'Airport PNC', 'Siem Reap', 'phnom Penh', 'Park: Angkor Wat',[passenger2],[pilot2],[flightAttendant2],[crew2]);
// console.log(flight1);


// create Baggage
const Baggage1 = new Baggage("Smaller")
const Baggage2 = new Baggage("Bigger")


const booking1= new Booking(1, 100,flight1,Baggage1);
const booking2 = new Booking(2,100,flight2,Baggage2);
booking1.getFlight(flight1)
booking2.getFlight(flight2)
booking1.getBag(Baggage1)
booking2.getBag(Baggage2)
console.log(booking1);
// console.log(booking2);















