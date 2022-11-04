import { Timestamp } from '@angular/fire/firestore'

export interface IClient {
  id: string
  date: Timestamp
  client: string
  amount: number
  notice: string | null
}

export interface IHeader {
  title: string
  width: string
}
