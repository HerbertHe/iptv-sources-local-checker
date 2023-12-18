import { ElectronAPI } from "@electron-toolkit/preload"

export interface IAPI {
  isConfigExisted: () => Promise<boolean>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: IAPI
  }
}
