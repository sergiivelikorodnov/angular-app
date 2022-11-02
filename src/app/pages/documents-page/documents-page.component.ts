import { Component, ElementRef, OnInit } from '@angular/core'
import { IClient } from 'src/app/models/client'
import { clients as data } from '../../data/clients'

interface Header {
  title: string
  width: string
}
@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent implements OnInit {
  constructor(private targetElem: ElementRef) {}

  clients: IClient[] = data
  headers: Header[] = [
    {
      title: 'client',
      width: '1/5'
    },
    {
      title: 'date',
      width: '1/5'
    },
    {
      title: 'amount',
      width: '1/5'
    },
    {
      title: 'notice',
      width: '1/5'
    }
  ]
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
