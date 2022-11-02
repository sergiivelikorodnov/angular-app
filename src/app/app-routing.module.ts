import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DocumentsPageComponent } from './pages/documents-page/documents-page.component'
import { ProductsPageComponent } from './pages/products-page/products-page.component'
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component'

const routes: Routes = [
  { path: '', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent },
  { path: 'documents', component: DocumentsPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
