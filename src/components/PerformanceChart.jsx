import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PerformanceChart = () => {
  useEffect(() => {
    const chart1 = Highcharts.chart('chart1', {
      chart: {
        type: 'pie',
        spacing: [50, 200, 20, 200],
      },
      title: {
        text: 'Chart 1 Title',
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
          center: ['25%', '50%'],
          size: '50%',
        },
      ],
    });

    const chart2 = Highcharts.chart('chart2', {
      chart: {
        type: 'pie',
        spacing: [0, 0, 0, 0],
      },
      title: {
        text: 'Chart 2 Title',
      },
      plotOptions: {
        pie: {
          innerSize: '50%',
        },
      },
      series: [
        {
          name: 'Data 2',
          data: [['Category A', 40]],
          center: ['70%', '0%'],
          size: '50%',
        },
      ],
    });

    return () => {
      chart1.destroy();
      chart2.destroy();
    };
  }, []);

  return (
    <div>
      <div id='chart1'></div>
      <div id='chart2'></div>
    </div>
  );
};

export default PerformanceChart;
