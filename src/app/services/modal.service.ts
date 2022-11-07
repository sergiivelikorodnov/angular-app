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

  open() {
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
    this.typeModal$.next('')
    this.documentService.selectedDocument(null)
  }

  openCreate() {
    this.open()
    this.typeModal$.next('CREATE')
  }

  openEdit() {
    this.open()
    this.typeModal$.next('EDIT')
  }
}
