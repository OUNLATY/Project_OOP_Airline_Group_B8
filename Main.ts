import { Person } from "./AirlineManagerment/Person/Person";
import { Passenger } from "./AirlineManagerment/Person/Passenger";
import { Gender } from "./AirlineManagerment/Person/Gender";
import { Employee } from "./AirlineManagerment/Employee/Employee";
import { Pilot } from "./AirlineManagerment/Employee/Pilot";
import { FlightAttendant } from "./AirlineManagerment/Employee/FlightAttendant";
import { Crew } from "./AirlineManagerment/Employee/Crew";
import { AirlineMechanic } from "./AirlineManagerment/Employee/AirlineMechanic";
import { AirportController } from "./AirlineManagerment/Employee/AirportController";
import { AirlineManager } from "./AirlineManagerment/Employee/AirlineManager";
import { BookingAgent } from "./AirlineManagerment/Employee/BookingAgent";
import { GateAgent } from "./AirlineManagerment/Employee/GateAgent";
import { Airline } from "./AirlineManagerment/Airline/Airline";
import { Gate } from "./AirlineManagerment/Flight/Gate";
import { Department } from "./AirlineManagerment/Department/Department";
import { Aeroplane } from "./AirlineManagerment/Airline/Aeroplane";
import { Airport } from "./AirlineManagerment/Airport/Airport";
import { Flight } from "./AirlineManagerment/Flight/Flight";
import { Seat } from "./AirlineManagerment/Flight/Seat";
import { Meal } from "./AirlineManagerment/Flight/Meal";
import { Booking } from "./AirlineManagerment/Booking/Booking";
import { BoardingPass } from "./AirlineManagerment/BoardingPass/BoardingPass";
import { Ticket } from "./AirlineManagerment/Ticket/Ticket";
import { Baggage } from "./AirlineManagerment/Baggage/Baggage";
import { BaggageItem } from "./AirlineManagerment/Baggage/BaggageItem";

const airline = new Airline("Airline Name", "Airline Location", "AIRLINECODE");

const gate1 = new Gate("Gate 1");
const gate2 = new Gate("Gate 2");
airline.addGate(gate1);
airline.addGate(gate2);

const aeroplane1 = new Aeroplane("Aeroplane 1", "AIRLINECODE");
const aeroplane2 = new Aeroplane("Aeroplane 2", "AIRLINECODE");

airline.addAeroplane(aeroplane1);
airline.addAeroplane(aeroplane2);

const airport1 = new Airport("Airport 1","QF123","Cambodia")
const airport2 = new Airport("Airport 2","PB123","Cambodia")

airline.addAirport(airport1)
airline.addAirport(airport2)

const seat1 = new Seat(12, "Economy1", true);
const seat2 = new Seat(15, "Economy2", true);
const seat3 = new Seat(12, "Economy3", true);
const seat4 = new Seat(15, "Economy4", true);

aeroplane1.addSeat(seat1);
aeroplane1.addSeat(seat2);
aeroplane1.addSeat(seat3);
aeroplane1.addSeat(seat4);

const department1 = new Department("Department 1");
const department2 = new Department("Department 2");

airline.addDepartment(department1);
airline.addDepartment(department2);

// all employees
const airlineManager = new AirlineManager("Airline Manager Name",Gender.Male,"01-01-1970","Nationality","1234567890","airlinemanager@email.com",150000);
const airlineMechanic = new AirlineMechanic("AirlineMechanic Name",Gender.Male,"01-01-1980","Nationality","1234567890","pilot@email.com",100000);
const pilot = new Pilot("Pilot Name",Gender.Male,"01-01-1980","Nationality","1234567890","pilot@email.com",100000);
const flightAttendant = new FlightAttendant("Flight Attendant Name",Gender.Female,"02-02-1990","Nationality","0987654321","flightattendant@email.com",80000);
const crew1 = new Crew("Crew Name",Gender.Female,"02-02-1990","Nationality","0987654321","flightattendant@email.com",80000);
const airportController = new AirportController("John Doe",Gender.Male,"01-01-1980","Nationality","1234567890","john.doe@example.com",10 );
const bookingAgent = new BookingAgent("Agent Name",Gender.Male,"01-01-1980","Nationality","1234567890","agent@example.com",airline);
const gateAgent = new GateAgent("Agent Name",Gender.Male,"01-01-1980","Nationality","1234567890","agent@example.com",airline,gate1);

