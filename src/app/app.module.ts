import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import {MaterialModule} from './shared/modules/material.module';
import { EnglishLettersPipe } from './shared/pipes/english-letters.pipe';
import { EditAddBookDialogComponent } from './edit-add-book-dialog/edit-add-book-dialog.component';
import { DateValidatorDirective } from './shared/directives/date-validator.directive';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { TitleValidatorDirective } from './shared/directives/title-validator.directive';
import { StringLengthPipe } from './shared/pipes/string-length.pipe';
import { ProgressBarComponent } from './books-list/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    EnglishLettersPipe,
    EditAddBookDialogComponent,
    DateValidatorDirective,
    DeleteDialogComponent,
    TitleValidatorDirective,
    StringLengthPipe,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EditAddBookDialogComponent,
    DeleteDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
