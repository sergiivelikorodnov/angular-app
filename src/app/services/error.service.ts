import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$ = new Subject<string>()

  handler(message: string) {
    this.error$.next(message)
    setTimeout(() => this.error$.next(''), 4000)
  }

  clear() {
    this.error$.next('')
  }
}
