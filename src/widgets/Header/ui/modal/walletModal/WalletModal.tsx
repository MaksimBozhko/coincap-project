import React, { FC, useState } from "react"
import s from "./WalletModal.module.scss"
import { ReactComponent as Close } from "app/img/close.svg"
import classNames from "shared/lib/classNames/classNames"
import { Modal } from "shared/modal/Modal"
import SuperButton from "shared/components/superButton/SuperButton"
import { Input } from "shared/components/Input/Input"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../app/store/store"
import { getPrice } from "../../../../Table/model/helpers/getPrice"

type DeletePropsType = {
  name: string
  isOpen?: boolean
  onClose?: () => void
  className?: string
  callback?: (count: string) => void
}

export const WalletModal: FC<DeletePropsType> = ({
                                                name,
                                                isOpen,
                                                onClose,
                                                className,
                                                callback
                                              }) => {
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
    // if (onClose) {
    //   onClose()
    // }
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames("", {}, [className])}
    >
      <div className={s.titleBlock}>
        <h5 className={s.title}>{name}</h5>
        <div className={s.close} onClick={onCloseHandler}><Close /></div>
      </div>
      <div>
        {items.map((coin) => (
          <div className={s.coin}>
            <div>
              <p className={s.name}>{coin.name}({coin.symbol})</p>
            </div>
            <div className={s.info}>
              <p>{getPrice((+coin.priceUsd * coin.count).toString())}</p>
              <p>{Number(coin.changePercent24Hr).toFixed(2)}</p>
            </div>
            <div onClick={() => onAddHandler(coin.name)}>
              -
            </div>
          </div>
        ))}
      </div>
    </Modal>
  )
}