import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Batch8AngularAdvanced';


  filterData = "";

  employees = [
    {
      name: 'John',
      skill: '.net',
      started: new Date(),
      information: 'He is in london working as a senior software engineer',
    },
    {
      name: 'robert',
      skill: 'java',
      started: new Date(),
      information: 'He is in austraila working as a  software engineer',
    },
    {
      name: 'peter',
      skill: 'Phython',
      started: new Date(),
      information: 'He is in us working as a Team lead',
    },
    {
      name: 'Clerk',
      skill: 'Angular',
      started: new Date(),
      information: 'He is in uk working as a Admin',
    },
  ];

  AddEmp(){
    this.employees.push( {
      name: 'Robert.Jr',
      skill: 'AI',
      started: new Date(),
      information: 'He is in london working as a Manager',
    });

    // console.log(this.employees);
  }
}
