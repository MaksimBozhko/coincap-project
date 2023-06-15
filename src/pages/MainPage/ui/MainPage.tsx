import React, { useEffect } from "react"
import { Table } from "widgets/Table"
import { Pagination } from "shared/pagination"
import s from "./MainPage.module.scss"
import { useGetPricesQuery } from "../../../widgets/Table/model/slices/coinApi"
import { useDispatch } from "react-redux"

const MainPage = () => {

  const { data, error } = useGetPricesQuery(['bitcoin']);

  useEffect(() => {
    if (error) {
      console.log('Error fetching prices:', error);
    }
  }, [error]);

  return (
    <div className={s.page}>
      <Table/>
      <Pagination/>
    </div>
  )
}

export default MainPage
