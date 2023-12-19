import { URLDomainRegExp, Ipv6DirectRegExp } from "./regexp"

/**
 * ipv6 直链
 * @param u
 * @returns
 */
export const isIpv6Direct = (u: string): boolean => {
  const url = URLDomainRegExp.exec(u) as RegExpExecArray
  return Ipv6DirectRegExp.test(url[2])
}
