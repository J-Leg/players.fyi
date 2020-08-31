import Layout from '../components/layout'
import Chart from '../components/chart'

import { queryTop } from '../middleware/db'

import { InferGetStaticPropsType } from 'next'
import { appify, chartifyDaily, chartifyMonthlyAvg } from '../lib/dataUtils'

const REGEN_HOURS: number = 12;
const SEC_IN_HOUR: number = 3600;

export const getStaticProps = async() => {
  const res: Object[] = await queryTop(10)
  return {
    props: { 
      chartDataDaily: chartifyDaily(res),
      chartDataMonthlyAvg: chartifyMonthlyAvg(res),
      appData: appify(res),
    },
    // Incremental static regeneration: Next.js 9.5+
    // revalidate: REGEN_HOURS * SEC_IN_HOUR, 
  };
}

function Home({ appData, chartDataDaily, chartDataMonthlyAvg }: InferGetStaticPropsType<typeof getStaticProps>) {
	const days30: string = "Last 30 days"
	const months30: string = "Last 30 months"

	return (
    <Layout>
      <table>
        <tr>
          <Chart appData={ appData } chartData={ chartDataDaily } chartTitle={ days30 } />
        </tr>
        <tr>
          <Chart appData={ appData } chartData={ chartDataMonthlyAvg } chartTitle={ months30 } />
        </tr>
      </table>
    </Layout>
  )
}

export default Home

