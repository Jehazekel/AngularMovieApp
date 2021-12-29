import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
  })
export class Mytoast {

    constructor (private _snackBar: MatSnackBar){

    }

    makeToast(message: string): void{
        // Simple message with an action.
        let snackBarRef = this._snackBar.open(message, 'Close', {
             duration: 3000
         });
         snackBarRef.onAction().subscribe(() => {
             console.log('The snackbar action was triggered!');
             snackBarRef.dismiss();
         });
    }
}
