import React from "react"
import s from "./Loader.module.scss"
import { LoaderType } from "../types"
import classNames from "../../lib/classNames/classNames"

export const Loader = ({ className }: LoaderType) => {
  return <div className={s.load}>
    <div className={classNames(s.loader, [className])}></div>
  </div>
}
