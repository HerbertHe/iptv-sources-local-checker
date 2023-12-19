import { contextBridge, ipcRenderer } from "electron"
import { electronAPI } from "@electron-toolkit/preload"

import type { IAPI } from "./index.d"

import type { TProvince, TISP, IConfig } from "../common"

// Custom APIs for renderer
const api: IAPI = {
  isConfigExisted: () => ipcRenderer.invoke("config:is_config_existed") as Promise<boolean>,
  initConfig: (joinPlan?: boolean, province?: TProvince, isp?: TISP) =>
    ipcRenderer.invoke("config:init_config", joinPlan, province, isp) as Promise<void>,
  updateConfig: (joinPlan?: boolean, province?: TProvince, isp?: TISP) =>
    ipcRenderer.invoke("config:update_config", joinPlan, province, isp) as Promise<void>,
  getConfig: () => ipcRenderer.invoke("config:get_config") as Promise<IConfig | undefined>,

  getChannels: () => ipcRenderer.invoke("channels:get_channels") as Promise<Response>
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI)
    contextBridge.exposeInMainWorld("api", api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
