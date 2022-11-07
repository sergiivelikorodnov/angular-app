import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html'
})
export class WelcomePageComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
