import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { delay, Observable } from 'rxjs'
import { IProduct } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('http://localhost:3001/products', {
        params: new HttpParams().append('_limit', 3)
      })
      .pipe(delay(1000))
  }
}
