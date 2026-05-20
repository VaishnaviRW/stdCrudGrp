import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istudent } from '../../modules/std';
import { StdServicesService } from '../../Services/std-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../Confirm Dialog Component/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from '../../Services/dialog.service';


import { SnackbarService } from '../../Services/snack-bar-service.service';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  @Output() emitobj : EventEmitter<Istudent> = new EventEmitter<Istudent>()
  


  stdArr: Array<Istudent> = [];

  constructor(
    private _studentService: StdServicesService,
    private _snackBar: MatSnackBar,
    private _matDialog: MatDialog,
    private _dialogService: DialogService,
    private _snackBarService: SnackbarService
  
  ) { }

  ngOnInit(): void {

    this._studentService.fetchstudent()
      .subscribe({
        next: res => {
          this.stdArr = res;
        },
        error: err => {
          console.log(err);
        }
      });

  }
  onRemoveStd(stdObj: Istudent) {

    this._dialogService
      .openConfirmDialog(
        `Are you sure you want to remove student with id ${stdObj.stdId} ?`
      )
      .subscribe(res => {
  
        if (res) {
  
          this._studentService.removeStudent(stdObj)
            .subscribe({
  
              next: () => {
  
                this._snackBarService.openSnackBar(
                  `Student with id ${stdObj.stdId} removed successfully !!`
                );
  
              },
  
              error: () => {
  
                this._snackBarService.openSnackBar(
                  `Failed to remove student with id ${stdObj.stdId} !!`
                );
  
              }
  
            });
  
        }
  
      });
  
  
  }



}