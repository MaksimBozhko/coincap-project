import React from "react"
import { ItemType } from "../../model/slices/types"
import { getRowPrice } from "../../model/helpers/getRowPrice"
import { NavLink } from "react-router-dom"
import s from './TableRow.module.scss'

interface TableRowProps {
  data: ItemType
  cal: (name: string) => void
}

export const TableRow = ({ data, cal }: TableRowProps) => {
  const rowArr = getRowPrice(data)
  const handleCellPlusClick = () => {
    cal(data.name)
  }
  return (
    <>
      <tr>
        {rowArr.map((item, index) => {
          if (index === rowArr.length - 1) {
            return (
              <td key={`${item}_${index}`} onClick={handleCellPlusClick}>
                {item}
              </td>
            )
          }
          if (index === 1) {
            return <td key={`${item}_${index}`} >
              <NavLink to={"about"}>
                {item}
              </NavLink>
            </td>
          }
        return <td key={`${item}_${index}`}>{item}</td>
        })}
      </tr>
    </>
  )
}