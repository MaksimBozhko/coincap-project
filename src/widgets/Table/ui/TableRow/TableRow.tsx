import React, { memo, useEffect, useRef, useState } from "react"
import classNames from "shared/lib/classNames/classNames"
import { getRowPrice } from "../../model/helpers/getRowPrice"
import s from "./TableRow.module.scss"
import { TableRowProps } from "../../model/types"

export const TableRow = memo(({ data, setValue }: TableRowProps) => {
  const [isActive, setIsActive] = useState<string | null>(null)
  const changeFlag = useRef("")

  const rowArr = getRowPrice(data)
  const handleCellPlusClick = () => {
    setValue(data.name)
  }

  useEffect(() => {
    if (isActive !== null) {
      setIsActive(+data.priceUsd - +changeFlag.current > 0 ? "green" : "red")
    }
    changeFlag.current = data.priceUsd
    const timeout = setTimeout(() => {
      setIsActive("")
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [data])

  return (
    <>
      <tr className={classNames("", { [s.green]: isActive === "green", [s.red]: isActive === "red" })}>
        {rowArr.map((item, index) => {
          if (index === rowArr.length - 1) {
            return (
              <td key={`${item}_${index}`} onClick={handleCellPlusClick}>
                {item}
              </td>
            )
          }
          if (index === 1) {
            return (
              <td key={`${item}_${index}`}>
                <a href={`/${data.id}`} className={s.link}>
                  {item}
                </a>
              </td>
            )
          }
          return <td key={`${item}_${index}`}>{item}</td>
        })}
      </tr>
    </>
  )
})
