import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../App';
// import Navbar from './components/Navbar';

describe('App', () => {
  it('renders App component', () => {
    render(
      <Router>
        <App />
      </Router>,
    );
  });
});
