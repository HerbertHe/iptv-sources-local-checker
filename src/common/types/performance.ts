import { IDNSInfo, IObject } from "."

/**
 * 单个链接检查情况
 */
export interface IURLTestResult {
  url: string
  protocol: string
  ssl: boolean
  ipv6: boolean
  dns: IDNSInfo
  response_full_time: bigint
}

/**
 * m3u文件头
 */
export interface IM3uHeader {
  attrs: IObject
  raw: string
}

export interface IM3uStatusMetadataStream {
  codec_name: string
  codec_long_name: string
  codec_type: string
  width: number
  height: number
  pix_fmt: string
  is_avc: string
}

export interface IM3uStatusMetadataFormat {
  filename: string
  format_name: string
  format_long_name: string
  size: string
}

export interface IM3uStatusMetadataRequest {
  method: string
  url: string
  headers: IObject
}

export interface IM3uStatusMetadata {
  stream: IM3uStatusMetadataStream
  format: IM3uStatusMetadataFormat
  request: IM3uStatusMetadataRequest
}

export interface IM3uItemStatus {
  ok: boolean
  code: string
  message?: string // 请求失败
  metadara?: IM3uStatusMetadata // 请求成功
}

export interface IM3uItemTVG {
  id: string
  name: string
  logo: string
  url: string
  resc: string
}

export interface IM3uItemGroup {
  title: string
}

export interface IM3uItem {
  name: string
  tvg: IM3uItemTVG
  group: IM3uItemGroup
  url: string
  raw: string
  status: IM3uItemStatus
}

export type TM3uItem = IM3uItem & IURLTestResult

export type TM3uItems = TM3uItem[]

/**
 * m3u 文件测试结果
 */
export interface IM3uResult {
  header: IM3uHeader
  items: TM3uItems
  status: IURLTestResult
}
