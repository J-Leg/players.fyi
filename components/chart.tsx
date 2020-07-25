import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Chart extends PureComponent<{chartData: Object[]}, {}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <LineChart
        width={1200}
        height={600}
        data={this.props.chartData}
        margin={{
          top: 20, right: 50, left: 50, bottom: 100,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="date" tick={<CustomizedAxisTick/>} />
        <YAxis />
        <Tooltip itemSorter={item => (-1 * item.value)}/>
        <Legend layout="vertical" verticalAlign="middle" align="right"/>
        <Line type="monotone" dataKey="MONSTER HUNTER: WORLD" stroke="#8884d8" />
        <Line type="monotone" dataKey="ARK: Survival Evolved" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Black Desert Online" stroke="#82ca9d" />
      </LineChart>
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
