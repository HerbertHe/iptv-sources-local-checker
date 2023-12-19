import { FC, useEffect, useState } from "react"

import { TNetwork } from "../../common"

const Home: FC = () => {
  const [local, setLocal] = useState<TNetwork>()
  useEffect(() => {
    window.api.getNetworkInfo().then((res) => {
      if (Array.isArray(res)) {
        const l = res.filter((r) => r.iface === "en0")[0]
        setLocal(l)
      }
    })
  }, [])
  return (
    <div className="Home">
      <header>概览</header>
      <main>
        {!!local && (
          <>
            <div>本地 ipv4 {local.ip4}</div>
            <div>本地 ipv6 {local.ip6}</div>
            <div>类型 {local.type}</div>
          </>
        )}
      </main>
    </div>
  )
}

export default Home
