import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./app/styles/index.scss"
import App from "./app/App"
import { Provider } from "react-redux"
import { store } from "./app/store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <BrowserRouter basename={'coincap-project'}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
