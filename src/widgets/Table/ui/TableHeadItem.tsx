import React from "react"

interface TableHeadItemProps {
  item: string
}

export const TableHeadItem = ({ item } : TableHeadItemProps) => {
  return (
    <td title={item}>
      {item}
    </td>
  )
}