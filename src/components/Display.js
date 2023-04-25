import React from 'react';
import { PropTypes } from 'prop-types';

const Display = ({ result }) => (
  <div className="display-area px-2 py-4 flex justify-end bg-gray-400/75 w-full">
    <h2 className="display-value font-semibold text-white">
      { result }
    </h2>
  </div>
);

Display.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Display.defaultProps = {
  result: 0,
};

export default Display;
