/**
 * 头信息正则表达式
 */
export const EXTM3URegExp = /#EXTM3U\s+(x-tvg-url="([^"]+)")?/

/**
 * 频道正则表达式
 */
export const EXTINFRegExp = /#EXTINF:-1\s+([^,]+)?\s*,\s*(.+)/

/**
 * 属性正则表达式
 */
export const AttrRegExp = /([a-z-]+)="(.*)"/

/**
 * 链接正则表达式
 */
export const URLDomainRegExp = /([^:]+):\/\/([^/]+)\//

/**
 * ipv6正则表达式（乐观情况）
 */
export const Ipv6DirectRegExp = /\[([0-9a-fA-F:]+)\]/
