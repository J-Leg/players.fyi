import Layout from '../components/layout'
import Chart from '../components/chart'

import query from '../middleware/db';

import { InferGetStaticPropsType } from 'next'
import { appify, chartify } from '../lib/dataUtils'

const REGEN_HOURS: number = 12;
const SEC_IN_HOUR: number = 3600;

export const getStaticProps = async() => {
  const res: Object[] = await query()
  
  return {
    props: { 
      chartData: chartify(res),
      appData: appify(res),
    },
    // Incremental static regeneration: Next.js 9.5+
    // revalidate: REGEN_HOURS * SEC_IN_HOUR, 
  };
}

function Home({ appData, chartData }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
    <Layout>
      <Chart appData={ appData } chartData={ chartData } />
    </Layout>
  )
}

export default Home

