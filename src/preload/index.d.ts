import { ElectronAPI } from "@electron-toolkit/preload"
import { TNetwork } from "src/common"

export interface IAPI {
  isConfigExisted: () => Promise<boolean>
  initConfig: (joinPlan?: boolean, province?: TProvince, isp?: TISP) => Promise<void>
  updateConfig: (joinPlan?: boolean, province?: TProvince, isp?: TISP) => Promise<void>
  getConfig: () => Promise<IConfig | undefined>

  getChannels: () => Promise<[number, string]>
  getNetworkInfo: () => Promise<TNetwork>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: IAPI
  }
}
