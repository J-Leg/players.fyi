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
 * Transform data from app-based metrics to datetime-based metrics
 * @param inputData - data to be formatted
 * @returns Transformed data
 */
export function chartify(inputData: Object[]): Object[] {
  const dateMap: Map<string, Element[]> = new Map()

  for (const app of inputData) {
    for (const metric of app['daily_metrics'].slice(-1 * RECENT)) {
      const date: Date = metric['date']
      const key: string = date.getUTCDate() + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear()      
      if (!dateMap.has(key)) {
        dateMap.set(key, [])
      }

      dateMap.get(key).push({name: app['static_data']['name'], quantity: metric['player_count'], date: key})
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

