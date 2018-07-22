import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {BooksListModel} from '../shared/model/books-list.model';
import {DateValidatorDirective} from '../shared/directives/date-validator.directive';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  titleOfDialog: string;
  isReadOnly: boolean;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditDialogComponent>,
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
      bookTitle: ['', Validators.required],
      authorName: ['', Validators.required],
      publishDate: ['',
        Validators.compose([Validators.required, DateValidatorDirective.validDate])],
      id: ['', Validators.required]
    });
  }

  getErrorMessage(string) {
    return this.form.get(string).hasError('required') ? 'This field is mandatory' :
      this.form.get(string).hasError ? 'The date should be on YYYY-MM-DD format' :
        '';
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }

}
