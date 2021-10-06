import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductTableItem, ProductTableResponse } from './productTableItem';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  private productsTableUrl = 'api/Products?$select=CurrencyCode,Id,StockQuantity,Name,SubCategoryName,MainCategoryName,SupplierName,Price,AverageRating';

    getProducts(): Observable<ProductTableItem[]> {
    return this.http.get<ProductTableResponse>(this.productsTableUrl).pipe(
      map(response => response.d.results ),
      catchError(this.handleError<ProductTableItem[]>('getProducts', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
