import React, { FC } from "react"
import s from "./AddModal.module.scss"
import { ReactComponent as Close } from "app/img/close.svg"
import classNames from "../../../../../../shared/lib/classNames/classNames"
import { Modal } from "../../../../../../shared/modal/Modal"
import SuperButton from "shared/components/superButton/SuperButton"
import { Input } from "../../../../../../shared/components/Input/Input"

type DeletePropsType = {
  name: string
  isOpen?: boolean
  onClose?: () => void
  className?: string
  callback?: () => void
}

export const AddModal: FC<DeletePropsType> = ({
                                                name,
                                                isOpen,
                                                onClose,
                                                className,
                                                callback
                                              }) => {
  const onCloseHandler = () => {
    if (onClose) {
      onClose()
    }
  }
  const onAddHandler = () => {
    if (callback) {
      callback()
    }
    if (onClose) {
      onClose()
    }
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
      <span className={s.text}>Do you really want to buy {name}?</span>
      <Input className={s.input}/>
      <div className={s.btnBlock}>
        <SuperButton className={s.btn}
                     xType={"secondary"}
                     onClick={onCloseHandler}
        >
          Cancel</SuperButton>
        <SuperButton className={s.btn}
                     onClick={onAddHandler}
        >
          Buy</SuperButton>
      </div>
    </Modal>
  )
}