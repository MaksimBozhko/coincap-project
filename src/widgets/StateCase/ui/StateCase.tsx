import React from "react"
import { getCasePrice, getCurrentPrice } from "../model/selector"
import { useSelector } from "react-redux"

export const StateCase = () => {
  const currentPrice = useSelector(getCurrentPrice)
  const casePrice = useSelector(getCasePrice)

  return (
    <div>
      <div>price case: {casePrice}</div>
      <div>dif: {casePrice - currentPrice}</div>
      <div>per: {(casePrice - currentPrice) * 100 / casePrice}</div>
    </div>
  )
}