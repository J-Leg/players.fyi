import React from 'react'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

import { queryLast } from 'middleware/db'
import { appify, chartifyMonthlyAvg } from 'lib/dataUtils'

import Template from 'components/template'

const REGEN_HOURS: number = 12;
const SEC_IN_HOUR: number = 3600;

export const getStaticProps: GetStaticProps = async() => {
  const res: Object[] = await queryLast(10)
  return {
    props: {
      chartData: chartifyMonthlyAvg(res),
      appData: appify(res),
    },
  };
}

function LastMonths({ appData, chartData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Template title={ "Last 12 Months" } appData={ appData } chartData={ chartData }/>
  );
}
export default LastMonths;
