import {Employee} from "../Employee/Employee";
export class Department {
  constructor(private name: string) {}
  
  getNameOfDepartment(): string {
    return this.name;
  }

  private employees: Employee[] = [];
  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
  getEmployees(): Employee[] {
    return this.employees;
  }
}