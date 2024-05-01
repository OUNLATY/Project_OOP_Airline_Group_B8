//TODO:
import {Flight} from '../Flight/Flight'

export class Baggage extends Flight{
    private bagNumber: number
    constructor(bagNumber: number,flightNumber: number, departureDate: Date, arrivalTime:Date,departureLocation:string, departureAirport:string, landingLocation:string, park:string){
        super(flightNumber, departureDate, arrivalTime,departureLocation, departureAirport, landingLocation,park)
        this.bagNumber = bagNumber;
    }
}

