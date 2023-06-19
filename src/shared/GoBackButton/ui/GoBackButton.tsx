import React from "react"
import { useNavigate } from "react-router-dom"
import s from "./GoBackButton.module.scss"
import arrowleft from "../../modal/walletModal/img/arrowleft.svg"
import { GoBackButtonType } from "../types"

export const GoBackButton = ({ title }: GoBackButtonType) => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)
  return (
    <button className={s.goBack_button} onClick={goBack}>
      <img className={s.goBack_button__img} src={arrowleft} alt={`${title}`} />
      {title}
    </button>
  )
}
