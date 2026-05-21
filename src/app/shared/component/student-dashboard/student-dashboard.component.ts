import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../modules/std';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  editObj!: Istudent;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(stdObj: Istudent) {

    this.editObj = stdObj;

  }

}