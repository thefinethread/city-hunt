import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner';

describe('Spinner component', () => {
  it('should render a heading when component loads', () => {
    render(<Spinner />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
