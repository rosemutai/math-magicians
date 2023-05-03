import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../routes/Calculator';

describe('Calculator', () => {
  it('renders Calculator component correctly', () => {
    const { container } = render(
      <Router>
        <Calculator />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('Calculator buttons work', () => {
  it('should update display value when buttons are clicked', () => {
    const { getByText, getByTestId } = render(
      <Router>
        <Calculator />
      </Router>,
    );

    const displayValue = getByTestId('display-value');

    fireEvent.click(getByText('5'));
    expect(displayValue.textContent).toBe('5');

    fireEvent.click(getByText('-'));
    expect(displayValue.textContent).toBe('5');

    fireEvent.click(getByText('2'));
    expect(displayValue.textContent).toBe('2');

    fireEvent.click(getByText('='));
    expect(displayValue.textContent).toBe('3');
  });
});
