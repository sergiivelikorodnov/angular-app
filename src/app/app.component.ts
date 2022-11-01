import { Component, OnInit } from '@angular/core'
import { subscribeOn } from 'rxjs'
import { IProduct } from './models/product'
import { ProductsService } from './services/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    `
      [nz-icon] {
        margin-right: 6px;
        font-size: 32px;
        padding-bottom: 1rem;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  title = 'angular app'
  products: IProduct[] = []
  loading = false

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true

    this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }
}
