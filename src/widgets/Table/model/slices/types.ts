export type CoinsType = {
  id: string
  items: ItemType[]
}

export type ItemType = {
  rank: string
  name: string
  priceUsd: string
  marketCapUsd: string
  vwap24Hr: string
  supply: string
  volumeUsd24Hr: string
  changePercent24Hr: string
  // symbol: string
  // supply: string
  // maxSupply: string
}