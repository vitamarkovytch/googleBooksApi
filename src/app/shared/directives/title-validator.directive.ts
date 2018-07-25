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

      /*ADD BOOK*/
      /*FIRST CONDITION UNTIL || CHECKS IF TITLE THAT WE ADD EQUALS TO ANY TITLE IN BOOKS LIST*/
      /*SECOND CONDITION AFTER || CHECKS IF TITLE THAT WE ADD EQUAL TO EMPTY STRING,
         BECAUSE IF USER TYPE ONLY NON ENGLISH LETTERS THE STRING BECOMES TO ''*/
      if (book === null) {
         result = booksList.some(function (element) {
          return (element.bookTitle.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') ===
            control.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') ||
            control.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') === '');
        });

        /*EDIT BOOK*/
        /*FIRST CONDITION CHECKS IF TITLE THAT WE EDIT EQUALS TO ANY TITLE IN BOOKS LIST AND AT THE
         SAME TIME THIS TITLE DOESN'T HAVE TO BE THE TITLE OF BOOK THAT WE EDIT*/
        /*SECOND CONDITION AFTER || CHECKS IF TITLE THAT WE EDIT DOESN'T EQUAL TO EMPTY STRING
           BECAUSE IF USER TYPE ONLY NON ENGLISH LETTERS THE STRING BECOMES TO ''*/
      } else {
        result = booksList.some(function (element) {
          return (element.bookTitle.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') ===
            control.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
            && element.id !== book.id
          || control.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') === '');
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
