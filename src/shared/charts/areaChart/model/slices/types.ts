export type DataItemType = {
  priceUsd: string
  time: number
}

export type InitStateType = {
  priceUsd: string[]
  time: number[]
  startDayHistory: string
  interval: string
}

export type IntervalType = "m1" | "m5" | "m15" | "m30" | "h1" | "h2" | "h6" | "h12"

export type RequestType = {
  id: string
  interval: string
  start: number
  end: number
}

export type ResponseDataHistoryType = DataItemType[]
