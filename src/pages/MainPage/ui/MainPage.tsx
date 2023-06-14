import React from "react"
import { Table } from "widgets/Table"
import { Pagination } from "shared/pagination"
import s from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={s.page}>
      <Table/>
      <Pagination/>
    </div>
  )
}

export default MainPage
