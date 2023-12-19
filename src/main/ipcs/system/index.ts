import { getNetworkInformation } from "../../system"
import { TNetwork } from "../../../common"

export const ipc_get_network_information_handler = (): Promise<TNetwork> => {
  return getNetworkInformation()
}
