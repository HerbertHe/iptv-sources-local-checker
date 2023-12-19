export interface IChannel {
  name: string
  m3u: string
  count: number | undefined
}

export interface IEPG {
  name: string
  epg: string
}

export interface IChannelsResult {
  channels: IChannel[]
  epgs: IEPG[]
  updated_at: number
}
