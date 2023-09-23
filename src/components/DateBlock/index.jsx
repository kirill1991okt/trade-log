import React from 'react';

import './date-block.scss';

const DateBlock = () => {
  return (
    <div className='box'>
      <div className='box__days'>
        <p className='box__descr'>Calendar days in the market</p>
        <p className='box__value'>157</p>
      </div>
      <div className='box__date'>
        <p className='box__descr'>Start date</p>
        <p className='box__value'>10/27/22</p>
      </div>
    </div>
  );
};

export default DateBlock;
