import React from "react"
import { PopularCoins } from "../../PopularCoins"
import SuperButton from "shared/components/superButton/SuperButton"
import { StateCase } from "../../StateCase"
import { WalletModal } from "./modal/walletModal/WalletModal"
import { useAddModalCoin } from "shared/hooks/useAddModalCoin"
import { useActions } from "shared/hooks/useActions"
import { coinsActions } from "../../Table/model/slices/slice"
import s from "./Header.module.scss"

export const Header = () => {
  const { removeCoins } = useActions(coinsActions)
  const clickBtnHandler = () => {
    setValue("WALLET")
  }
  const onBuyCoinsHandler = (name: string) => {
    removeCoins(name)
  }
  const { setValue, value, onCloseModal } = useAddModalCoin()

  return (
    <div className={s.header}>
      <div className={s.container}>
        <PopularCoins />
        <SuperButton className={s.btn} onClick={clickBtnHandler}>
          WALLET
        </SuperButton>
        <StateCase />
      </div>
      {!!value && <WalletModal name={value} callback={onBuyCoinsHandler} onClose={onCloseModal} />}
    </div>
  )
}
