import { getPrice } from "./getPrice"
import { getMarketCapPrice } from "./getMarketCapPrice"
import { ItemType } from "../types"
import { getVolumePrice } from "./getVolumePrice"

export function getRowPrice(data: ItemType) {
  const entriesArr = Object.entries(data) as string[][]
  const result = entriesArr
    .filter(([key]) => key !== "symbol" && key !== "id")
    .map(([key, value]) => {
      if (key === "priceUsd") {
        return getPrice(value)
      }
      if (key === "marketCapUsd") {
        return getMarketCapPrice(value)
      }
      if (key === "vwap24Hr") {
        if (value === null) {
          return getPrice("0")
        }
        return getPrice(value)
      }
      if (key === "supply") {
        return getMarketCapPrice(value)
      }
      if (key === "volumeUsd24Hr") {
        return getVolumePrice(value)
      }
      if (key === "changePercent24Hr") {
        return Number(value).toFixed(2)
      }
      return value
    })
  const element = "+"
  return result.concat(element)
}
