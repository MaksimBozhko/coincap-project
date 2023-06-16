import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useActions } from "shared/hooks/useActions"
import { Table } from "widgets/Table"
import { Loader } from "shared/Loader"
import { Pagination } from "shared/pagination"
import { useGetPricesQuery } from "widgets/Table/model/slices/coinApi"
import { getCoins } from "widgets/Table/model/slices/selectors"
import { LIMIT } from "widgets/Table/model/constants"
import { coinsThunks } from "widgets/Table/model/slices/slice"
import s from "./MainPage.module.scss"

const MainPage = () => {
  const coins = useSelector(getCoins)
  const { getItems } = useActions(coinsThunks)
  const [page, setPage] = useState(0)

  useEffect(() => {
    getItems({ limit: LIMIT, offset: page * LIMIT })
  }, [page])

  useGetPricesQuery()
  if (!coins.length) return <Loader />
  return (
    <div className={s.page}>
      <Table />
      <Pagination page={page} onPageChange={setPage} />
    </div>
  )
}

export default MainPage
