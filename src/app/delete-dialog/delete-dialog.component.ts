import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {BooksListModel} from '../shared/model/books-list.model';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: BooksListModel) {
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deleteBook() {
    this.dialogRef.close(true);
  }
}
