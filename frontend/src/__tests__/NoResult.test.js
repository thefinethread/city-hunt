import { fireEvent, render, screen } from '@testing-library/react';
import NoResult from '../components/NoResult';
import { BrowserRouter, useNavigate } from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('NoResult component', () => {
  it('should render a heading when component loads', () => {
    render(
      <BrowserRouter>
        <NoResult />
      </BrowserRouter>
    );

    expect(
      screen.getByText('Click on the Below button to start a new game')
    ).toBeInTheDocument();
  });

  it('should call navigate when click on button', () => {
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <BrowserRouter>
        <NoResult />
      </BrowserRouter>
    );

    const btn = screen.getByRole('button');

    fireEvent.click(btn);

    expect(mockNavigate).toHaveBeenCalled();
  });
});
