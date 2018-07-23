import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddBookDialogComponent } from './edit-add-book-dialog.component';

describe('EditAddBookDialogComponent', () => {
  let component: EditAddBookDialogComponent;
  let fixture: ComponentFixture<EditAddBookDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddBookDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddBookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
