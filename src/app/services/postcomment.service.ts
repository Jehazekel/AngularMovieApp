import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postComment } from './postcomment';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  private serverURL: string = "https://dcitmovieapi.herokuapp.com/api/comments";
  
  constructor(private http: HttpClient){
        
  }

  addComment(comment: postComment){
    return this.http.post( this.serverURL, comment);
  }
}
