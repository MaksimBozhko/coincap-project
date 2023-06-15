import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParam } from "shared/hooks/useParam"
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
  const { search } = useParam()

  useEffect(() => {
    getItems({ limit: LIMIT, offset: --search.page * LIMIT })
  }, [search.page])

  useGetPricesQuery()
  if (!coins.length) return <Loader />
  return (
    <div className={s.page}>
      <Table />
      <Pagination />
    </div>
  )
}

export default MainPage
