import React from "react"
import { useSelector } from "react-redux"
import { TableRow } from "../TableBody"
import { TableHead } from "../TableHead"
import { AddModal } from "shared/modal/addModal"
import { useAddModalCoin } from "shared/hooks/useAddModalCoin"
import { getCoins } from "../model/slices/selectors"
import { THEAD_DATA } from "../model/constants"
import classNames from "shared/lib/classNames/classNames"
import s from "./Table.module.scss"
import { TableProps } from "../model/types"

export const Table = ({ className }: TableProps) => {
  const coins = useSelector(getCoins)

  const { onBuyCoinsHandler, setValue, value, onCloseModal } = useAddModalCoin()

  return (
    <>
      <table className={classNames(s.table, [className])}>
        <thead className={s.thead}>
        <tr>
          {THEAD_DATA.map(name => {
            return <TableHead key={name} item={name} />
          })}
        </tr>
        </thead>
        <tbody>
        {coins.map(item => {
          return <TableRow key={`${item.rank}`} setValue={setValue} data={item} />
        })}
        </tbody>
      </table>
      {!!value && <AddModal name={value} callback={onBuyCoinsHandler} onClose={onCloseModal} />}
    </>
  )
}
