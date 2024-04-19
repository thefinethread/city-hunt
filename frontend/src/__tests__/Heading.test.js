import { render, screen } from '@testing-library/react';
import Heading from '../components/Heading';

describe('Heading component', () => {
  it('should render a heading when component loads', () => {
    render(<Heading />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
