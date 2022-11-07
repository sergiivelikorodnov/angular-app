import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { IClient } from '../models/client'
import { DocumentsService } from './documents.service'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false)
  typeModal$ = new BehaviorSubject<string>('')

  constructor(private documentService: DocumentsService) {}

  //Open Modal
  open() {
    this.isVisible$.next(true)
  }

  //Close Modal
  close() {
    this.isVisible$.next(false)
    this.typeModal$.next('')
    this.documentService.selectedDocument(null)
  }

  //Open Modal to Create Client
  openCreate() {
    this.open()
    this.typeModal$.next('CREATE')
  }

  //Open Modal to Edit Client
  openEdit() {
    this.open()
    this.typeModal$.next('EDIT')
  }

  //Open Modal to Confirm deleting client
  openDelete() {
    this.open()
    this.typeModal$.next('DELETE')
  }
}
