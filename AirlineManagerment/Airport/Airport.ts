export class Airport {
    private name: string;
    private codeAirport: string;
    private country: string;

    constructor(name: string, codeAirport: string, country: string) {
        this.name = name;
        this.codeAirport = codeAirport;
        this.country = country;
        
    }

    getAirportName() {
        return this.name;
    }
    getAirportCode() {
        return this.codeAirport;
    }
    getAirportCountry() {
        return this.country;
    }


}