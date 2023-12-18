import { FC, useEffect, useState } from "react"

import Policy from "./components/Policy"
import Pannel from "./components/Pannel"

const App: FC = () => {
  const [page, setPage] = useState("policy")
  useEffect(() => {
    window.api.isConfigExisted().then((res: boolean) => {
      setPage(res ? "pannel" : "policy")
    })
  }, [])

  return (
    <div className="App">
      {page === "pannel" && <Pannel />}
      {page === "policy" && (
        <Policy
          setExit={() => {}}
          setPage={() => {
            setPage("pannel")
            // 进入软件，生成本地配置文件 province, isp
            // 要在本地 call
          }}
        />
      )}
    </div>
  )
}

export default App
