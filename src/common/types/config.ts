export type TProvince = string | ""
export type TISP = "chinatelecom" | "cmcc" | "chinaunicom" | "other" | ""
export interface IConfig {
  province: TProvince
  isp: TISP
}
