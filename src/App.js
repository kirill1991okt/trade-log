import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './App.scss';
import ColumnChar from './components/ColumnChart';
import TotalTradesChar from './components/TotalTradesChart';
import CapitalChart from './components/CapitalChart';
import HighestLowest from './components/HighestLowest';
import PerformanceChart from './components/PerformanceChart';
import PerformanceChart_Test from './components/PerformanceChart_Test';
import DateBlock from './components/DateBlock';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='text-center'>Financial dashboard</h1>
      </header>

      <div className='grid grid-cols-3 grid-rows-2 gap-2'>
        <div>
          <ColumnChar highcharts={Highcharts} />
        </div>
        <div className='col-start-1 row-start-2'>
          <TotalTradesChar highcharts={Highcharts} />
        </div>
        <div className='col-start-2 row-start-1'>
          <CapitalChart highcharts={Highcharts} />
        </div>
        <div className='grid place-items-end col-start-2 row-start-2'>
          <HighestLowest />
        </div>
        <div className='col-start-3 row-start-1'>
          <PerformanceChart_Test highcharts={Highcharts} />
          {/* <PerformanceChart /> */}
        </div>
        <div className='grid place-items-end'>
          <DateBlock />
        </div>
      </div>

      {/* <div className='test'>
        <ColumnChar highcharts={Highcharts} />
        <TotalTradesChar highcharts={Highcharts} />
        <CapitalChart highcharts={Highcharts} />
        <HighestLowest />
        <PerformanceChart_Test highcharts={Highcharts} />
      </div> */}
    </div>
  );
}

export default App;
