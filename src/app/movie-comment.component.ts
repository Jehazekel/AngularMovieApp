
import { Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
    selector: 'movie-comment',
    template: `<mat-card>{{comment.username}}: {{comment.text}}
                    <mat-icon id="delete-icon" matSuffix aria-hidden="false" aria-label="delete icon" (click)="requestToDelete()" >delete</mat-icon>
                </mat-card>
                
    `,
    styles: [`
            .comment_header{
                font-size: 2rem;
            }
            #delete-icon{
                cursor: pointer;
            }
    `]
})

export class movieComment {
    @Input() comment:any;  //receives a movie comment

    @Output() public deleteCommentEvent = new EventEmitter();

   

    requestToDelete(){
        this.deleteCommentEvent.emit(this.comment.id); //send comment id to be deleted
        
    }

 
}