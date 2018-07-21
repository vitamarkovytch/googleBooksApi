import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {

  }

  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=a+inpublisher:' +
    'Doubleday+Group&maxResults=20';

  getBooksFromGoogle() {
    return this.http.get(this.baseUrl);
  }
}

