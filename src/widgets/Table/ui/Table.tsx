import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { TableRow } from "./TableRow"
import { TableHeadItem } from "./TableHeadItem"
import classNames from "shared/lib/classNames/classNames"
import { useActions } from "../../../shared/hooks/useActions"
import { coinsThunks } from "../model/slices/slice"
import { getCoins } from "../model/slices/selectors"
import s from "./Table.module.scss"

interface TableProps {
  customClass?: string
}

export const Table = ({ customClass }: TableProps) => {
  const coins = useSelector(getCoins)
  const { getItems } = useActions(coinsThunks)

  useEffect(() => {
      getItems({})
  }, [])

  const theadData = ["Rank", "Name", "Price", "MarketCap", "VWAP(24Hr)", "Supply", "Volume(24Hr)", "Change(24Hr)"]

  return (
    <table className={classNames(s.table, [customClass])}>
      <thead className={s.thead}>
      <tr>
        {theadData.map((name) => {
          return <TableHeadItem key={name} item={name} />
        })}
      </tr>
      </thead>
      <tbody>
      {coins.map((item) => {
        return <TableRow key={item.id} id={item.id} data={item.items} />
      })}
      </tbody>
    </table>
  )
}