import { Tabs } from "antd"
import { FC, useEffect } from "react"

const Test: FC = () => {
  const tabs = [
    {
      label: "m3u.ibert.me 服务",
      key: "ibert",
      children: <TestIBert />
    },
    {
      label: "其他 M3U 服务",
      key: "others",
      children: <TestOthers />
    }
  ]

  return (
    <div className="Test">
      <header>M3U源本地测试</header>
      <Tabs className="TestContainer" tabPosition="top" items={tabs} />
    </div>
  )
}

const TestIBert: FC = () => {
  useEffect(() => {
    const res = window.api.getChannels()
    console.log(res)
  }, [])
  return <div></div>
}

const TestOthers: FC = () => {
  return <div></div>
}

export default Test
