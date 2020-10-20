import { stringToRgb } from '../lib/chartUtils'
import CustomToolTip from './tooltip'
import React, { Fragment, PureComponent } from 'react'
import Title from './title'
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

function Chart(props: any) {
  return (
    <React.Fragment>
      <Title>Last 30 Days</Title>
      <ResponsiveContainer width='100%'>
        <LineChart
          data={props.chartData}
          margin={{
            top: 20, right: 50, left: 50, bottom: 60,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="date" tick={<CustomizedAxisTick/>} />
          <YAxis />
          {/* <Tooltip itemSorter={item => (-1 * item.value)} /> */}
          <Tooltip content={<CustomToolTip />} />
          {
            props.appData.map((val) => {
              return (<Line key={`line_${val['name']}`}
                            type="monotone" dataKey={`${val['name']}`}
                            stroke={`${stringToRgb(val['name'])}`}
                            dot={false} />)
            })
          }
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

class CustomizedAxisTick extends PureComponent<any> {
  render() {
    const {
      x, y, payload,
    } = this.props

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-75)">{payload.value}</text>
      </g>
    );
  }
}

export default Chart
