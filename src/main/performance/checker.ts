import IPTVChecker from "iptv-checker"



/**
 * m3u  整体检测
 * @param playlists
 * @returns
 */
export const local_checker = (
  playlists: string[]
): Promise<PromiseSettledResult<ICheckerResult>[]> => {
  const checker = new IPTVChecker()

  // 发起批量请求任务
  return Promise.allSettled<ICheckerResult[]>(() => {
    return playlists.map(async (p) => {
      const result = await checker.checkPlaylist(p)
      return result as ICheckerResult
    })
  })
}
