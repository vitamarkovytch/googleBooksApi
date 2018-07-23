import {Directive} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';
import {BooksListModel} from '../model/books-list.model';

@Directive({
  selector: '[appTitleValidator]'
})
export class TitleValidatorDirective {

  constructor() {
  }

  /*RECEIVING booksList PARAMETER FOR CHECKING EXISTING TITLES*/
  static validTitle(booksList: BooksListModel[], book: BooksListModel): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } | null => {

      /*MAKING toLowerCase FOR THE RIGHT COMPARISON,
      * .replace(/[^a-zA-Z0-9 ]/g - REPLACE ALL NON ENGLISH SYMBOLS*/
      let result: boolean;
      if (book === null) {
         result = booksList.some(function (element) {
          return (element.bookTitle.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') ===
            control.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''));
        });
      } else {
        result = booksList.some(function (element) {
          return (element.bookTitle.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') ===
            control.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
            && element.id !== book.id);
        });
      }

      if (result) {
        /*invalidTitle - IS THE NAME OF CUSTOM VALIDATOR*/
        return {'invalidTitle': true};
      }
      return null;
    };
  }
}
