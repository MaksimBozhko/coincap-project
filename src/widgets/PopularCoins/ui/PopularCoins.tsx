import React from "react"
import { useSelector } from "react-redux"
import { getCoins } from "../../Table/model/slices/selectors"
import { getPrice } from "../../Table/model/helpers/getPrice"
import s from './PopularCoins.module.scss'

export const PopularCoins = () => {
  const coins = useSelector(getCoins)
  return (
    <div className={s.block}>
      {coins.slice(0, 3).map(({ symbol, priceUsd }) => (
        <div key={symbol}>{symbol}: {getPrice(priceUsd)}</div>
      ))}
    </div>
  )
}