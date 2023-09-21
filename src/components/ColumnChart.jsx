import React from 'react';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart = ({ highcharts }) => {
  const options = {
    chart: {
      type: 'column',
      backgroundColor: '#00FF0000',
    },
    title: {
      text: 'September',
      style: {
        color: '#FFFFFF', // Set the color of the yAxis labels to red
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.8rem',
        fontWeight: 'normal',
      },
    },
    subtitle: {
      text: 'monthly graph',
      style: {
        color: '#FFFFFF', // Set the color of the yAxis labels to red
        fontFamily: 'Roboto, sans-serif',
        fontSize: '0.7rem',
        fontWeight: 'normal',
      },
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      title: {
        enabled: false, // Hide the xAxis title
      },
      categories: ['TOTAL FUNDS ALLOCATED', 'TOTAL PROFIT FROM CLOSED TRADES'],
      lineColor: '#FFFFFFCC',
      labels: {
        style: {
          color: '#FFFFFFCC', // Set the color of the xAxis categories to blue
          fontFamily: 'Julius Sans One, sans-serif',
          fontSize: '0.85rem',
        },
      },
    },
    yAxis: {
      title: {
        enabled: false, // Hide the xAxis title
      },
      labels: {
        style: {
          color: '#FFFFFFCC', // Set the color of the yAxis labels to red
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.1rem',
        },
        format: '{value:,f}',
        //   formatter: function () {
        //     return this.value.toLocaleString(undefined, {
        //       minimumFractionDigits: 0,
        //     });
        //   },
      },
    },
    colors: ['#FFFFFFCC', '#FFFFFFCC'],
    tooltip: {
      pointFormat: false,
    },
    series: [
      {
        data: [70000, 11298],
        dataLabels: {
          enabled: true,
          // rotation: 0,
          color: '#1E343E',
          align: 'left',
          format: '{point.y:,f}', // one decimal
          y: 35, // 10 pixels down from the top
          style: {
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.2rem',
          },
        },
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
export default ColumnChart;
