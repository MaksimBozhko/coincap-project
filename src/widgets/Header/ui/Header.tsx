import React from "react"
import { PopularCoins } from "../../PopularCoins"
import { StateCase } from "../../StateCase"
import { WalletModal } from "shared/modal/walletModal/ui/WalletModal"
import { useAddModalCoin } from "shared/hooks/useAddModalCoin"
import { useActions } from "shared/hooks/useActions"
import { coinsActions } from "../../Table/model/slices/slice"
import s from "./Header.module.scss"
import { SuperButton } from "shared/superButton"

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
        <SuperButton className={s.btn} onClick={clickBtnHandler}>
          WALLET
        </SuperButton>
        <PopularCoins />
        <div className={s.popularCoins}>
          <StateCase />
        </div>
      </div>
      {!!value && <WalletModal name={value} callback={onBuyCoinsHandler} onClose={onCloseModal} />}
    </div>
  )
}
