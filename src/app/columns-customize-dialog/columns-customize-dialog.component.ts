import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProductTableDisplayedColumn } from '../productTableItem';
import { DialogRef } from '@fundamental-ngx/core/dialog';

@Component({
  selector: 'app-columns-customize-dialog',
  templateUrl: './columns-customize-dialog.component.html',
  styleUrls: ['./columns-customize-dialog.component.css']
})
export class ColumnsCustomizeDialogComponent implements OnInit {
  columns: ProductTableDisplayedColumn[] = [];
  filterPhrase: string = '';
  allSelected = false;
  showError = false;

  constructor(public dialogRef: DialogRef) {
    this.columns = this.dialogRef.data.columns;
    this.allSelected = this._areAllSelected();
   }

  ngOnInit(): void {
  }

  handleChange(column: ProductTableDisplayedColumn, checked: boolean): void {
    column.checked = checked;
    this.allSelected = this._areAllSelected();
    this.showError = checked ? false : this.showError;
  }

dropHandle(event: CdkDragDrop<ProductTableDisplayedColumn[]>): void {
  moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
}

handleAllChange(selected: boolean): void {
  this.allSelected = selected;
  if (selected) {
      this.columns.forEach(item => item.checked = true);
      this.showError = false;
  } else {
      this.columns.forEach(item => item.checked = false);
  }
}

sortAlphabetically(reverse?: boolean): void {
  this.columns = this.columns.sort((a, b) => {
      if (a.columnName > b.columnName) {
          return -1;
      } else {
          return 1
      }
  });

  if (reverse) {
      this.columns = this.columns.reverse();
  }
}

save(): void {
  if (!this._isAnySelected()) {
      this.showError = true;
  } else {
      this.dialogRef.close(this.columns);
  }
}

dismiss(): void {
  this.dialogRef.dismiss();
}

  private _areAllSelected(): boolean {
    return !this.columns.find(c => !c.checked);
}

private _isAnySelected(): boolean {
  return this.columns.some(c => c.checked);
}
}
