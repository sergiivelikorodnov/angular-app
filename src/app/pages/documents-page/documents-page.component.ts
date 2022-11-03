import { Component, ElementRef, OnInit } from '@angular/core'
import { IClient, IHeader } from 'src/app/models/client'
import { clients as data } from '../../data/clients'
import { headers } from '../../data/clients'

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent implements OnInit {
  constructor(private targetElem: ElementRef) {}

  clients: IClient[] = data
  headers: IHeader[] = headers
  term = ''
  selectedHeader = ''
  selectedOrder = ''

  useSelector(value: string) {
    this.selectedHeader = value
    const elem = this.targetElem.nativeElement.querySelector(`[data-name=${value}]`)
    const order = elem.getAttribute('data-order')
    this.selectedOrder = order
  }

  ngOnInit(): void {}
}
