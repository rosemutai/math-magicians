import { useState } from 'react';
import calculate from '../logic/calculate';

const greyButton = {
  style: 'bg-gray-100 py-3 px-6 text-black text-center font-regular',
};

const orangeButton = {
  style: 'bg-orange-400 py-3 px-6 text-black text-center font-regular',
};

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState({ total: null, next: null, operation: null });

  const handleOnClick = (e) => {
    const valueClicked = e.target.textContent;
    const res = calculate(displayValue, valueClicked);
    setDisplayValue(res);
  };
  return (
    <div className="calc flex justify-between">
      <h1 className="text-3xl font-bold my-16 pl-12">Lets do some math</h1>
      <div className="calc-homepage w-1/4 my-16 mx-auto bg-gray-200">
        <div className="display-area px-2 py-4 flex justify-end bg-gray-400/75 w-full">
          <h2 className="display-value font-semibold text-white" data-testid="display-value">
            {displayValue.next || displayValue.total || 0}
          </h2>
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-1">
          {/* row one */}
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>AC</button>
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>+/-</button>
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>%</button>
          <button type="button" className={`${orangeButton.style}`} onClick={handleOnClick}>÷</button>

          {/* row two */}
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>7</button>
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>8</button>
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>9</button>
          <button type="button" className={`${orangeButton.style}`} onClick={handleOnClick}>x</button>

          {/* row three */}
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>4</button>
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>5</button>
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>6</button>
          <button type="button" className={`${orangeButton.style}`} onClick={handleOnClick}>-</button>

          {/* row two */}
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>1</button>
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>2</button>
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>3</button>
          <button type="button" className={`${orangeButton.style}`} onClick={handleOnClick}>+</button>

          {/* row two */}
          <button type="button" className={`${greyButton.style} col-span-2`} onClick={handleOnClick}>0</button>
          <button type="button" className={`${greyButton.style}`} onClick={handleOnClick}>.</button>
          <button type="button" className={`${orangeButton.style}`} onClick={handleOnClick}>=</button>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
