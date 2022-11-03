import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DocumentsPageComponent } from './pages/documents-page/documents-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { ProductsPageComponent } from './pages/products-page/products-page.component'
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component'
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/'])
const redirectAuthorizedHome = () => redirectLoggedInTo(['/domov'])

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectAuthorizedHome }
  },
  {
    path: 'domov',
    component: WelcomePageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'artikli',
    component: ProductsPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'dokumenti',
    component: DocumentsPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
