import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movieData } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private serverURL: string = "https://dcitmovieapi.herokuapp.com/api/movies";
  

  constructor(private http: HttpClient) { //local variable to refer to http client

  }


  getMovieData(): Observable<movieData[]>{ 
    
    return this.http.get<movieData[]>(this.serverURL); //get request to server
 
   }

}
