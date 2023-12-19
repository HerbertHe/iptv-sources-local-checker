export const getChannels = async (): Promise<[number, string]> => {
  const res = await fetch("https://m3u.ibert.me/channels.json")
  return [res.status, await res.text()]
}