department1.addEmployee(pilot);
department1.addEmployee(airportController);
department1.addEmployee(flightAttendant);
department2.addEmployee(flightAttendant);

//   airline manager can see the department
const airMgetDepartments = airlineManager.getDepartmentsFromAirline(airline);

//   airline manager can see the employee in a department
const employeesInDepartment1 =airlineManager.getAllEmployeesInDepartment(department1);


// Create baggage items
const cloth = new BaggageItem("cloth", 1);
const pants = new BaggageItem("pants", 0.5);
const tShirt = new BaggageItem("t-shirt", 0.2);

// Create a baggage with a weight limit
const baggage = new Baggage(2); // 2 kg weight limit

// Add items to the baggage
baggage.addItem(cloth);
baggage.addItem(pants);
baggage.addItem(tShirt);


// Create meal instances
const mealChoice1 = new Meal("Chicken Dinner","Grilled chicken with vegetables and rice",15);
const mealChoice2 = new Meal("Vegetarian Option","Lentil soup and quinoa salad",12);

const passenger1 = new Passenger("John Doe 1",Gender.Male,"01-01-1980","American","john.doe@example.com","1234567890","123 Main St",[baggage,baggage]);
const passenger2 = new Passenger("John Doe 2",Gender.Male,"01-01-1980","American","john.doe@example.com","1234567890","123 Main St",[baggage]);

const flight = new Flight(123,new Date("2023-04-01"),new Date("2023-04-01T15:00:00"),"New York","JFK","Los Angeles","LAX",[pilot],[flightAttendant],[crew1],[airlineMechanic],aeroplane1);
gateAgent.addPassengerToFlight(passenger1,flight)

// booking by passenger
const booking1 = passenger1.bookFlightWithSeatSelection(airline,flight, [passenger1, passenger2],[seat1,seat2],flight,true,[mealChoice1,mealChoice2]);

const flightBoarding = gateAgent.getAllBookingsFromAirline(airline)[0];

// Get necessary details from the flight object
const passengerName = booking1.getPassengers()[0].getName();
const flightDate = flightBoarding.getFlight().getDepartureDate();
const aeroplaneCode = flightBoarding.getFlight().getAeroplane().getAeroplaneCode();
const seatNumber = booking1.getSeats()[0].getSeatNumber();
const flightRoute = `${flightBoarding.getFlight().getDepartureLocation()} to ${flightBoarding.getFlight().getLandingLocation()}`;
const gatesOfAirline = gateAgent.getAirline();
const gateFromAirline = gatesOfAirline.getGates()[0].getGateNumber();

const boardingPassWithGateFromAirline = new BoardingPass(passengerName,flightDate,aeroplaneCode,seatNumber,flightRoute,gateFromAirline);
gateAgent.setBoardingPassAttributes(boardingPassWithGateFromAirline,true,true);
gateAgent.addBoardingPassToPassengerIfAttributesTrue(boardingPassWithGateFromAirline,passenger1);

const flightTicket = bookingAgent.getAllBookings()[0];
const passengerNameTicket = flightTicket.getPassengers()[0].getName();
const flightDateTackit = flightTicket.getFlight().getDepartureDate();
const aeroplaneCodeTicket = flightTicket.getFlight().getAeroplane().getAeroplaneCode();
const seatNumberTicket = flightTicket.getSeats()[0].getSeatNumber();
const flightRouteTicket = `${flightTicket.getFlight().getDepartureLocation()} to ${flightTicket.getFlight().getLandingLocation()}`;
const gatesOfAirlineTicket = flightTicket.getAirline();
const gateFromAirlineTicket = gatesOfAirlineTicket.getGates()[0].getGateNumber();

const ticket = new Ticket(passengerNameTicket,flightDateTackit,aeroplaneCodeTicket,seatNumberTicket,flightRouteTicket,gateFromAirlineTicket)
bookingAgent.assignTicketToPassenger(passenger1,ticket)

const allFlights = airlineManager.getAllFlights(airline);
const allBookings = airlineManager.getAllBookings(airline);

// console.log(airline);
// console.log(passenger1);

