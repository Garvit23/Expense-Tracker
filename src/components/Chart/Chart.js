import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);
    return <div className='chart'>
        {props.dataPoints.map(dataPoint => 
        <ChartBar
          key={dataPoint.label}  //key since this is a list so help react to render this 
          value={dataPoint.value}
          maxValue={totalMaximum} 
          label={dataPoint.label} />
         )}
    </div>
};

 
export default Chart;