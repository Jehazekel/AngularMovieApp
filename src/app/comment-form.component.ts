import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PostCommentService } from "./services/postcomment.service";
import { Mytoast } from "./mytoast";


@Component({
    selector: 'comment-form',
    template: `<h1 class="comment_header"> Comments </h1>
                <form class="commentForm">
                    <mat-form-field class="username-field" appearance="fill">
                        <mat-label>Username</mat-label>
                        <input name="username" type="text" [(ngModel)]="username" matInput placeholder="Ex. Jerry" >
                    </mat-form-field>
                    <mat-form-field class="comment-field" appearance="fill">
                        <mat-label>Your Comment</mat-label>
                        <input name="text" type="text" [(ngModel)]="text" matInput placeholder="Ex. Great Movie!"  ngModel>
                    </mat-form-field>
                    <p>
                        <button mat-raised-button color="primary" (click)="submitComment()">Submit</button>
                    </p>
                </form>
                
                
    `,
    styles: [`
            .comment_header{
                font-size: 2rem;
            }
            .commentForm{
                display: flex;
                flex-direction: column;
                align-items:flex-start ;
            }
    `]
})

export class commentForm  {
    public username = "";
    public text = "";


    @Input("movie_id") movie_id:number = 0;
    
    @Output() refreshCommentsEvent = new EventEmitter();

    //add onClick method here
    constructor( private _postService: PostCommentService, private toast: Mytoast){}
    public response:any;

    submitComment(){
        if( this.username!= "" && this.text!= "" && this.movie_id!=0 ){
            let newComment = {
                movie_id: this.movie_id,
                text: this.text,
                username: this.username
            }

            this._postService.addComment(newComment).subscribe( { 
                next: response => {
                    this.response = response
                    this.refreshCommentsEvent.emit(true)
                    this.toast.makeToast(this.response.message);
                    //reset form
                    this.username = "";
                    this.text = "";
                }
            })
        }
        else{
            this.toast.makeToast("Please Fill All required fields first !");
        }
    }

    
    
}