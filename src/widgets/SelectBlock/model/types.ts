import { IntervalType } from "../../../shared/charts/areaChart/model/slices/types"

export type SelectBlockType = {
  interval: string
  dayAgo: string
}

export type INTERVAL_VALUEType = {
  value: string
  title: IntervalType
}

export type DAYS_VALUEType = {
  value: string
  title: number
}