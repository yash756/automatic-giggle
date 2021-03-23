import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employee: Employee = new Employee();

  departments: string[] = ["IT", "HR", "Admin", "Sales"]

  add(f:NgForm) {
    if(f.valid)
      console.log(this.employee);
    else
      alert("fill correctly and submit again")
  }
}

export class Employee {
  empno : number;
  name : string;
  dateOfJoining : string;
  salary : number;
  department : string;
}
