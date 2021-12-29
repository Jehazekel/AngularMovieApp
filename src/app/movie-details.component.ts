import { Component, Input } from "@angular/core";

@Component({
    selector: "movie-detail",
    template: `<h1> {{movie.title}}</h1>
                <div class="movie-content">
                    <img id="currMovie" src="{{movie.poster_url}}" />
                    <div class="details">
                        <p> Release date: {{movie.release_date}} </p>
                        <p> Studio: {{movie.studio}} </p>
                        <p> Gross: {{movie.gross}} </p>
                        
                    </div>
                </div>
    `,
    styles: [`
        .movie-content{
            display:flex;
            flex-direction: row;
            padding: 10px;
        }
        .details{
            display:flex;
            flex-direction: column;
        }
        #currMovie{
            margin-right: 10px;
        }
        
        h1{
            font-size: 2rem;
        }
    `]
})

export class MovieDetails {
    @Input() public movie: any;

    constructor(){}
}