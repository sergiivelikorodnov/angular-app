import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
