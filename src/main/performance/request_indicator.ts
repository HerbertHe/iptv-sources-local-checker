import { hrtime } from "process"
import { resolveAny } from "dns/promises"
import type { AnyARecord, AnyAaaaRecord, AnyCnameRecord } from "dns"

import { IDNSInfo } from "../../common"
import { URLDomainRegExp } from "../utils"

/**
 * 测试协议，加密情况，ipv6支持情况，dns情况，全程连接时延
 * @param url
 */

export const singleURLTest = (url: string) => {
  const [, protocol, domain] = URLDomainRegExp.exec(url) as RegExpExecArray

}

/**
 * 获取访问性能测试
 * @param url
 * @returns
 */
export const getRequestTime = async (url: string): Promise<bigint> => {
  const start = hrtime.bigint()
  const res = await fetch(url)
  const reader = res.body?.getReader()
  if (reader) {
    const result = await reader.read()
    if (result.done) {
      return hrtime.bigint() - start
    }
  }

  return 0n
}

/**
 * 播放源 dns 信息
 */
export const getDNSInfo = async (host: string): Promise<IDNSInfo> => {
  const dns = await resolveAny(host)
  const ipv4 = dns.filter((d) => d.type === "A") as AnyARecord[]
  const ipv6 = dns.filter((d) => d.type === "AAAA") as AnyAaaaRecord[]
  const cname = dns.filter((d) => d.type === "CNAME") as AnyCnameRecord[]

  return {
    raw: dns,
    ipv4: ipv4,
    ipv6: ipv6.length > 0 ? ipv6 : undefined,
    cname: cname.length > 0 ? await getDNSInfo(cname[0].value) : undefined
  }
}
