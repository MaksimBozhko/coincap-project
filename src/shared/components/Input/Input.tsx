import React, { ChangeEvent } from "react"
import s from "./Input.module.scss"
import classNames from "../../lib/classNames/classNames"

interface InputProps {
  value: string
  setValue: (value: string) => void
  className?: string
}

export const Input = ({ className, setValue, value }: InputProps) => {
  const clickInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    if (inputValue.length <= 7) {
      setValue(inputValue)
    }
  }
  return <input className={classNames(s.input, [className])} value={value} onChange={clickInputHandler} />
}
