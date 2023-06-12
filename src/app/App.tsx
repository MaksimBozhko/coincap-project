import React from "react"
import { AppRouter } from "./providers/router"
import "./styles/index.scss"
import { Header } from "../widgets/Header"

function App() {
  return (
    <div className={"app light"}>
      <Header />
      <div className={"root"}>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
