import { Gender } from "./Gender";

export abstract class Person {
    constructor(
        private name: string, 
        private gender: Gender, 
        private dateOfBirth: string, 
        private nationality:string) {

    }

    // Getter for name
    getName(): string {
        return this.name;
    }

    // Getter for gender
    getGender(): Gender {
        return this.gender;
    }

    // Getter for date of birth
    getDob(): String {
        return this.dateOfBirth;
    }
    // Getter for nationality
    getNationality(): string {
        return this.nationality;
    }

}

