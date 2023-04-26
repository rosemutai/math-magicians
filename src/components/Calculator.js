import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import Button from './Button';

const btnValues = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState({ total: null, next: null, operation: null });

  const handleOnClick = (e) => {
    const valueClicked = e.target.textContent;
    const res = calculate(displayValue, valueClicked);
    setDisplayValue(res);
  };
  return (
    <div className="calc-homepage w-1/4 my-16 mx-auto bg-gray-200">
      <Display
        result={displayValue.next || displayValue.total || 0}
      />
      <div className="grid grid-cols-4 grid-rows-5 gap-1">
        {btnValues.flat().map((item, index) => (
          <div key={item} className={`${index === 16 && 'text-center col-span-2 bg-gray-100'}`}>
            <Button value={item} handleOnClick={handleOnClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
