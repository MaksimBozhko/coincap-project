import React from "react"
import s from "./Header.module.scss"
import { Navbar } from "../../Navbar"

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div>logo</div>
        <Navbar/>
      </div>
    </div>
  )
}