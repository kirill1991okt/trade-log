import React from 'react';

import './highest-lowest.scss';

const HighestLowest = () => {
  let arr = [
    { description: 'Number of closed trades in profit', value: '89.4%' },
    { description: 'Number of closed trades in loss', value: '3.4%' },
    { description: 'Highest winner', value: '27' },
    { description: 'Highest loser', value: '9' },
  ];

  return (
    <div className='wrapper'>
      {arr.map((item, i) => {
        return (
          <div
            key={item.description}
            className={`box ${i % 2 ? 'pink' : 'green'}`}
          >
            <p className='box__descr'>{item.description}</p>
            <p className='box__value'>{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HighestLowest;
