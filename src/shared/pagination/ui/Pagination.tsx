import React, { useState } from "react"

import s from "./pagination.module.scss"
import { ReactComponent as ArrowLeftIcon } from "../model/img/arrowLeft.svg"
import { ReactComponent as ArrowRightIcon } from "../model/img/arrowRight.svg"
import classNames from "../../lib/classNames/classNames"

type PaginationType = {
  page: number
  totalUserCount?: number
  portionSize?: number
  pageSize?: number
  onPageChange: (pageNumber: number) => void
}

export const Pagination = ({ totalUserCount = 100, pageSize = 4, portionSize = 3, onPageChange, page }: PaginationType) => {

  const pageCount = Math.ceil(totalUserCount / pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pageCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  const onClickSelectedPage = (pageNumber: number) => {
    onPageChange && onPageChange(pageNumber)
    if (pageNumber) {
      onPageChange(pageNumber - 1)
    }
  }

  const onClickLeftIconHandler = () => {
    setPortionNumber(portionNumber - 1)
    onPageChange(rightPortionPageNumber - portionSize - 1)
  }

  const onClickRightIconHandler = () => {
    setPortionNumber(portionNumber + 1)
    onPageChange(leftPortionPageNumber + portionSize - 1)
  }
  return (
    <div className={s.pagination}>
      <button className={s.page} onClick={onClickLeftIconHandler} disabled={portionNumber <= 1}>
        <ArrowLeftIcon className={classNames(s.icon, { [s.disabled]: portionNumber <= 1 })} />
      </button>
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => (
          <span
            key={p}
            onClick={() => onClickSelectedPage(p)}
            className={classNames(s.page, { [s.selected]: page + 1 == p })}>
            {p}
          </span>
        ))}
      <button className={s.page} onClick={onClickRightIconHandler} disabled={portionCount <= portionNumber}>
        <ArrowRightIcon className={classNames(s.icon, { [s.disabled]: portionCount <= portionNumber })} />
      </button>
    </div>
  )
}
