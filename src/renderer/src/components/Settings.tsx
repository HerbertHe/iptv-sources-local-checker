import { FC, useEffect, useState } from "react"
import { Button, Checkbox, Select, message } from "antd"

import {
  ProvinceOptions,
  type IConfig,
  type TISP,
  type TProvince,
  ISPOptions
} from "../../../common"

// TODO 操作成功反馈
const Settings: FC = () => {
  const [messageApi, contextHolder] = message.useMessage()

  const [, setConfig] = useState<IConfig | undefined>()
  const [join, setJoin] = useState<boolean>()
  const [province, setProvince] = useState<TProvince>()
  const [isp, setISP] = useState<TISP>()

  useEffect(() => {
    getConfig()
  }, [])

  const getConfig = (): void => {
    window.api.getConfig().then((res) => {
      setConfig(res)
      const { join, province, isp } = res
      setJoin(join)
      setProvince(province)
      setISP(isp)
    })
  }

  const updateConfig = (): void => {
    window.api.updateConfig(join, province, isp)
    getConfig()
    messageApi.open({
      type: "success",
      content: "本地设置文件更新成功"
    })
  }

  return (
    <div className="Settings">
      {contextHolder}
      <Checkbox
        onChange={(e) => {
          setJoin(!e.target.checked)
        }}
      >
        不参与共建计划
      </Checkbox>

      <div className="InfoSelectGroup">
        <Select
          className="InfoSelect"
          title="您所在的地区"
          placeholder="您所在的地区"
          disabled={!join}
          options={ProvinceOptions}
          value={province}
          onChange={(val) => {
            setProvince(val)
          }}
        />

        <Select
          className="InfoSelect"
          title="您的网络运营商"
          value={province === "outside" ? "other" : isp}
          disabled={!join || province === "outside"}
          options={ISPOptions}
          onChange={(val) => {
            if (province === "outside") {
              setISP("other")
            } else {
              setISP(val)
            }
          }}
        />

        <Button type="default" onClick={updateConfig}>
          保存
        </Button>
      </div>
    </div>
  )
}

export default Settings
