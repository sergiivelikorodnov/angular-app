import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/models/product'
import { ProductsService } from 'src/app/services/products.service'
import { Observable, tap } from 'rxjs'

const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({
      opacity: 0
    })
  ),
  state(
    'close',
    style({
      opacity: 1
    })
  ),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')])
])
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  animations: [fadeInOut]
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
