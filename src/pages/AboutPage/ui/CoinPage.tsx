import React, { useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { SelectBlock } from "widgets/SelectBlock/ui/SelectBlock"
import { AreaChart } from "shared/charts/ui/AreaChart"
import { GoBackButton } from "shared/GoBackButton/ui/GoBackButton"
import { AddModal } from "shared/modal/addModal/ui/AddModal"
import { useActions } from "shared/hooks/useActions"
import { useAddModalCoin } from "shared/hooks/useAddModalCoin"
import { coinsThunks } from "widgets/Table/model/slices/slice"
import { getCurrentTime } from "shared/utils/getCurrentTime"
import {
  getDataChartPrice,
  getDataChartTime,
  getIntervalTime,
  getStartTimeHistory
} from "shared/charts/model/selectors"
import { getCurrentTimeInterval } from "shared/utils/getTimeInterval"
import { getPrice } from "widgets/Table/model/helpers/getPrice"
import { getVolumePrice } from "widgets/Table/model/helpers/getVolumePrice"
import { DAYS_VALUE, INTERVAL_VALUE } from "widgets/SelectBlock/model/constants"
import { getCoin, getError } from "widgets/Table/model/slices/selectors"
import s from "./CoinPage.module.scss"
import { Loader } from "../../../shared/Loader"
import { NotFound } from "../../../shared/NotFound"
import { SuperButton } from "../../../shared/superButton"

const CoinPage = () => {
  const { getItem } = useActions(coinsThunks)
  const priceUsd = useSelector(getDataChartPrice)
  const error = useSelector(getError)
  const time = useSelector(getDataChartTime)
  const dayAgo = useSelector(getStartTimeHistory(DAYS_VALUE))
  const interval = useSelector(getIntervalTime(INTERVAL_VALUE))
  const item = useSelector(getCoin)
  const { id } = useParams()

  const { setValue, onBuyCoinsHandler, value, onCloseModal } = useAddModalCoin()

  const { currentTime, timeHoursAgo } = useMemo(() => getCurrentTimeInterval(dayAgo!.title), [dayAgo!.title])

  useEffect(() => {
    getItem({ id: id!, interval: interval!.title, start: timeHoursAgo, end: currentTime })
  }, [id, interval, timeHoursAgo])

  if (error) return <NotFound message={error}/>
  if (!item.name) return <Loader />
  return (
    <>
      <div className={s.page}>
        <GoBackButton title={"back"} />
        <div className={s.box}>
          <div>
            <p className={s.title}>
              {item.name}({item.symbol})
            </p>
            <p className={s.time}>{getCurrentTime()}</p>
          </div>
          <SuperButton className={s.btn} onClick={() => setValue(item.name)}>
            BUY({item.symbol})
          </SuperButton>
          <div className={s.info}>
            <p>price: {getPrice(item.priceUsd)}</p>
            <p>volume(24Hr): {getVolumePrice(item.volumeUsd24Hr)}</p>
            <p>change: {Number(item.changePercent24Hr).toFixed(2)}</p>
          </div>
        </div>
        <SelectBlock interval={interval!.value} dayAgo={dayAgo!.value} />
        <AreaChart name={item.name} priceUsd={priceUsd} time={time} />
      </div>
      {!!value && <AddModal name={value} callback={onBuyCoinsHandler} onClose={onCloseModal} />}
    </>
  )
}

export default CoinPage
