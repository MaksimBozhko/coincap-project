import React from "react"
import { TableHeadItemProps } from "../model/types"

export const TableHeadItem = ({ item }: TableHeadItemProps) => {
  return <td title={item}>{item}</td>
}
