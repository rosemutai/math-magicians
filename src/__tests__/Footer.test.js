import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders Footer component correctly', () => {
    const { container } = render(
      <Footer />,
    );
    expect(container).toMatchSnapshot();
  });
});
