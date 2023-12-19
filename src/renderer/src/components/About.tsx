import { List } from "antd"
import { FC, useEffect, useState } from "react"

interface IVersion {
  name: string
  value: string
}

// TODO 写样式表
const About: FC = () => {
  const [datas, setDatas] = useState<IVersion[]>([])

  useEffect(() => {
    const preset: IVersion[] = [{ name: "仓库", value: "https://github.com/HerbertHe" }]
    const versions = window.electron.process.versions
    setDatas([
      ...preset,
      {
        name: "Electron",
        value: versions.electron as string
      },
      {
        name: "Chrome",
        value: versions.chrome as string
      },
      {
        name: "Node",
        value: versions.node as string
      },
      {
        name: "V8",
        value: versions.v8 as string
      }
    ])
  }, [])

  return (
    <div className="About">
      <List
        header={<header>IPTV Sources Local Checker</header>}
        dataSource={datas}
        renderItem={(data) => {
          // 条件渲染数据
          return (
            <List.Item>
              {data.name} {data.value}
            </List.Item>
          )
        }}
        footer={
          <footer>
            <p>Copyright &copy; IPTV Sources Local Checker All Rights Reserved.</p>
            <p>Open Source Under GPL-3.0 LICENSE</p>
          </footer>
        }
      />
    </div>
  )
}

export default About
