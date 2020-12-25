import React, { PureComponent } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Typography from '@material-ui/core/Typography';

import { stringToRgb } from 'lib/chartUtils'
import CustomTooltip from 'components/tooltip'

/**
 * Component for displaying data on a multi-line graph
 *
 * @component
 */
function Chart(props: { title: string, appData: object[], chartData: object[], active: object }) {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="textPrimary" gutterBottom>{ props.title }</Typography>
      <ResponsiveContainer width='100%'>
        <LineChart
          data={ props.chartData }
          margin={{ top: 20, right: 50, left: 50, bottom: 60 }}>
          <CartesianGrid />
          <XAxis stroke='#ffffff' dataKey="date" tick={<CustomizedAxisTick/>} />
          <YAxis stroke='#ffffff' />
          <Tooltip position={{ y: 0, x: 100 }} content={<CustomTooltip />} animationEasing='ease-in-out' />
          {
            props.appData.map((val: any) => {
              return (<Line key={`line_${val['name']}`}
                            type="monotone" 
                            dataKey={val['name']}
                            stroke={stringToRgb(val['name'])}
                            dot={false}
                            hide={props.active[val['name']]}
                            />)
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
