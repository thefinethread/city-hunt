import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
  it('should render a button when component loads', () => {
    render(<Card />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render a completed button when component loads', () => {
    render(<Card completed={true} />);

    expect(screen.getByRole('button')).toHaveClass(
      'border-green-500 border-[3px]'
    );
  });
});
