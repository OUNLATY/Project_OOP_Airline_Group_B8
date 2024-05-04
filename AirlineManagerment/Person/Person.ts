import {Gender} from "./Gender";
export abstract class Person {
    protected constructor(
      protected name: string,
      protected gender: Gender,
      protected dateOfBirth: string,
      protected nationality: string
    ) {}
  
    getName(): string {
      return this.name;
    }
  
    getGender(): Gender {
      return this.gender;
    }
  
    getDob(): string {
      return this.dateOfBirth;
    }
  
    getNationality(): string {
      return this.nationality;
    }
  }