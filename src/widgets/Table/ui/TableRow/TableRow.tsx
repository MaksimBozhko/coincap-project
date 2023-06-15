import React, { memo, useEffect, useRef, useState } from "react"
import { ItemType } from "../../model/slices/types"
import { getRowPrice } from "../../model/helpers/getRowPrice"
import { NavLink } from "react-router-dom"
import s from "./TableRow.module.scss"
import classNames from "shared/lib/classNames/classNames"

interface TableRowProps {
  data: ItemType
  cal: (name: string) => void
}

export const TableRow = memo(({ data, cal }: TableRowProps) => {
  const [isActive, setIsActive] = useState("")
  const changeFlag = useRef("")

  const rowArr = getRowPrice(data)
  const handleCellPlusClick = () => {
    cal(data.name)
  }
  useEffect(() => {
    setIsActive((+data.priceUsd - +changeFlag.current > 0) ? "green" : "red")
    const timeout = setTimeout(() => {
      setIsActive("")
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [data])
  return (
    <>
      <tr className={classNames("", { [s.red]: isActive === "red", [s.green]: isActive === "green" })}>
        {rowArr.map((item, index) => {
          if (index === rowArr.length - 1) {
            return (
              <td key={`${item}_${index}`} onClick={handleCellPlusClick}>
                {item}
              </td>
            )
          }
          if (index === 1) {
            return <td key={`${item}_${index}`}>
              <NavLink to={data.id}>
                {item}
              </NavLink>
            </td>
          }
          return <td key={`${item}_${index}`}>{item}</td>
        })}
      </tr>
    </>
  )
})