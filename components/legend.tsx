import { TooltipProps, TooltipPayload } from 'recharts';
import React, { Component } from 'react';

/**
 * Component used for custom legend
 * ~~ Currently not used ~~
 *
 * @Component
 */
class CustomLegend extends Component<TooltipProps> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { payload, label } = this.props
    // Sort in descending order
    const sortedPayload: TooltipPayload[] = payload.slice().sort((a, b) => {
      // Type assertion to keep compiler happy
      let aVal = a.value as number
      let bVal = b.value as number
      return bVal - aVal
    });
    return (
      <div>
        <div>{label}</div>
        {
          sortedPayload.map((elem) => {
            return (<div key={elem.name}>{elem.name + ': ' + elem.value} </div>)
          })
        }
      </div>
    );
  }
}

export default CustomLegend
