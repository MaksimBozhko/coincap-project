import React from "react"
import { ItemType } from "../model/slices/types"
import { getRowPrice } from "../model/helpers/getRowPrice"

interface TableRowProps {
  data: ItemType[]
  id: string
}

export const TableRow = ({ data, id }: TableRowProps) => {
  const rowArr = getRowPrice(data)
  return (
    <tr>
      {rowArr.map((item) => {
        return <td key={`${item}${id}`}>{item}</td>
      })}
    </tr>
  )
}