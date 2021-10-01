import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductItem } from '../ProductItem';
import { ProductsService } from '../products.service';
import { RtlService } from '@fundamental-ngx/core';
import { DialogRef, DialogService } from '@fundamental-ngx/core/dialog';
import { ProductTableDisplayedColumn } from '../productTableItem';
import { DynamicComponentService } from '@fundamental-ngx/core';
import { ColumnsCustomizeDialogComponent } from '../columns-customize-dialog/columns-customize-dialog.component';
import { TableComponent } from '@fundamental-ngx/core/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [RtlService,
              DialogService,
              DynamicComponentService]
})
export class ProductListComponent implements OnInit {
  products: ProductItem[] = [];
  loading = false;
  displayedColumns: string[] = [];
  originalDisplayedColumns: ProductTableDisplayedColumn[] = [];
  initialDisplaydColumns: string[];
  dialogRef = DialogRef;

  @ViewChild(TableComponent)
  tableComponent?: TableComponent;

  constructor(
    private _productsService: ProductsService,
    private _rtlService: RtlService,
    private _dialogService: DialogService
    ) { 
      //initial columns to display
      this.initialDisplaydColumns = ['Id', 'Name', 'MainCategoryName', 'SubCategoryName', 'SupplierName', 'StockQuantity', 'Price'];
    }

  ngOnInit(): void {
    this.loading = true;
    this.getProducts();
  }

  getProducts(): void {
    this._productsService.getProducts().subscribe(results => {
      this.products = results;
      this.loading = false;
      this._fillColumnsKeys();
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
            this.originalDisplayedColumns = [...columns];
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
        let checked = this.initialDisplaydColumns.includes(key) ? true : false;
        if (key !== '__metadata' && key !== 'Supplier') {
          this.originalDisplayedColumns.push({ key: key, checked: checked });
        }
    });
    }
  }

  get isRtl(): boolean {
    return this._rtlService.rtl.getValue();
  }
}
