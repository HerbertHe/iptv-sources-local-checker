import { isConfigExisted } from "../../config"

export const ipc_is_config_existed_handler = (): boolean => {
  return isConfigExisted()
}
