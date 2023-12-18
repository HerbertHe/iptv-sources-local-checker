import { FC, useState } from "react"

import "../assets/pannel.less"

import Home from "./Home"
import About from "./About"
import Settings from "./Settings"
import Versions from "./Versions"

const Pannel: FC = () => {
  const [pannel, setPannel] = useState("home")

  return (
    <div className="Pannel">
      <div className="PannelLeft">{/* TODO 列表展示 */}</div>
      <div className="PannelRight">
        {pannel === "home" && <Home />}
        {pannel === "about" && <About />}
        {pannel === "settings" && <Settings />}
        {pannel === "versions" && <Versions />}
      </div>
    </div>
  )
}

export default Pannel
