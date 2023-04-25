import React from 'react';
import Display from './Display';
import Button from './Button';

const btnValues = [
  ['AC', '+/-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const Calculator = () => (
  <div className="calc-homepage w-1/4 my-16 mx-auto bg-gray-200">
    <Display />
    <div className="grid grid-cols-4 grid-rows-5 gap-1">
      {btnValues.flat().map((item, index) => (
        <div key={item} className={`${index === 16 ? 'col-span-2' : 'col-span-1'}`}>
          <Button value={item} />
        </div>
      ))}
    </div>
  </div>
);

export default Calculator;
