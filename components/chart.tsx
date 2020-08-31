import { stringToRgb } from '../lib/chartUtils'
import CustomToolTip from './tooltip'
import React, { Fragment, PureComponent } from 'react'
import Styles from './chart.module.scss'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

export default class Chart extends PureComponent<{appData: Object[], chartData: Object[], chartTitle: string}, {}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className={Styles.container}>
        <h3>{this.props.chartTitle}</h3>
        <LineChart
          width={1200}
          height={675}
          data={this.props.chartData}
          margin={{
            top: 20, right: 50, left: 50, bottom: 100,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="date" tick={<CustomizedAxisTick/>} />
          <YAxis />
          {/* <Tooltip itemSorter={item => (-1 * item.value)} /> */}
          <Tooltip content={<CustomToolTip />} />
          <Legend layout="vertical" verticalAlign="top" align="right" wrapperStyle={{ right: 20}} />
          {
            this.props.appData.map((val) => {
              return (<Line key={`line_${val['name']}`}
                            type="monotone" dataKey={`${val['name']}`}
                            stroke={`${stringToRgb(val['name'])}`}
                            dot={false} />)
            })
          }
        </LineChart>
      </div>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-75)">{payload.value}</text>
      </g>
    );
  }
}
