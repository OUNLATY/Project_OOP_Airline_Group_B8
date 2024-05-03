import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passenger";
import {Gate} from "../Flight/Gate"
import { Seat } from "../Flight/Seat";

export class BoardingPass {
    private fights:Flight[];
    private passengers: Passenger[];
    private gates:Gate[]
    private seats: Seat[]
    constructor(){
        this.fights= [];
        this.passengers= [];
        this.gates= [];
        this.seats= [];
    }

    public addFlight(flight: Flight): void {
        this.fights.push(flight);
    }

    

}
