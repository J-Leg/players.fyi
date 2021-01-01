import React from 'react'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

import { queryLast } from 'middleware/db'
import { appify, chartifyDaily } from 'lib/dataUtils'

import Template from 'components/template'

const REGEN_HOURS: number = 12;
const SEC_IN_HOUR: number = 3600;

export const getStaticProps: GetStaticProps = async() => {
  const res: Object[] = await queryLast(10)
  return {
    props: {
      chartData: chartifyDaily(res),
      appData: appify(res),
    },
    revalidate: REGEN_HOURS * SEC_IN_HOUR,
  };
}

function LastDays({ appData, chartData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Template title={ "Last 30 Days" } appData={ appData } chartData={ chartData }/>
  );
}
export default LastDays;
