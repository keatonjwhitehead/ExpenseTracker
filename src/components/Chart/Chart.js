import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => Number(dataPoint.value));

  const totalMaximum = Math.max(...dataPointValues);
  const totalMin= Math.min(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (

        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          minValue={totalMin}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;