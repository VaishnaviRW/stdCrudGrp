import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../modules/std';
import { StdServicesService } from '../../Services/std-services.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  stdArr : Array<Istudent> = []
  constructor(
    private _studentService:StdServicesService
  ) { }

  ngOnInit(): void { //Component load hota hai to automatically call hota hai.

  this._studentService.fetchstudent() //Ser.fun call
    .subscribe({  // resive this data to observable
      next : res => {
        this.stdArr = res //API Call success 
      },
      error : err => {
        console.log(err)
      }
    })

}

}
