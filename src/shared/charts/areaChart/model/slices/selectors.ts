import { RootState } from "app/store/store"
import { DAYS_VALUEType, INTERVAL_VALUEType } from "widgets/SelectBlock/model/types"

export const getDataChartPrice = (state: RootState) => state.chart.priceUsd
export const getDataChartTime = (state: RootState) => state.chart.time
export const getStartTimeHistory = (value: DAYS_VALUEType[]) => (state: RootState) => value.find((item) => item.value === state.chart.startDayHistory)
export const getIntervalTime = (value: INTERVAL_VALUEType[]) => (state: RootState) => value.find((item) => item.value === state.chart.interval)
