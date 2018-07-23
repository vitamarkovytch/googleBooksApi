import {Injectable} from '@angular/core';
import {BooksListModel} from '../model/books-list.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  booksList: BooksListModel[] = [];

  constructor() {
  }

  saveBooks(data) {
    this.booksList = data;
  }

  getBooks(): BooksListModel[] {
    return this.booksList;
  }
}
