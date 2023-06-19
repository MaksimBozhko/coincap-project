import React from "react"
import { TableHeadItemProps } from "../../model/types"
import s from './TableHead.module.scss'

export const TableHead = ({ item }: TableHeadItemProps) => {
  return <td className={s.item} title={item}>{item}</td>
}
