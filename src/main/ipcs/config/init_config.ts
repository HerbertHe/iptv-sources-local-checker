import { IpcMainInvokeEvent } from "electron"
import { initConfig } from "../../config"

export const ipc_init_config_handler = (e: IpcMainInvokeEvent, ...args): void => {
  return initConfig(...args)
}
