import { FC } from "react"
import { Tabs } from "antd"

import "../assets/pannel.less"

import Home from "./Home"
import About from "./About"
import Settings from "./Settings"
import Test from "./Test"

const tabs = [
  {
    label: "首页",
    key: "home",
    children: <Home />
  },
  {
    label: "测速",
    key: "test",
    children: <Test />
  },
  {
    label: "设置",
    key: "settings",
    children: <Settings />
  },
  {
    label: "关于",
    key: "about",
    children: <About />
  }
]

const Pannel: FC = () => {
  return (
    <div className="Pannel">
      <Tabs className="PannelContainer" tabPosition={"left"} items={tabs} size={"large"} />
    </div>
  )
}

export default Pannel
