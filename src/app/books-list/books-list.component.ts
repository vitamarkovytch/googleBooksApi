import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../services/server.service';
import {BooksListModel} from '../shared/model/books-list.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList: BooksListModel [] = [];

  constructor(private server: ServerService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.server.getBooksFromGoogle().subscribe(
      data => {
        // console.log(data);

        this.booksList = data['items'].map((book, id) => {
          return new BooksListModel(
            id,
            book['volumeInfo']['authors'],
            book['volumeInfo']['publishedDate'],
            book['volumeInfo']['title'],
          );
        });
        console.log(this.booksList);
      },
      error => {
        console.log(error);
      }
    );
  }
}
