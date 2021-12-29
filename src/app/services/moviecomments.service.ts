import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { MovieComment } from './moviecomment';

@Injectable({
  providedIn: 'root'
})
export class MovieCommentsService {
  private serverURL: string = "https://dcitmovieapi.herokuapp.com/api/movies";
  
  constructor(private http: HttpClient){
        
  }

  getMovieComments(movie_id:number):Observable<MovieComment[]>{
    return this.http.get<MovieComment[]>(this.serverURL + `/${movie_id}/comments`)
  }
}
