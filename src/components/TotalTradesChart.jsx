import React from 'react';
import HighchartsReact from 'highcharts-react-official';

const TotalTradesChar = ({ highcharts }) => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: '#00FF0000',
    },
    title: {
      text: 'TOTAL <br> TRADES',
      style: {
        color: '#FFFFFF', // Set the color of the yAxis labels to red
        fontFamily: 'Julius Sans One, sans-serif',
        fontSize: '0.8rem',
        fontWeight: 'normal',
        textAlign: 'center',
      },
      y: 215,
    },
    subtitle: {
      text: '54',
      style: {
        color: '#FFFFFF', // Set the color of the yAxis labels to red
        fontFamily: 'Playfair Display, serif',
        fontSize: '1.7rem',
        fontWeight: 'normal',
      },
      y: 255,
    },
    colors: ['#FFFFFF99', '#FFFFFFCC'],
    plotOptions: {
      pie: {
        innerSize: '50%', // Set the inner size to create a donut chart
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          connectorShape: 'straight',
          connectorWidth: 2,
          // crookDistance: '30%',
          // alignTo: 'connectors',
          format: '{point.y} <br> {point.name}',
          style: {
            color: '#FFFFFF', // Set the color of the yAxis labels to red
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.1rem',
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
            name: 'OPEN',
            y: 18,
          },
          {
            name: 'CLOSED',
            y: 36,
          },
        ],
      },
    ],
    tooltip: {
      pointFormat: ' <b>{point.y}</b>',
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
export default TotalTradesChar;
