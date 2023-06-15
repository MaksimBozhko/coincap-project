export type ItemType = {
  id: string
  rank: string
  name: string
  priceUsd: string
  marketCapUsd: string
  vwap24Hr: string
  supply: string
  volumeUsd24Hr: string
  changePercent24Hr: string
  symbol: string
}

export type CaseItemType = {
  rank: string
  name: string
  priceUsd: string
  marketCapUsd: string
  vwap24Hr: string
  supply: string
  volumeUsd24Hr: string
  changePercent24Hr: string
  symbol: string
  count: number
}

export type InitStateType = {
  coins: ItemType[]
  case: CaseItemType[]
  coin: ItemType
}


export type SetCoinsType = {
  count: number
  name: string
}

export type QueryParamType = {
  limit: number
  search?: string
  offset?: number
}

export type TableRowProps = {
  data: ItemType
  setValue: (name: string) => void
}