import { Person } from "../Person/Person";
import { Gender } from "../Person/Gender";

export abstract class Employee extends Person {
    protected constructor(
      name: string,
      gender: Gender,
      dateOfBirth: string,
      nationality: string,
      protected phoneNumber: string,
      protected email: string,
    ) {
      super(name, gender, dateOfBirth, nationality);
    }
  
    getPhoneNumber(): string {
      return this.phoneNumber;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getContacts(): string {
      return `Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
  
  }