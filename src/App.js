import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './App.css';
import ColumnChar from './components/ColumnChart';
import TotalTradesChar from './components/TotalTradesChart';
import CapitalChart from './components/CapitalChart';
import HighestLowest from './components/HighestLowest';
import PerformanceChart from './components/PerformanceChart';
import PerformanceChart_Test from './components/PerformanceChart_Test';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='text-center'>Financial dashboard</h1>
      </header>

      <div className='grid grid-cols-3 grid-rows-3 gap-2'>
        <div>
          <ColumnChar highcharts={Highcharts} />
        </div>
        <div className='col-start-1 row-start-3'>
          {' '}
          <TotalTradesChar highcharts={Highcharts} />
        </div>
        <div className='row-span-2 col-start-2 row-start-1'>
          <CapitalChart highcharts={Highcharts} />
        </div>
        <div className='col-start-2 row-start-3'>
          <HighestLowest />
        </div>
        <div className='col-start-3 row-start-1'>
          {' '}
          <PerformanceChart_Test highcharts={Highcharts} />
        </div>
        <div className='row-start-3'>6</div>
      </div>

      {/* <div className='grid grid-cols-4 grid-rows-5 gap-2'>
        <div className='row-span-2'>
          <ColumnChar highcharts={Highcharts} />
        </div>
        <div className='row-span-3 col-start-1 row-start-3'>
          <TotalTradesChar highcharts={Highcharts} />
        </div>
        <div className='col-span-2 row-span-4 col-start-2 row-start-1 row-end-4'>
          <CapitalChart highcharts={Highcharts} />
        </div>
        <div className='row-span-3 col-start-4 row-start-1'>
          <PerformanceChart_Test highcharts={Highcharts} />
        </div>
        <div className='col-span-2 col-start-2 row-start-5'>
          <HighestLowest />
        </div>
        <div className='row-span-2 col-start-4 row-start-4'>7</div>
      </div> */}

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
