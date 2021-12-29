import { Component, OnInit } from '@angular/core';
import { movieData } from './services/movie';  //interface class for movie
import { MovieDataService } from './services/moviedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movie-app';

  public movies: movieData[] = [];
  public selectedMovie: number = -1 ;
  public refreshComments = false;  //Output from "commentForm" & sent as input to "comment-list"
   
  constructor(private _movieDataService : MovieDataService){}

  //get movieData 
  ngOnInit(){
    this._movieDataService.getMovieData().subscribe(data => this.movies = data); //store data in local array;
  }
}
