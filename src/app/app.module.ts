import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from '@fundamental-ngx/core/table';
import { ToolbarModule } from '@fundamental-ngx/core/toolbar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { BusyIndicatorModule } from '@fundamental-ngx/core/busy-indicator';
import { DialogModule } from '@fundamental-ngx/core/dialog';
import { CheckboxModule } from '@fundamental-ngx/core/checkbox';
import { ProductListComponent } from './product-list/product-list.component';
import { BarModule } from '@fundamental-ngx/core/bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';

import { HttpClientModule } from '@angular/common/http';
import { ColumnsCustomizeDialogComponent } from './columns-customize-dialog/columns-customize-dialog.component';
import { FilterProductColumnsPipe } from './filter-product-columns.pipe';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { DragAndDropModule } from '@fundamental-ngx/core';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ColumnsCustomizeDialogComponent,
    FilterProductColumnsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    BusyIndicatorModule,
    DialogModule,
    CheckboxModule,
    BarModule,
    FundamentalNgxCoreModule,
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
