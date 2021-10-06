import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductsService } from '../products.service';
import { RtlService } from '@fundamental-ngx/core';
import { DialogRef, DialogService } from '@fundamental-ngx/core/dialog';
import { ProductTableDisplayedColumn, ProductColumnNames } from '../productTableItem';
import { DynamicComponentService } from '@fundamental-ngx/core';
import { ColumnsCustomizeDialogComponent } from '../columns-customize-dialog/columns-customize-dialog.component';
import { TableComponent } from '@fundamental-ngx/core/table';
import { ProductTableItem } from '../productTableItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [RtlService,
              DialogService,
              DynamicComponentService]
})
export class ProductListComponent implements OnInit {
  // products: ProductItem[] = [];
  products: ProductTableItem[] = [];
  loading = false;
  displayedColumns: string[] = [];
  originalDisplayedColumns: ProductTableDisplayedColumn[] = [];
  dialogRef = DialogRef;

  @ViewChild(TableComponent)
  tableComponent?: TableComponent;

  constructor(
    private _productsService: ProductsService,
    private _rtlService: RtlService,
    private _dialogService: DialogService
    ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getProducts();
  }

  getProducts(): void {
    this._productsService.getProducts().subscribe(results => {
      this.products = results;
      this.loading = false;
      this._fillColumnsKeys();
      this._propagateChangeToDisplayedValue();
    });
  }

  openDialog(): void {
    const dialogRef = this._dialogService.open(ColumnsCustomizeDialogComponent, {
        width: '350px',
        height: '370px',
        draggable: true,
        resizable: true,
        verticalPadding: false,
        data: {
            columns: this.originalDisplayedColumns
        }
    });


    dialogRef.afterClosed.subscribe(
        (columns) => {
            this.originalDisplayedColumns = columns;
            this._propagateChangeToDisplayedValue();
        },
        () => {
            console.log('closed without changes')
        }
    );
}

private _propagateChangeToDisplayedValue(): void {
    this.displayedColumns = [
        ...this.originalDisplayedColumns
            .filter(_col => _col.checked)
            .map(_col => _col.key)
    ];
    if (this.tableComponent) {
      this.tableComponent.reset(this.displayedColumns);
    }
}

  private _fillColumnsKeys(): void {
    if (this.products && this.originalDisplayedColumns.length === 0) {
      // fill columns keys table
      Object.keys(this.products[0]).forEach(key => {
        // let checked = this.displayedColumns.includes(key) ? true : false;
        if (key !== '__metadata' && key !== 'CurrencyCode') {
          let columnName = ProductColumnNames.find(element => element.key === key)?.columnName;
          // key = columnName ? columnName : '';
          this.originalDisplayedColumns.push({ key: key, columnName: columnName ? columnName : '', checked: true });
        }
    });
    }
  }

  get isRtl(): boolean {
    return this._rtlService.rtl.getValue();
  }
}
