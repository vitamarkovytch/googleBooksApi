import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {ServerService} from '../shared/services/server.service';
import {BooksListModel} from '../shared/model/books-list.model';
import {EditAddBookDialogComponent} from '../edit-add-book-dialog/edit-add-book-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {DataService} from '../shared/services/data.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList: BooksListModel [] = [];
  pictureLink = '../../assets/images/bookcover.jpg';

  constructor(private server: ServerService,
              private dataService: DataService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getListBooksFromGoogle();
  }

  getListBooksFromGoogle() {
    this.server.getBooksFromGoogle().subscribe(
      data => {
        console.log(data);
        this.booksList = data['items'].map((book) => {
          return new BooksListModel(
            book['id'],
            book['volumeInfo']['authors'],
            book['volumeInfo']['publishedDate'],
            book['volumeInfo']['title'],
            book['volumeInfo']['imageLinks'] ?
              book['volumeInfo']['imageLinks']['thumbnail'] :
              this.pictureLink
          );
        });

        this.dataService.saveBooks(this.booksList);
      },
      error => {
        console.log(error);
      }
    );
  }

  openEditDialog(book: BooksListModel, i: number): void {
    const dialogRef = this.dialog.open(EditAddBookDialogComponent, {
      width: '350px',
      data: {book}
    });

    dialogRef.afterClosed().subscribe((result: BooksListModel) => {
      if (result) {
        this.booksList[i] = result;
        this.dataService.saveBooks(this.booksList);
      }
    });
  }

  openDeleteDialog(book, i) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      data: {book}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.booksList.splice(i, 1);
        this.dataService.saveBooks(this.booksList);
      }
    });
  }

  openAddNewBookDialog() {
    const dialogRef = this.dialog.open(EditAddBookDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result: BooksListModel) => {
      if (result) {
        this.booksList.unshift(result);
        this.dataService.saveBooks(this.booksList);
      }
    });
  }
}
