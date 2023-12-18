import fs from "fs"
import path from "path"
import { homedir } from "os"

import type { TProvince, TISP, IConfig } from "../../common"

const CONFIG_DIR_PATH = path.join(homedir(), ".iptvslc")
const CONFIG_PATH = path.join(CONFIG_DIR_PATH, "config.json")

/**
 * 获取本地配置文件
 * @returns
 */
export const getConfig = (): IConfig | undefined => {
  if (!fs.existsSync(CONFIG_PATH)) {
    return undefined
  }

  if (!fs.existsSync(CONFIG_PATH)) {
    return undefined
  }

  const config = fs.readFileSync(CONFIG_PATH).toString()

  if (!config) {
    return undefined
  }

  return JSON.parse(config) as IConfig
}

/**
 * 本地配置文件存在
 * @returns
 */
export const isConfigExisted = (): boolean => {
  return fs.existsSync(CONFIG_PATH)
}

/**
 * 初始化配置文件
 * @param province
 * @param isp
 */
export const initConfig = (province?: TProvince, isp?: TISP): void => {
  if (!fs.existsSync(CONFIG_DIR_PATH)) {
    fs.mkdirSync(CONFIG_DIR_PATH)
  }

  const config: IConfig = {
    province: province ?? "",
    isp: isp ?? ""
  }

  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config))
}

/**
 * 更新配置文件
 * @param province
 * @param isp
 * @returns
 */
export const updateConfig = (province?: TProvince, isp?: TISP): void => {
  if (!fs.existsSync(CONFIG_PATH)) {
    initConfig(province, isp)
    return
  }

  const config_before = JSON.parse(fs.readFileSync(CONFIG_PATH).toString()) as IConfig

  const config: IConfig = {
    province: province ?? config_before.province,
    isp: isp ?? config_before.isp
  }

  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config))
}
