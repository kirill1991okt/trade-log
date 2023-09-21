import React from 'react';
import HighchartsReact from 'highcharts-react-official';

const PerformanceChart_Test = ({ highcharts }) => {
  const options = {
    chart: {
      type: 'pie',
      spacing: [0, 0, 0, 0],
      backgroundColor: 'transparent',
    },
    title: {
      text: '',
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
      },
    },
    series: [
      {
        name: 'Data 1',
        data: [['Category 1', 20]],
        center: ['40%', '50%'],
        size: '50%',
      },
      {
        name: 'Data 2',
        data: [['Category A', 40]],
        center: ['60%', '40%'],
        size: '50%',
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={highcharts}
      constructorType={'chart'}
      options={options}
    />
  );
};

export default PerformanceChart_Test;
