const RECENT: number = 30

type Element = { name: string, quantity: number, date: string }

/**
 * Extract list of app identifiers
 * TODO - for now just get names... future maybe get img icons etc
 * @param inputData - data to be formatted
 * @returns list of IDs
 */
export function appify(inputData: Object[]): Object[] {
  const result: Object[] = new Array(inputData.length) 
 
  for (let i: number = 0; i < inputData.length; i++) {
    result[i] = { 'name': inputData[i]['static_data']['name'] }
  }
  return result
}

/**
 * Construct daily chart data
 * @param inputData - data to be formatted
 * @returns Transformed data
 */
export function chartifyDaily(inputData: Object[]): Object[] {
  const metricKey: string = 'daily_metrics'
  const quantityKey: string = 'player_count'
  return chartify(inputData, metricKey, quantityKey) 
}

/**
 * Construct monthly average chart data
 * @param inputData - data to be formatted
 * @returns Transformed data
 */
export function chartifyMonthlyAvg(inputData: Object[]): Object[] {
  const metricKey: string = 'metrics'
  const quantityKey: string = 'avgplayers'
  return chartify(inputData, metricKey, quantityKey) 
}

/**
 * Construct monthly peak chart data
 * @param inputData - data to be formatted
 * @returns Transformed data
 */
export function chartifyMonthlyPeak(inputData: Object[]): Object[] {
  const metricKey: string = 'metrics'
  const quantityKey: string = 'peak'
  return chartify(inputData, metricKey, quantityKey) 
}

/**
 * Transform data from app-based metrics to datetime-based metrics
 * @param inputData - data to be formatted
 * @returns Transformed data
 */
function chartify(inputData: Object[], metricKey: string, quantityKey: string): Object[] {
  const dateMap: Map<string, Element[]> = constructDateMap(metricKey) 
  for (const app of inputData) {
    for (const metric of app[metricKey].slice(-1 * RECENT)) {
      const date: Date = metric['date']
      const key: string = (metricKey == 'daily_metrics' ? date.getUTCDate() + '/' : '')
                          + (date.getUTCMonth()+1) + '/' + date.getUTCFullYear()      
      if (!dateMap.has(key)) { continue }
      dateMap.get(key).push({name: app['static_data']['name'], quantity: metric[quantityKey], date: key})
    }
  }
  const result: Object[] = []
  for (const [key, value] of dateMap) {
    const chartElem: Object = {} 
    chartElem['date'] = key 

    for (const app of value) {
      chartElem[app['name']] = app['quantity']
    }
    result.push(chartElem)
  }
  return result 
}

/**
 * Javascript map keys are iterared over based on insertion order
 * Construct date map
 * @param metricKey - type of metric 
 */
function constructDateMap(metricKey: string): Map<string, Element[]> {
  const newDateMap: Map<string, Element[]> = new Map()
  const end = new Date() 
  switch (metricKey) {
    case 'daily_metrics':
      var dateIt = new Date()
      dateIt.setDate(end.getDate() - 30)

      for (const d: Date = dateIt; d < end; d.setDate(d.getDate()+1)) {
        const newKey: string = d.getUTCDate() + '/' + (d.getUTCMonth()+1) + '/' + d.getUTCFullYear()
        newDateMap.set(newKey, [])
      }
      break
    case 'metrics':
      var dateIt = new Date()
      dateIt.setMonth(end.getMonth() - 30)

      for (const d: Date = dateIt; d < end; d.setMonth(d.getMonth()+1)) {
        const newKey: string = d.getUTCMonth()+1 + '/' + d.getUTCFullYear()
        newDateMap.set(newKey, [])
      }
      break
    default:
      console.warn("Unknown key" + metricKey)
      return newDateMap
  }
  return newDateMap
}
