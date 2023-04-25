import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ value }) => (
  <div className="btn-value">
    <p className={
      `${
        (value === '/' || value === 'X' || value === '-' || value === '+' || value === '=')
          ? 'bg-orange-300 py-3 px-6 text-black text-center font-regular' : 'bg-gray-100 py-3 px-6 text-black text-center font-regular'
      }`
    }
    >
      {value}
    </p>
  </div>
);

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

Button.defaultProps = {
  value: '',
};

export default Button;
