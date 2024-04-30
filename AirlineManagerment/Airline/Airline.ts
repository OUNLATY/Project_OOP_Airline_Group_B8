//TODO:
import {Flight} from "../Flight/Flight.js";


export class Airline {
    private name: string;
    private location: string;
    private flight: Flight[];
    constructor(name: string, location: string){
        this.name = name;
        this.location = location;
        this.flight = [];
    }

    getAirlineName() {
        return this.name;
    }
    getAirlineLocation() {
        return this.location;
    }

    
}