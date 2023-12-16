import IPTVChecker from 'iptv-checker'

interface ICheckerPlaylistHeader {
  attrs: object
  raw: string
}

interface ICheckerPlaylistItemStatus {
  ok: boolean
  code: string
  message: string
}

interface ICheckerPlaylistItem {
  name: string
  url: string
  raw: string
  status: ICheckerPlaylistItemStatus
}

type TCheckerPlaylistItems = ICheckerPlaylistItem[]

export interface ICheckerResult {
  header: ICheckerPlaylistHeader
  items: TCheckerPlaylistItems
}

/**
 * local checker
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
