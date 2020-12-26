
type Element = { name: string, quantity: number, date: string }

/**
 * Extract list of app identifiers
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
 * Construct daily chart data (last 30 Days)
 * @param inputData - data to be formatted
 * @returns Transformed data
 */
export function chartifyDaily(inputData: Object[]): Object[] {
  const metricType: string = 'daily_metrics'
  const quantityKey: string = 'player_count'
  return chartify(inputData, metricType, quantityKey, 30)
}

/**
 * Construct monthly average chart data (last 12 months)
 * @param inputData - data to be formatted
 * @returns Transformed data
 */
export function chartifyMonthlyAvg(inputData: Object[]): Object[] {
  const metricType: string = 'metrics'
  const quantityKey: string = 'avgplayers'
  return chartify(inputData, metricType, quantityKey, 12)
}

/**
 * Construct monthly peak chart data
 * @param inputData - data to be formatted
 * @returns Transformed data
 */
export function chartifyMonthlyPeak(inputData: Object[]): Object[] {
  const metricType: string = 'metrics'
  const quantityKey: string = 'peak'
  return chartify(inputData, metricType, quantityKey, 12)
}

/**
 * Transform data from app-based metrics to datetime-based metrics
 * @param inputData - data to be formatted
 * @returns Transformed data
 */
function chartify(inputData: Object[], metricType: string, quantityKey: string, tailLength: number): Object[] {
  const dateMap: Map<string, Element[]> = constructDateMap(metricType, tailLength)
  for (const app of inputData) {
    for (const metric of app[metricType].slice(-1 * tailLength)) {
      const date: Date = metric['date']
      const key: string = buildDateKey(date, metricType)
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
 * Construct all the keys (dates) for the date map
 * @param metricType - type of metric
 */
function constructDateMap(metricType: string, tailLength: number): Map<string, Element[]> {
  const newDateMap: Map<string, Element[]> = new Map()

  const end = new Date()
  const dateIt = new Date()

  switch (metricType) {
    case 'daily_metrics':
      dateIt.setDate(end.getDate() - tailLength)
      for (const d: Date = dateIt; d < end; d.setDate(d.getDate()+1)) {
        const newKey: string = buildDateKey(d, metricType)
        if (newKey) {
          newDateMap.set(newKey, [])
        }
      }
      break
    case 'metrics':
      dateIt.setMonth(end.getMonth() - tailLength)
      for (const d: Date = dateIt; d < end; d.setMonth(d.getMonth()+1)) {
        const newKey: string = buildDateKey(d, metricType)
        if (newKey) {
          newDateMap.set(newKey, [])
        }
      }
      break
    default:
      console.warn("Unknown key" + metricType)
      return newDateMap
  }
  return newDateMap
}

/**
 * Build formatted date key:
 * 7-char variant (monthly)
 * 10-char variant (daily)
 * @param inputDate
 */
function buildDateKey(inputDate: Date, metricType: string): string {
  const dayVal: number = inputDate.getUTCDate()
  const day: string = dayVal < 10 ? '0'+dayVal.toString() : dayVal.toString()

  // Month values are 0-indexed
  const monthVal: number = inputDate.getUTCMonth()+1
  const month: string = monthVal < 10 ? '0'+monthVal.toString() : monthVal.toString()

  const year: string = inputDate.getUTCFullYear().toString()

  var resultKey: string

  switch(metricType) {
    case 'daily_metrics':
      resultKey = day + '/' + month + '/' + year
      break
    case 'metrics':
      resultKey = month + '/' + year
      break
    default:
      console.warn("Unknown key: " + metricType)
  }
  return resultKey
}
