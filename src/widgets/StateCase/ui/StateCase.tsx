import React from "react"
import { useSelector } from "react-redux"
import { getCasePrice, getCurrentPrice } from "../model/selector"
import { getPrice } from "../../Table/model/helpers/getPrice"

export const StateCase = () => {
  const currentPrice = useSelector(getCurrentPrice)
  const casePrice = useSelector(getCasePrice)

  const percent = Number.isNaN(((casePrice - currentPrice) * 100) / casePrice) ? 0 : (((casePrice - currentPrice) * 100) / casePrice).toFixed(2)
  return (
    <div>
      <div>wallet value: {getPrice(casePrice.toString())}</div>
      <div>difference: {getPrice((casePrice - currentPrice).toString())}</div>
      <div>percent: {percent}</div>
    </div>
  )
}
