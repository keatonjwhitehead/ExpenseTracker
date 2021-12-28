import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';
  let barMaxHeight = Math.max(props.maxValue, Math.abs(props.minValue));
  const barColorHandler = (val) => {
    val = val*-1;
    if (val < 0){
      barFillHeight = Math.round((props.value / barMaxHeight) * 100) + '%';
      return 'chart-bar__fill';
      
    }
    else {
      barFillHeight = Math.round((Math.abs(props.value) / barMaxHeight) * 100) + '%';
      return 'chart-bar__fill-negative';
    }
  }
  
  

  return (
    <div>
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className={barColorHandler(props.value)}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
    </div>
  );
};

export default ChartBar;