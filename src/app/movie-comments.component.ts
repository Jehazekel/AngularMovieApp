
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { DeleteCommentService } from "./services/deletecomment.service";
import { MovieComment } from "./services/moviecomment";
import { MovieCommentsService } from "./services/moviecomments.service";

import { Mytoast } from "./mytoast";

@Component({
    selector: "comment-list",
    template: `<div class='.list'  *ngIf="comments.length == 0 then noComments; else commentList;" >
                    
                </div>

                <ng-template #commentList>
                    <movie-comment (deleteCommentEvent)="deleteComment($event)" class="comment" [comment]="comment" *ngFor="let comment of comments"> </movie-comment>
                </ng-template>
                <ng-template #noComments>
                    <mat-card> Be the first to add a comment <mat-icon matSuffix>sentiment_very_satisfied</mat-icon></mat-card>
                </ng-template>
    `,
    styles: [`
        
    `]
})

export class MoviecommentList implements OnChanges{
    @Input() public movie_id:number = 0;
    @Input() public refreshComments:boolean = false ;

    public comments:MovieComment[] = [];
    constructor(private _movieCommentsService :MovieCommentsService, private deleteService: DeleteCommentService, private toast: Mytoast ){ //creates ref to the service

    }


    ngOnChanges(changes: SimpleChanges): void {  //Updates "comments" variable on change of movie_id
        console.log(changes)
        this._movieCommentsService.getMovieComments(this.movie_id).subscribe(data => this.comments = data);

    } // end of ngOnChanges
    
    
   //TO Recieve Comment id to for deletion

   //add delete for onclick'
   public response:any;

   deleteComment(commentId: number){
        this.deleteService.deleteComment(commentId).subscribe(
           { 
               
            next: response => { // if post is successful
                
                this.response = response;
                //request updated data
                this._movieCommentsService.getMovieComments(this.movie_id).subscribe(data => this.comments = data);   
                this.toast.makeToast(this.response.message)    
                
            },
        
            error: error => {
                this.toast.makeToast(error) 
            }
        
    });
   }



}