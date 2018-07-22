import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {ServerService} from '../../services/server.service';
import {BooksListModel} from '../shared/model/books-list.model';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList: BooksListModel [] = [];

  constructor(private server: ServerService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.server.getBooksFromGoogle().subscribe(
      data => {
        console.log(data);
        this.booksList = data['items'].map((book) => {
          return new BooksListModel(
            book['id'],
            book['volumeInfo']['authors'],
            book['volumeInfo']['publishedDate'],
            book['volumeInfo']['title'],
          );
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  openEditDialog(book: BooksListModel, i: number): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: {book}
    });

    dialogRef.afterClosed().subscribe((result: BooksListModel) => {
      if (typeof result === 'undefined') {
        console.log('failed ' + result);
      } else {
        this.booksList[i] = result;
      }
    });
  }

  openDeleteDialog(book, i) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      data: {book}
    });
  }
}
