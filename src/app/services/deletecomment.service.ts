import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteCommentService {

  //add delete for onclick'
  private url = "https://dcitmovieapi.herokuapp.com/api/comments"
 

  constructor(private http: HttpClient){}

  deleteComment(commentId:number) {
    return this.http.delete(`${this.url}/${commentId}`)
                    .pipe( catchError(this.handleError) );
  }

  handleError(error: { error: { message: any; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return errorMessage;
  }
}
