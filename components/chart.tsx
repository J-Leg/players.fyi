import React, { PureComponent } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Typography from '@material-ui/core/Typography';

import { stringToRgb } from '../lib/chartUtils'
import CustomTooltip from './tooltip'

function Chart(props: any) {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="textPrimary" gutterBottom>Last 30 Days</Typography>
      <ResponsiveContainer width='100%'>
        <LineChart
          data={props.chartData}
          margin={{ top: 20, right: 50, left: 50, bottom: 60 }}>
          <CartesianGrid />
          <XAxis stroke='#ffffff' dataKey="date" tick={<CustomizedAxisTick/>} />
          <YAxis stroke='#ffffff' />
          <Tooltip content={<CustomTooltip />} animationEasing='ease-in-out' />
          {
            props.appData.map((val: any) => {
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
    const { x, y, payload } = this.props

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill='#ffffff' transform="rotate(-60)">{payload.value}</text>
      </g>
    );
  }
}

export default Chart
