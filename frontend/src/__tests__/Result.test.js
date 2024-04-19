import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Result from '../components/Result';
import AppContext from '../context/AppContext';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import fetchResult from '../utils/fetchResult';
import { FAILURE_MSG } from '../utils/constants';

const mockNavigate = jest.fn();

jest.mock('../utils/fetchResult');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Result component', () => {
  it('should render a success messages when api response is success', async () => {
    fetchResult.mockReturnValue({ success: true, cop: 'cop-1' });
    useNavigate.mockReturnValue(mockNavigate);

    await act(async () =>
      render(
        <AppContext.Provider value={{ cops: ['john'], copsData: {} }}>
          <BrowserRouter>
            <Result />
          </BrowserRouter>
        </AppContext.Provider>
      )
    );

    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
    );

    expect(screen.getByText(/Congratulations/i)).toBeInTheDocument();

    const newGameBtn = screen.getByRole('button', { name: 'Start a New Game' });

    fireEvent.click(newGameBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('should render a failure messages when api response is failure', async () => {
    fetchResult.mockReturnValue({ success: false });
    useNavigate.mockReturnValue(mockNavigate);

    await act(async () =>
      render(
        <AppContext.Provider value={{ cops: ['john'], copsData: {} }}>
          <BrowserRouter>
            <Result />
          </BrowserRouter>
        </AppContext.Provider>
      )
    );

    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
    );

    expect(screen.getByText(FAILURE_MSG)).toBeInTheDocument();

    const retryBtn = screen.getByRole('button', { name: 'Retry?' });

    fireEvent.click(retryBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/play');
  });

  it('should navigate to / when cops length is 0', async () => {
    useNavigate.mockReturnValue(mockNavigate);

    await act(async () =>
      render(
        <AppContext.Provider value={{ cops: [], copsData: {} }}>
          <BrowserRouter>
            <Result />
          </BrowserRouter>
        </AppContext.Provider>
      )
    );

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
