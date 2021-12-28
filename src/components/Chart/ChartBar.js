import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    console.log("Amount: "+ props.value);
    console.log("Maximum: " + props.maxValue);
    console.log(props.amount / props.maxValue);
    console.log("barheight: " + barFillHeight);
  }
  

  return (
    <div>
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
    </div>
  );
};

export default ChartBar;