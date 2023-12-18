import React from "react"
import ReactDOM from "react-dom/client"

import { ConfigProvider } from "antd"

import "./assets/index.less"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {}
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
