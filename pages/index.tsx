import Layout from '../components/layout'
import Chart from '../components/chart'

import query from '../middleware/db';

import { InferGetStaticPropsType } from 'next'
import { chartify } from '../lib/dataUtils'

const REGEN_HOURS: number = 12;
const SEC_IN_HOUR: number = 3600;

export const getStaticProps = async() => {
  const res: Object[] = await query()
  
  return {
    props: { 
      chartData: chartify(res),
    },
    // Incremental static regeneration: Next.js 9.5+
    // revalidate: REGEN_HOURS * SEC_IN_HOUR, 
  };
}

function Home({ chartData }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
    <Layout>
      <Chart chartData={ chartData } />
    </Layout>
  )
}

export default Home

