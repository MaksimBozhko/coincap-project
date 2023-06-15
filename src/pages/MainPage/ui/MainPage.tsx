import React, { useEffect } from "react"
import { Table } from "widgets/Table"
import { Pagination } from "shared/pagination"
import s from "./MainPage.module.scss"
import { useGetPricesQuery } from "widgets/Table/model/slices/coinApi"

const MainPage = () => {
  useGetPricesQuery();
  return (
    <div className={s.page}>
      <Table/>
      <Pagination/>
    </div>
  )
}

export default MainPage
