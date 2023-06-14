import React from "react"
import s from "./Header.module.scss"
import { Navbar } from "../../Navbar"
import { PopularCoins } from "../../PopularCoins"
import { Modal } from "../../../shared/modal/Modal"
import { StateCase } from "../../StateCase"

export const Header = () => {
  // constants pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin')
  //
  // pricesWs.onmessage = function (msg) {
  //   console.log(msg.data)
  // }
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

