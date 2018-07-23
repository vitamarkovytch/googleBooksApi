import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BooksListModel} from '../model/books-list.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {

  }

  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=a+inpublisher:' +
    'Doubleday+Group&maxResults=20';

  getBooksFromGoogle(): Observable<BooksListModel[]> {
    return this.http.get(this.baseUrl)
      .pipe(map((books: any) => {
          return books;
        })
      );
  }
}

