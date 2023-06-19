import React from "react"
import s from "./WalletModal.module.scss"
import { ReactComponent as Close } from "shared/modal/walletModal/img/close.svg"
import classNames from "shared/lib/classNames/classNames"
import { Modal } from "shared/modal/Modal"
import { useSelector } from "react-redux"
import { RootState } from "app/store/store"
import { getPrice } from "../../../../widgets/Table/model/helpers/getPrice"
import { WalletModalPropsType } from "../types"

export const WalletModal = ({ name, isOpen, onClose, className, callback }: WalletModalPropsType) => {
  const items = useSelector((state: RootState) => state.coins.case)

  const onCloseHandler = () => {
    if (onClose) {
      onClose()
    }
  }
  const onAddHandler = (name: string) => {
    if (callback) {
      callback(name)
    }
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classNames("", {}, [className])}>
      <div className={s.titleBlock}>
        <h5 className={s.title}>{name}</h5>
        <div className={s.close} onClick={onCloseHandler}>
          <Close />
        </div>
      </div>
      <div>
        {items.map(coin => (
          <div className={s.coin}>
            <div>
              <p className={s.name}>
                {coin.name}({coin.symbol})
              </p>
            </div>
            <div className={s.info}>
              <p>{getPrice((+coin.priceUsd * coin.count).toString())}</p>
            </div>
            <div onClick={() => onAddHandler(coin.name)}>-</div>
          </div>
        ))}
      </div>
    </Modal>
  )
}
