import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, delay, Observable, retry, throwError } from 'rxjs'
import { IProduct } from '../models/product'
import { ErrorService } from './error.service'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  //get all Products from virtual Json server. Made manual delay to see loading and 2 retry if connection is lost
  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('http://localhost:3001/products', {
        params: new HttpParams() /* .append('_limit', 3) */
      })
      .pipe(delay(100), retry(2), catchError(this.errorHandler.bind(this)))
  }

  //Error handler
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handler(error.message)
    return throwError(() => error.message)
  }
}
