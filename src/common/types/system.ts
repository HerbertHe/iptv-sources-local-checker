import type { AnyARecord, AnyAaaaRecord, AnyRecord } from "dns"
import type { Systeminformation } from "systeminformation"

export type TNetwork =
  | Systeminformation.NetworkInterfacesData[]
  | Systeminformation.NetworkInterfacesData

export interface IDNSInfo {
  raw: AnyRecord[]
  ipv4: AnyARecord[]
  ipv6: AnyAaaaRecord[] | undefined
  cname: IDNSInfo | undefined
}
