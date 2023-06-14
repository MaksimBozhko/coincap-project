import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { TableRow } from "./TableRow/TableRow"
import { TableHeadItem } from "./TableHeadItem"
import classNames from "shared/lib/classNames/classNames"
import { useActions } from "../../../shared/hooks/useActions"
import { coinsActions, coinsThunks } from "../model/slices/slice"
import { getCoins } from "../model/slices/selectors"
import s from "./Table.module.scss"
import { AddModal } from "./TableRow/modal/addModal/AddModal"
import { useSearchParams } from "react-router-dom"
import { getSearchParams } from "shared/getSearchParams/getSearchParams"
import { LIMIT } from "../model/constants"
import { useParam } from "../../../shared/hooks/useParam"

interface TableProps {
  customClass?: string
}

export const Table = ({ customClass }: TableProps) => {
  const coins = useSelector(getCoins)
  const { getItems } = useActions(coinsThunks)
  const { setCoins } = useActions(coinsActions)
  const [value, setValue] = useState("")

  const { search } = useParam()

  const onBuyCoinsHandler = (count: number) => {
    setCoins({ count, name: value })
  }
  const onCloseModal = () => {
    setValue("")
  }

  useEffect(() => {
    getItems({ limit: LIMIT, offset: (--search.page) * LIMIT })
  }, [search.page])

  const theadData = ["Rank", "Name", "Price", "MarketCap", "VWAP(24Hr)", "Supply", "Volume(24Hr)", "Change(24Hr)", "buy"]
  return (
    <>
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
          return <TableRow key={`${item.rank}`} cal={setValue} data={item} />
        })}
        </tbody>
      </table>
      {!!value && (
        <AddModal name={value} callback={onBuyCoinsHandler} onClose={onCloseModal} />
      )}
    </>
  )
}