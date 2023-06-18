import React from "react"
import { TableHeadItemProps } from "../model/types"
import s from './TableHeadItem.module.scss'

export const TableHeadItem = ({ item }: TableHeadItemProps) => {
  return <td className={s.item} title={item}>{item}</td>
}
