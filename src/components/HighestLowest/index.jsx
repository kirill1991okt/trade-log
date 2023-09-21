import React from 'react';

import './highest-lowest.css';
const HighestLowest = () => {
  let arr = [
    { description: 'Number of closed trades in profit', value: '89.4%' },
    { description: 'Number of closed trades in loss', value: '3.4%' },
    { description: 'Highest winner', value: '27' },
    { description: 'Highest loser', value: '9' },
  ];

  return (
    <div className='wrapper'>
      {arr.map((item) => {
        return (
          <div key={item.description} className='main'>
            <p className='first'>{item.description}</p>
            <p className='second'>{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HighestLowest;
