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
    colors: ['#FFFFFFCC', '#FFFFFF99'],
    plotOptions: {
      pie: {
        innerSize: '50%',
        dataLabels: {
          enabled: true,
          textAlign: 'right',
          format: '<b>{point.name}</b><br>{point.y}%',
          distance: -110,

          style: {
            color: '#FFF',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            fontWeight: '200',
            textTransform: 'uppercase',
          },
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        name: 'Tradedesk performance1',
        data: [['Tradedesk performance', 20]],
        center: ['35%', '70%'],
        size: '60%',
      },
      {
        name: 'S&P performance',
        data: [['S&P performance', 40]],
        center: ['55%', '30%'],
        size: '60%',
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
