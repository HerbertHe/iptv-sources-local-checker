interface IQuantitativeIndicatorResult {
  total: number
  available: number
  available_rate: number
  // ipv4
  // ipv6
}

/**
 * M3U 可用性指标评估
 * @returns
 */
export const quantitative_indicator = (): IQuantitativeIndicatorResult => {
  return {
    total: 0,
    available: 0,
    available_rate: 0
  }
}
