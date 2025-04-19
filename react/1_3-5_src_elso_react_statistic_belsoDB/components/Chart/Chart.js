import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css'

export const Chart = (props) => {
  const dataPointValue = props.dataPoint.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValue)

  return (
    <div className='chart'>
      {props.dataPoint.map(dataPoint => (
        <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
          />))}
    </div>
  )
}

export default Chart;