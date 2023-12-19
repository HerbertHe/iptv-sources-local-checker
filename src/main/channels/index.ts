export const getChannels = async (): Promise<Response> => {
  return await fetch("https://m3u.ibert.me")
}
