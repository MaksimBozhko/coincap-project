import React from "react"
import { GoBackButton } from "../../GoBackButton"
import s from './NotFound.module.scss'

export type NotFoundType = {
  message: string
}

export const NotFound = ({ message }: NotFoundType) => {
  return (
    <div className={s.page}>
      <GoBackButton title={"Go Back"} />
      <div className={s.blockText}>
        <p className={s.text}>Sorry;</p>
        <p className={s.textError}>Page {message}</p>
      </div>
    </div>
  )
}