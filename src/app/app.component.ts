import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task4';
  arrOfEmployees: any[]=[];
  constructor(private employees:EmployeesService)
  {

  }
  ngOnInit()
  {
    this.employees.getEmployees().subscribe( (data:any)=>{
        this.arrOfEmployees=data.data;
    });
  }
}
