import { Injectable, NgZone } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import { throwError } from 'rxjs'
import { Login } from '../models/login'
import { ErrorService } from './error.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any
  constructor(
    public afAuth: AngularFireAuth,
    public auth: AngularFireAuth,
    public router: Router,
    private errorService: ErrorService,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    // Setting logged in user in localstorage else null
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user
        localStorage.setItem('user', JSON.stringify(this.userData))
        JSON.parse(localStorage.getItem('user')!)
      } else {
        localStorage.setItem('user', 'null')
        JSON.parse(localStorage.getItem('user')!)
      }
    })
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!)
    return user !== 'null' ? true : false
  }

  private errorHandler(error: any) {
    this.errorService.handler(error.message)
    return throwError(() => error.message)
  }

  // Auth logic to run auth providers
  doLogin(provider: Login) {
    this.afAuth
      .signInWithEmailAndPassword(provider.email, provider.password)
      .then(() => {
        this.ngZone.run(() => {
          this.router.navigate(['/domov'])
        })
      })
      .catch(err => {
        this.errorHandler(err)
      })
  }
  // Sign out
  doLogOut() {
    this.afAuth
      .signOut()
      .then(() => {
        localStorage.removeItem('user')
        this.router.navigate(['/'])
      })
      .catch(err => {
        this.errorHandler(err)
      })
  }
}
