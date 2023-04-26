import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ value, handleOnClick }) => (
  <div className="btn-value">
    <button
      type="button"
      className={
        `${
          (value === '÷' || value === 'x' || value === '-' || value === '+' || value === '=')
            ? 'bg-orange-300 py-3 px-6 text-black text-center font-regular w-20' : 'bg-gray-100 w-20 py-3 px-6 text-black text-center font-regular'
        }`
      }
      onClick={
        handleOnClick
      }
    >
      {value}
    </button>
  </div>
);

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  handleOnClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  value: '',
};

export default Button;
