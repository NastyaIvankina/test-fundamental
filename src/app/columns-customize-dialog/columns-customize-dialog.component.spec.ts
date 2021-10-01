import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsCustomizeDialogComponent } from './columns-customize-dialog.component';

describe('ColumnsCustomizeDialogComponent', () => {
  let component: ColumnsCustomizeDialogComponent;
  let fixture: ComponentFixture<ColumnsCustomizeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnsCustomizeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsCustomizeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
