import { RootState } from "../../../app/store/store"
import { createSelector } from "@reduxjs/toolkit"
import { CaseItemType, ItemType } from "../../Table/model/slices/types"

export const getCasePrice = (state: RootState) => state.coins.case.reduce((acc, item) => {
  return +item.priceUsd * item.count + acc
}, 0)

const getCoins = (state: RootState) => state.coins.coins
const getCaseCoins = (state: RootState) => state.coins.case

export const getCurrentPrice = createSelector([getCoins, getCaseCoins], (a, b) => {
  let result: number = 0

  b.forEach((itemB) => {
    const matchingItemA = a.find((itemA) => itemA.name === itemB.name)
    if (matchingItemA) {
      const totalValue = parseFloat(matchingItemA.priceUsd) * itemB.count
      result += totalValue
    }
  })
  return result
})