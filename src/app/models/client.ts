export interface IClient {
  id: string
  date: string
  client: string
  amount: number
  notice: string | null
}

export interface IHeader {
  title: string
  width: string
}
