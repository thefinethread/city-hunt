import { render, screen } from '@testing-library/react';
import RadioInput from '../components/RadioInput';

describe('RadioInput component', () => {
  it('should render a radio testid tag when component loads', () => {
    render(<RadioInput />);

    expect(screen.getByTestId('radio')).toBeInTheDocument();
  });

  it('should render a disabled input', () => {
    render(<RadioInput disabled={true} />);

    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('should render a checked input', () => {
    render(<RadioInput checked={true} />);

    expect(screen.getByRole('radio')).toBeChecked();
  });
});
