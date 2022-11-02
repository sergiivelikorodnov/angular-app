import { Pipe, PipeTransform } from '@angular/core'
import { IClient } from '../models/client'

@Pipe({
  name: 'searchClient'
})
export class SearchClientPipe implements PipeTransform {
  transform(clients: IClient[], search: string): IClient[] {
    if (search === '') return clients
    return clients.filter(client => client.client.toLowerCase().includes(search.toLowerCase()))
  }
}
