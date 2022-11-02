import { Component, OnInit } from '@angular/core'
import { IClient } from 'src/app/models/client'
import { clients as data } from '../../data/clients'
@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent implements OnInit {
  clients: IClient[] = data
  term = ''

  ngOnInit(): void {}
}
