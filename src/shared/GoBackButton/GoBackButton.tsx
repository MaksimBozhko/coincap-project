import React from "react"
import s from "./GoBackButton.module.scss"
import arrowleft from "../../widgets/Header/ui/modal/walletModal/img/arrowleft.svg"
import { useNavigate } from "react-router-dom"
type GoBackButtonType = {
  title: string
}

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
