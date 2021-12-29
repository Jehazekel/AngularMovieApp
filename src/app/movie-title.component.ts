import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'movie-title',
    template: `<mat-list-item class="nav_item" (click)="setSelectedMoive()">
                <span> {{title}} </span> 
</mat-list-item>`,
    styles: [`
            .nav_item{
                cursor:pointer;
                color:aqua;
                border-bottom: 1px grey solid;
                overflow-wrap: break-word;
            }

            .nav_item:hover{
                background-color: grey;
            }
            
    `]
})

export class MovieTitle {

    //Recieve title from parent
    @Input('movieTitle') public title= '';
    @Input('movieId') public id = -1;

    //Send 
    @Output() public clickedMovieEvent = new EventEmitter();

    setSelectedMoive(){
        this.clickedMovieEvent.emit(this.id); // send this id to parent
    }
}