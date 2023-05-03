import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../routes/Home';

describe('Home', () => {
  it('renders HomePage components', () => {
    const { container } = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
