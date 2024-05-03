import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passenger";
import {Gate} from "../Flight/Gate"
import { Seat } from "../Flight/Seat";

export class BoardingPass {
    
    constructor(
        private fights:Flight[],
        private passengers: Passenger[],
        private gates:Gate[],
        private seats: Seat[]){

        this.fights= fights || [];
        this.passengers= passengers || [];
        this.gates=gates || [];
        this.seats= seats || [];
    }

   

    

}
