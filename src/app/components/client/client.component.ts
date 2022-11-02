import { Component, Input, OnInit } from '@angular/core'
import { IClient } from 'src/app/models/client'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  @Input() client: IClient
}
