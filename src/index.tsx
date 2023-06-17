import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, HashRouter } from "react-router-dom"
import { Provider } from "react-redux"

import "./app/styles/index.scss"
import App from "./app/App"
import { store } from "./app/store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)
