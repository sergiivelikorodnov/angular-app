import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/models/product'
import { ProductsService } from 'src/app/services/products.service'
import { Observable, tap } from 'rxjs'

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<IProduct[]>
  loading = false

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(tap(() => (this.loading = false)))
  }
}
