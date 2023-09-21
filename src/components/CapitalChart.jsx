import React from 'react';
import HighchartsReact from 'highcharts-react-official';

const CapitalChart = ({ highcharts }) => {
  let a = 75;

  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      size: '90%',
    },
    title: {
      text: '',
      style: {
        color: '#FFFFFF00',
      },
    },
    colors: ['transparent', '#FFFFFFCC', '#FFFFFF99'],
    plotOptions: {
      pie: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          connectorShape: 'straight',
          connectorWidth: 2,
          // crookDistance: '30%',
          // alignTo: 'connectors',
          format: '{point.y}% <br> {point.name}',

          style: {
            color: '#FFFFFF', // Set the color of the yAxis labels to red
            fontFamily: 'Playfair Display, serif',
            fontSize: '0.8rem',
            fontWeight: 'normal',
          },
        },
      },
    },
    series: [
      {
        name: 'Data',
        data: [
          {
            name: '',
            y: a,
            dataLabels: {
              enabled: false, // hide label for this data point
            },
          },
          {
            name: 'RETURN ON CAPITAL <br> CLOSED TRADES',
            y: 16.1,
            sliced: true,
          },
          {
            name: 'ESTIMATED RETURN <br> IN CAPITAL IN ONE YEAR',
            y: 37.5,
          },
        ],
      },
    ],
    tooltip: {
      enabled: false,
    },
  };

  return (
    <HighchartsReact
      highcharts={highcharts}
      constructorType={'chart'}
      options={options}
    />
  );
};

export default CapitalChart;
