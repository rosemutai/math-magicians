import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../routes/Quote';

describe('Quote', () => {
  it('renders Quote component correctly', () => {
    const { container } = render(
      <Router>
        <Quote />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
