import React, { ChangeEvent, useState } from "react"
import s from "./Input.module.scss"
import classNames from "../../lib/classNames/classNames"

interface InputProps {
  className?: string
}

export const Input = ({ className }: InputProps) => {
  const [value, setValue] = useState("")
  const clickInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    if (inputValue.length <= 7) {
      setValue(inputValue)
    }
  }
  return (
    <input className={classNames(s.input, [className])} value={value} onChange={clickInputHandler} />
  )
}