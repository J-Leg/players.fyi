const RECENT: number = 30

type Element = { name: string, quantity: number, date: string }

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

