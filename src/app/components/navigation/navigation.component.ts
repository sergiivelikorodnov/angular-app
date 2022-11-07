import { Component, OnInit } from '@angular/core'
import { MENU } from 'src/app/data/menu'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  menu: string[] = MENU
}
