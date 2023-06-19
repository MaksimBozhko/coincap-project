import React from "react"
import { Select } from "shared/Select/ui/Select"
import { useActions } from "shared/hooks/useActions"
import { chartActions } from "shared/charts/model/slice"
import { SelectBlockType } from "../model/types"
import { DAYS_VALUE, INTERVAL_VALUE } from "../model/constants"
import s from "./SelectBlock.module.scss"

export const SelectBlock = ({ interval, dayAgo }: SelectBlockType) => {
  const { setInterval, setHistoryDay } = useActions(chartActions)
  return (
    <div className={s.block}>
      <div>
        <p>interval</p>
        <Select
          value={interval}
          items={INTERVAL_VALUE}
          setValue={value => {
            setInterval(value)
          }}
        />
      </div>
      <div>
        <p>period(days)</p>
        <Select
          value={dayAgo}
          items={DAYS_VALUE}
          setValue={value => {
            setHistoryDay(value)
          }}
        />
      </div>
    </div>
  )
}
