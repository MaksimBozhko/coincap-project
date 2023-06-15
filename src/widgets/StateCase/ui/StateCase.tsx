import React from "react"
import { getCasePrice, getCurrentPrice } from "../model/selector"
import { useSelector } from "react-redux"
import { getPrice } from "../../Table/model/helpers/getPrice"

export const StateCase = () => {
  const currentPrice = useSelector(getCurrentPrice)
  const casePrice = useSelector(getCasePrice)

  return (
    <div>
      <div>price case: {getPrice(casePrice.toString())}</div>
      <div>dif: {getPrice((casePrice - currentPrice).toString())}</div>
      <div>per: {(((casePrice - currentPrice) * 100) / casePrice).toFixed(2) || 0}</div>
    </div>
  )
}
