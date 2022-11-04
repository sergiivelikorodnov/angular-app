import { IClient, IHeader } from '../models/client'

/* export const clients: IClient[] = [
  {
    id: '1',
    date: '2021-05-21T12:13:52.569Z',
    client: 'Sergii Velykorodnov',
    amount: 150,
    notice: 'Some notice'
  },
  {
    id: '2',
    date: '2021-06-21T12:13:52.569Z',
    client: 'Katja Novak',
    amount: 100,
    notice: 'Some notice'
  },
  {
    id: '3',
    date: '2021-07-21T12:13:52.569Z',
    client: 'Primoz Kramberg',
    amount: 250,
    notice: null
  }
] */

export const headers: IHeader[] = [
  {
    title: 'client',
    width: 'w-1/5'
  },
  {
    title: 'date',
    width: 'w-1/5'
  },
  {
    title: 'amount',
    width: 'w-1/5'
  },
  {
    title: 'notice',
    width: 'w-2/5'
  }
]
