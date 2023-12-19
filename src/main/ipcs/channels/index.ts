import { getChannels } from "../../channels"

export const ipc_get_channels_handler = async (): Promise<Response> => {
  return await getChannels()
}
