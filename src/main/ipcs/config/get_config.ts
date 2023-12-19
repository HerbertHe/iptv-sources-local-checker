import { getConfig } from "../../config"
import { IConfig } from "../../../common"

export const ipc_get_config_handler = (): IConfig | undefined => {
  return getConfig()
}
