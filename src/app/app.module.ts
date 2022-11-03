import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductComponent } from './components/product/product.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { NzIconModule } from 'ng-zorro-antd/icon'
import { IconDefinition } from '@ant-design/icons-angular'
import { TagOutline, BarsOutline } from '@ant-design/icons-angular/icons'
import { GlobalErrorComponent } from './components/global-error/global-error.component'
import { ProductsPageComponent } from './pages/products-page/products-page.component'
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component'
import { DocumentsPageComponent } from './pages/documents-page/documents-page.component'
import { NavigationComponent } from './components/navigation/navigation.component'
import { HeaderComponent } from './components/header/header.component'
import { ClientComponent } from './components/client/client.component'
import { SearchClientPipe } from './pipes/search-client.pipe'

import { SortDirective } from './directive/sort.directive';
import { LoginPageComponent } from './pages/login-page/login-page.component'

const icons: IconDefinition[] = [TagOutline, BarsOutline]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    ProductsPageComponent,
    WelcomePageComponent,
    DocumentsPageComponent,
    NavigationComponent,
    HeaderComponent,
    ClientComponent,
    SearchClientPipe,
    SortDirective,
    LoginPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NzIconModule.forChild(icons)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
