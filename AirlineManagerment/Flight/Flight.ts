//TODO:

export class Flight {
    private flightNumber: number;
    private departureDate: Date;
    private arrivalTime: Date;
    private departureLocation: string;
    private departureAirport: string;
    private destinationAirport: string;
    private landingLocation: string;
    private park: string;
    constructor(flightNumber: number, departureDate: Date, arrivalTime:Date,departureLocation:string, departureAirport:string, landingLocation:string, park:string) {
        this.flightNumber = flightNumber;
        this.departureDate = departureDate;
        this.arrivalTime = arrivalTime;
        this.departureLocation = departureLocation;
        this.departureAirport = departureAirport;
        this.destinationAirport = landingLocation;
        this.landingLocation = landingLocation;
        this.park = park;
    }

    getFlightName(): string {
        return this.flightNumber.toString();
    }
    getDepartureDate(): Date {
        return this.departureDate;
    }

    getArrivalTime(): Date {
        return this.arrivalTime;
    }

    getDepartureLocation(): string {
        return this.departureLocation;
    }

    getDepartureAirport(): string {
        return this.departureAirport;
    }

    getDestinationAirport(): string {
        return this.destinationAirport;
    }

    getLandingLocation(): string {
        return this.landingLocation;
    }

    getPark(): string {
        return this.park;
    }
}

