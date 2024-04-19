import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LandingPage from '../components/LandingPage';
import AppContext from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import fetchData from '../utils/fetchData';
import setFugitiveLocation from '../utils/setFugitiveLocation';

jest.mock('../utils/fetchData');
jest.mock('../utils/setFugitiveLocation');

describe('LandingPage component', () => {
  it('should be successful when api response is success after clicking button', async () => {
    render(
      <AppContext.Provider
        value={{ initializeAppData: jest.fn(), resetStates: jest.fn() }}
      >
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </AppContext.Provider>
    );

    fetchData.mockReturnValue({ success: true, data: { cops: ['cop-1'] } });

    const startBtn = screen.getByRole('button');

    fireEvent.click(startBtn);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalled();
      expect(setFugitiveLocation).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });
  });

  it('should go in else block when api response is failure', async () => {
    render(
      <AppContext.Provider
        value={{ initializeAppData: jest.fn(), resetStates: jest.fn() }}
      >
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </AppContext.Provider>
    );

    fetchData.mockReturnValue({ success: false, data: {} });

    const startBtn = screen.getByRole('button');

    fireEvent.click(startBtn);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalled();
      expect(setFugitiveLocation).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });
  });
});
