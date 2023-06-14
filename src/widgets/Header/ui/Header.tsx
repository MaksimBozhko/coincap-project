import React, { useState } from "react"
import s from "./Header.module.scss"
import { PopularCoins } from "../../PopularCoins"
import { StateCase } from "../../StateCase"
import SuperButton from "../../../shared/components/superButton/SuperButton"
import { WalletModal } from "./modal/walletModal/WalletModal"
import { useActions } from "../../../shared/hooks/useActions"
import { coinsActions } from "../../Table/model/slices/slice"

export const Header = () => {
  const [value, setValue] = useState("")
  const { removeCoins } = useActions(coinsActions)

  const clickBtnHandler = () => {
    setValue("WALLET")
  }
  const onBuyCoinsHandler = (name: string) => {
    removeCoins(name)
  }
  const onCloseModal = () => {
    setValue("")
  }
  return (
    <div className={s.header}>
      <div className={s.container}>
        <PopularCoins />
        <SuperButton className={s.btn} onClick={clickBtnHandler}>WALLET</SuperButton>
        <StateCase />
      </div>
      {!!value && (
        <WalletModal name={value} callback={onBuyCoinsHandler} onClose={onCloseModal} />
      )}
    </div>
  )
}

