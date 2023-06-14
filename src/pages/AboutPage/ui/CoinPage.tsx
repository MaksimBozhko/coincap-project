import React, { useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import { useActions } from "shared/hooks/useActions"
import { coinsThunks } from "widgets/Table/model/slices/slice"
import { useSelector } from "react-redux"
import { getTime } from "shared/components/Time/getTime"
import { AreaChart } from "shared/charts/areaChart/ui/AreaChart"
import {
  getDataChartPrice,
  getDataChartTime,
  getIntervalTime,
  getStartTimeHistory
} from "shared/charts/areaChart/model/slices/selectors"
import { getCurrentTimeinterval } from "shared/charts/areaChart/model/getTimeInterval"
import { SelectBlock } from "widgets/SelectBlock/ui/SelectBlock"
import { DAYS_VALUE, INTERVAL_VALUE } from "../../../widgets/SelectBlock/model/constants"
import { getCoin } from "../../../widgets/Table/model/slices/selectors"
import s from './CoinPage.module.scss'
import { getPrice } from "../../../widgets/Table/model/helpers/getPrice"
import { getVolumePrice } from "../../../widgets/Table/model/helpers/getVolumePrice"

const CoinPage = () => {
  const { getItem } = useActions(coinsThunks)
  const priceUsd = useSelector(getDataChartPrice)
  const time = useSelector(getDataChartTime)
  const dayAgo = useSelector(getStartTimeHistory(DAYS_VALUE))
  const interval = useSelector(getIntervalTime(INTERVAL_VALUE))
  const item = useSelector(getCoin)
  const { id } = useParams()

  const { currentTime, timeHoursAgo } = useMemo(() => getCurrentTimeinterval(dayAgo!.title), [dayAgo!.title])

  useEffect(() => {
    getItem({ id: id!, interval: interval!.title, start: timeHoursAgo, end: currentTime })
  }, [id, interval, timeHoursAgo])

  return (
    <div className={s.page}>
    <div className={s.box}>
      <div>
        <p className={s.title}>{item.name}({item.symbol})</p>
        <p className={s.time}>{getTime()}</p>
      </div>
      <div className={s.info}>
        <p>price: {getPrice(item.priceUsd)}</p>
        <p>volume(24Hr): {getVolumePrice(item.volumeUsd24Hr)}</p>
        <p>change: {Number(item.changePercent24Hr).toFixed(2)}</p>
      </div>
    </div>
      <SelectBlock interval={interval!.value} dayAgo={dayAgo!.value} />
      <AreaChart name={item.name} priceUsd={priceUsd} time={time} />
    </div>
  )
}

export default CoinPage
