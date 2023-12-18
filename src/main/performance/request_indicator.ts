import { hrtime } from "process"

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
