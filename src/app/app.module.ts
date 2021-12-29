import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';  //used with ngModel biding
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MovieTitle } from './movie-title.component';
import { MovieDetails } from './movie-details.component';
import { commentForm } from './comment-form.component';
import { movieComment } from './movie-comment.component';
import { MoviecommentList } from './movie-comments.component';
import { Mytoast } from './mytoast';

@NgModule({
  declarations: [
    AppComponent, MovieTitle, MovieDetails, commentForm, movieComment,
    MoviecommentList, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule, MatListModule , MatToolbarModule,
    MatInputModule, 
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule, 
  ],
  providers: [ Mytoast],
  bootstrap: [AppComponent]
})
export class AppModule { }
