import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from '../../modules/std';

import { StdServicesService } from '../../Services/std-services.service';
import { SnackbarService } from '../../Services/snack-bar-service.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit,OnChanges {

@ViewChild('stdForm')stdForm!:NgForm


  isInEditMode:boolean=false
  @Input() editobj !: Istudent
  

editStudentId!: string;
  


  constructor(
private _studentService : StdServicesService,
  private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);
  
    if (!!changes['editobj']?.currentValue) {
  
      this.isInEditMode = true;
  
      this.stdForm.form.patchValue({
        fname: this.editobj.fname,
        lname: this.editobj.lname,
        email: this.editobj.email,
        contact: this.editobj.contact
      });
  
    }
  
  }
  onStudentSubmit() {

    if (this.stdForm.valid) {
  
      if (!this.isInEditMode) {
  
        let stdobj: Istudent = {
  
          ...this.stdForm.value,
          stdId: Date.now().toString()
  
        };
  
        this._studentService.createStudent(stdobj)
          .subscribe({
  
            next: res => {
  
              this._snackBar.openSnackBar(res.msg);
  
              this.stdForm.resetForm();
  
            },
  
            error: err => {
  
              this._snackBar.openSnackBar(err.msg);
  
            }
  
          });
  
           
        }}}}
