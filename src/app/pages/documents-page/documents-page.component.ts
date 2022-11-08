import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, ElementRef, OnInit } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { IClient, IHeader } from 'src/app/models/client'
import { DocumentsService } from 'src/app/services/documents.service'
import { ModalService } from 'src/app/services/modal.service'
import { headers } from '../../data/clients'

const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({
      opacity: 0
    })
  ),
  state(
    'close',
    style({
      opacity: 1
    })
  ),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')])
])
@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  animations: [fadeInOut]
})
export class DocumentsPageComponent implements OnInit {
  constructor(
    private targetElem: ElementRef,
    public documentsService: DocumentsService,
    public modalService: ModalService
  ) {}

  clients$: Observable<IClient[]>
  selectedClient?: IClient
  headers: IHeader[] = headers
  loading = false
  term = ''
  selectedHeader = ''
  selectedOrder = ''

  //Selector for Click Header Tables
  useSelector(value: string) {
    this.selectedHeader = value
    const elem = this.targetElem.nativeElement.querySelector(`[data-name=${value}]`)
    const order = elem.getAttribute('data-order')
    this.selectedOrder = order
  }

  ngOnInit(): void {
    this.loading = true
    this.clients$ = this.documentsService.getAll().pipe(tap(() => (this.loading = false)))
  }
}
