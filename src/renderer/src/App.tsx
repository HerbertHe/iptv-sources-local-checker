import { FC, useEffect, useState } from "react"

import Policy from "./components/Policy"
import Pannel from "./components/Pannel"

const App: FC = () => {
  const [page, setPage] = useState("pannel")
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
            window.api.initConfig()
          }}
        />
      )}
    </div>
  )
}

export default App
