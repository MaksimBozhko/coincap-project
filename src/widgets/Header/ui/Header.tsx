import React, { useState } from "react"
import s from "./Header.module.scss"
import { Navbar } from "../../Navbar"
import { PopularCoins } from "../../PopularCoins"
import { StateCase } from "../../StateCase"
import SuperButton from "../../../shared/components/superButton/SuperButton"
import { AddModal } from "../../Table/ui/TableRow/modal/addModal/AddModal"
import { WalletModal } from "./modal/walletModal/WalletModal"

export const Header = () => {
  const [value, setValue] = useState('')


  const clickBtnHandler = () => {
    setValue('WALLET')
  }
  const onBuyCoinsHandler = (count: number) => {
    // setCoins({ count, name: value })
  }
  const onCloseModal = () => {
    setValue('')
  }
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div>logo</div>
        <PopularCoins />
        <SuperButton className={s.btn} onClick={clickBtnHandler}>WALLET</SuperButton>
        {/*<Navbar />*/}
        <StateCase />
      </div>
      {!!value && (
        <WalletModal name={value} callback={onBuyCoinsHandler} onClose={onCloseModal} />
      )}
    </div>
  )
}

