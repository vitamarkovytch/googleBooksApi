import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import {MaterialModule} from './shared/modules/material.module';
import { EnglishLettersPipe } from './shared/pipes/english-letters.pipe';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DateValidatorDirective } from './shared/directives/date-validator.directive';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    EnglishLettersPipe,
    EditDialogComponent,
    DateValidatorDirective,
    DeleteDialogComponent,
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
    EditDialogComponent,
    DeleteDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
