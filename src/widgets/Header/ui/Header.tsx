import React from "react"
import s from "./Header.module.scss"
import { Navbar } from "../../Navbar"
import { PopularCoins } from "../../PopularCoins"
import { StateCase } from "../../StateCase"

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div>logo</div>
        <PopularCoins />
        <Navbar />
        <StateCase />
      </div>
    </div>
  )
}

