import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}
  //Logo title
  title = 'angular app'

  ngOnInit() {}
}
