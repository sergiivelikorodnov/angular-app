import { Component, ElementRef, OnInit } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { IClient, IHeader } from 'src/app/models/client'
import { DocumentsService } from 'src/app/services/documents.service'
import { headers } from '../../data/clients'

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent implements OnInit {
  constructor(private targetElem: ElementRef, private documentsService: DocumentsService) {}

  clients$: Observable<IClient[]>
  headers: IHeader[] = headers
  loading = false
  term = ''
  selectedHeader = ''
  selectedOrder = ''

  useSelector(value: string) {
    this.selectedHeader = value
    const elem = this.targetElem.nativeElement.querySelector(`[data-name=${value}]`)
    const order = elem.getAttribute('data-order')
    this.selectedOrder = order
  }

  ngOnInit(): void {
    this.loading = true
    //this.documentsService.getData()
    this.clients$ = this.documentsService.getAll() /* .pipe(tap(() => (this.loading = false))) */
  }
}
