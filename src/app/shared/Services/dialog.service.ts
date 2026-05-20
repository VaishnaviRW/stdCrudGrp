import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ConfirmDialogComponent } from '../component/Confirm Dialog Component/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _matDialog: MatDialog) {}

  openConfirmDialog(message: string) {

    let config = new MatDialogConfig();

    config.width = '300px';
    config.disableClose = true;
    config.data = message;
    config.data = message;

    return this._matDialog.open(
      ConfirmDialogComponent,
      config
    ).afterClosed();
  }
}