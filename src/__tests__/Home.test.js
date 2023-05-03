import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../routes/Home';

describe('Home', () => {
  it('renders HomePage correctly', () => {
    const { container } = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
