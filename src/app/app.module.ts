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

const icons: IconDefinition[] = [TagOutline, BarsOutline]

@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NzIconModule.forChild(icons)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
