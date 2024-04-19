import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
  it('should render a button when component loads', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render a disabled button when component loads', () => {
    render(<Button disabled={true} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
