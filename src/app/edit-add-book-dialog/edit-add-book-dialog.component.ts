import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {BooksListModel} from '../shared/model/books-list.model';
import {DateValidatorDirective} from '../shared/directives/date-validator.directive';
import {DataService} from '../shared/services/data.service';
import {TitleValidatorDirective} from '../shared/directives/title-validator.directive';

@Component({
  selector: 'app-edit-add-book-dialog',
  templateUrl: './edit-add-book-dialog.component.html',
})
export class EditAddBookDialogComponent implements OnInit {
  form: FormGroup;
  titleOfDialog: string;
  isReadOnly: boolean;
  pictureLink = '../../assets/images/bookcover.jpg';

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              public dialogRef: MatDialogRef<EditAddBookDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: BooksListModel) {
  }

  ngOnInit() {
    this.createForm();
    if (this.data) {
      this.titleOfDialog = 'Edit a book';
      this.isReadOnly = true;
      this.form.get('bookTitle').setValue(this.data['book'].bookTitle);
      this.form.get('authorName').setValue(this.data['book'].authorName);
      this.form.get('publishDate').setValue(this.data['book'].publishDate);
      this.form.get('id').setValue(this.data['book'].id);
    } else {
      this.titleOfDialog = 'Add new book';
      this.isReadOnly = false;
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      bookTitle: ['',
        Validators.compose([Validators.required,
          TitleValidatorDirective.validTitle(this.dataService.getBooks())])],
      authorName: ['', Validators.required],
      publishDate: ['',
        Validators.compose([Validators.required, DateValidatorDirective.validDate])],
      id: ['', Validators.required],
      picture: [this.pictureLink]
    });
  }

  getErrorMessage(string) {
    return this.form.get(string).hasError('required') ? 'This field is mandatory' :
      this.form.get(string).hasError('date') ? 'The date should be on YYYY-MM-DD format' :
        this.form.get(string).hasError('invalidTitle') ? 'This Title of book is already exists' :
          '';
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }

}
