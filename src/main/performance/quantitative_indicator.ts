interface IQuantitativeIndicatorResult {
  total: number
  available: number
  available_rate: number
  // ipv4
  // ipv6
}

// TODO 测试可用率，ipv6覆盖率
export const quantitative_indicator = (): IQuantitativeIndicatorResult => {
  return {
    total: 0,
    available: 0,
    available_rate: 0
  }
}
