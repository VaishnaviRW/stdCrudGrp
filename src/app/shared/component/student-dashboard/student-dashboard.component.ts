import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../modules/std';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  getEditObj !: Istudent

  constructor() { }

  ngOnInit(): void {
  }

  geteditobj(obj: Istudent){
    this.getEditObj = obj
  }

}
