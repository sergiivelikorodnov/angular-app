import { Component, Input, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/modal.service'
import { DocumentsService } from 'src/app/services/documents.service'
import { IClient } from 'src/app/models/client'
import { ErrorService } from 'src/app/services/error.service'
import { throwError } from 'rxjs'

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html'
})
export class ConfirmDeleteComponent implements OnInit {
  @Input() clientData: IClient
  constructor(
    public modalService: ModalService,
    public documentsService: DocumentsService,
    private errorService: ErrorService
  ) {}

  //Delete client from Firestore after confirmation
  deleteClient() {
    this.documentsService
      .delete(this.clientData)
      .then(() => {
        this.modalService.close()
      })
      .catch(err => this.errorHandler(err))
  }

  // Error handler
  private errorHandler(error: any) {
    this.errorService.handler(error.message)
    return throwError(() => error.message)
  }

  ngOnInit(): void {}
}
