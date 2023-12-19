import { Tabs, Select, Button, Input } from "antd"
import { FC, useEffect, useState } from "react"

import type { IChannelsResult } from "../../../common"

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
  const [channels, setChannels] = useState<IChannelsResult>()
  const [m3u, setM3u] = useState<string>()

  useEffect(() => {
    window.api.getChannels().then((c) => {
      const [status, channels] = c
      if (/^[2]/.test(status.toString())) {
        setChannels(JSON.parse(channels) as IChannelsResult)
        setM3u(m3u)
      }
    })
  }, [])
  return (
    <div>
      {!!channels && (
        <>
          <p>更新时间: {new Date(channels.updated_at).toLocaleString()}</p>
          <Select
            defaultValue={channels.channels[0].m3u}
            onChange={(e) => setM3u(e)}
            options={channels.channels.map((c) => {
              return {
                label: c.name,
                value: c.m3u
              }
            })}
          />
          <Button>测速</Button>
          {/* TODO 在下面展示测速结果 */}
        </>
      )}
    </div>
  )
}

const TestOthers: FC = () => {
  return (
    <div>
      <Input placeholder="请输入m3u地址" />
      <Button>测速</Button>
    </div>
  )
}

export default Test
