import React, { useMemo } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
import { changeMilsecToDate } from "../model/changeMilsecToDate"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

type AreaChartType = {
  priceUsd: string[]
  time: number[]
  name: string
}

export function AreaChart({ priceUsd, time, name }: AreaChartType) {
  const options = useMemo( () => ({
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const
      },
    }
  }), [])
  const labels = useMemo(() => time.map((time) => changeMilsecToDate(time)), [time])
  const data =  useMemo( () => ({
    labels,
    datasets: [
      {
        fill: true,
        label: name,
        data: priceUsd,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  }), [priceUsd, name])
  return <Line options={options} data={data} />
}