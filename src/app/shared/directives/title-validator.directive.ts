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
  static validTitle(booksList: BooksListModel[]): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } | null => {

      /*MAKING toLowerCase FOR THE RIGHT COMPARISON*/
      const result: boolean = booksList.some(function (element) {
         return element.bookTitle.toLowerCase() === control.value.toString().toLowerCase();
      });
      if (result) {
        /*invalidTitle - IS THE NAME OF CUSTOM VALIDATOR*/
        return {'invalidTitle': true};
      }
      return null;
    };
  }
}
