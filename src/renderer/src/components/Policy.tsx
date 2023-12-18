import { useState, FC } from "react"
import "../assets/policy.less"

import { Checkbox, Select } from "antd"

import { ProvinceOptions, ISPOptions } from "../../../common"

interface IPolicyProps {
  setPage: () => void
  setExit: () => void
}

export const Policy: FC<IPolicyProps> = ({ setPage, setExit }) => {
  const [step, setStep] = useState("policy")
  return (
    <div className="Policy">
      <div className="Container">
        {step === "policy" && <PolicyConfirm setNext={() => setStep("plan")} setExit={setExit} />}
        {step === "plan" && <PolicyPlan setNext={setPage} setExit={setExit} />}
      </div>
    </div>
  )
}

interface IPolicyItemProps {
  setNext: () => void
  setExit: () => void
}

export const PolicyConfirm: FC<IPolicyItemProps> = ({ setNext, setExit }) => {
  const [confirm, setConfirm] = useState(false)

  return (
    <>
      <header>用户软件使用协议 v1.0</header>
      <main>
        <p>
          请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款。除非您已阅读并接受本协议所有条款，否则您无权使用本软件。您的使用行为将视为对本协议的接受，并同意接受本协议各项条款的约束。
        </p>
        <ul>
          <li>
            本软件项目基于GPL-3.0开源协议，仓库地址为：
            <a href="https://github.com/HerbertHe/iptv-sources-local-checker">
              https://github.com/HerbertHe/iptv-sources-local-checker
            </a>
            。当您开始使用本软件或基于本项目做衍生开发之时，默认您已熟知理解并同意本GPL-3.0协议的内容和规定。
          </li>
          <li>
            本软件充分尊重用户隐私，不会采集或存储任何用户的个人信息，也不会将用户的任何信息上传到任何第三方服务器。
          </li>
          <li>
            <b>
              为优化项目软件的体验，本软件的部分功能将会提交非敏感的数据以优化社区体验，但此功能为用户主动设置选择开启。
            </b>
            如若不开启此项功能，本软件部分功能将被禁用。详细信息请参考
            <a href="#">《开启用户共建计划，优化使用体验》</a>，明确标注采集数据项和数据的用途。
          </li>
          <li>最终解释权归本项目所有。</li>
        </ul>
      </main>
      <footer>
        <div className="confirm">
          <Checkbox onChange={(e) => setConfirm(e.target.checked)}>
            我确认已阅读、理解并同意本软件协议
          </Checkbox>
        </div>
        <div className="buttons">
          <button
            type="button"
            className={confirm ? "open" : "pending"}
            onClick={() => {
              if (confirm) {
                setNext()
              }
            }}
          >
            下一步
          </button>
          <button type="button" className="exit" onClick={() => setExit()}>
            退出
          </button>
        </div>
      </footer>
    </>
  )
}

export const PolicyPlan: FC<IPolicyItemProps> = ({ setNext, setExit }) => {
  const [join, setJoin] = useState(true)
  const [province, setProvince] = useState("")
  const [idc, setIdc] = useState("")

  return (
    <>
      <header>用户共建计划</header>
      <main>
        <p>
          本项目为提升用户体验，发起用户共建计划，以优化用户体验。
          <b>
            如若不开启此项功能，本软件部分功能将被禁用。详细信息请参考
            <a href="#">《开启用户共建计划，优化使用体验》</a>，明确标注采集数据项和数据的用途。
          </b>
        </p>
        <div className="Info">
          <div className="InfoTitle">请选择您的所在地区和网络运营商：</div>
          <div className="InfoDesc">
            为了保证数据和软件使用的实际准确性，请您不要填写虚假的信息，并关闭本地网络代理服务，否则本软件可能无法有效工作。
          </div>
          <div className="InfoJoin">
            <Checkbox
              onChange={(e) => {
                setJoin(!e.target.checked)
              }}
            >
              不参与共建计划
            </Checkbox>
          </div>
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
              value={province === "outside" ? "other" : idc}
              disabled={!join || province === "outside"}
              options={ISPOptions}
              onChange={(val) => {
                if (province === "outside") {
                  setIdc("other")
                } else {
                  setIdc(val)
                }
              }}
            />
          </div>
        </div>
      </main>
      <footer>
        <div className="buttons">
          <button type="button" className="open" onClick={() => setNext()}>
            确认
          </button>
          <button type="button" className="exit" onClick={() => setExit()}>
            退出
          </button>
        </div>
      </footer>
    </>
  )
}

export default Policy
