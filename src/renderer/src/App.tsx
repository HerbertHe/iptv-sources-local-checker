import { useState } from "react"
import Policy from "./components/Policy"

const App = () => {
  const [page, setPage] = useState("policy")
  return (
    <div className="App">
      {page === "policy" && <Policy setExit={() => {}} setNext={() => {}} />}
      {/* 声明版权 */}
      {/* 用户须知 */}
      {/* 版本信息 */}
    </div>
  )
}

export default App
