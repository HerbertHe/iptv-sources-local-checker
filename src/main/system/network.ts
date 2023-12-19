import { networkInterfaces } from "systeminformation"

import type { TNetwork } from "../../common"

export const getNetworkInformation = async (): Promise<TNetwork> => {
  return await networkInterfaces()
}
