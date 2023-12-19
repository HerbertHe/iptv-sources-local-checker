import { IpcMainInvokeEvent } from "electron"
import { updateConfig } from "../../config"

export const ipc_update_config_handler = (e: IpcMainInvokeEvent, ...args): void => {
  return updateConfig(...args)
}
