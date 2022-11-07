import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { DocumentsService } from './services/documents.service'
import { ModalService } from './services/modal.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, public modalService: ModalService, public documentService: DocumentsService) {}

  hasRoute(route: string) {
    return this.router.url == route
  }
}
