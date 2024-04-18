import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useContext, useState } from 'react';
import fetchData from '../utils/fetchData';
import AppContext from '../context/AppContext';

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  const { initializeAppData } = useContext(AppContext);

  const navigate = useNavigate();

  const handleStartGame = async () => {
    setLoading(true);

    const { success, data } = await fetchData();

    if (success) {
      initializeAppData({ ...data });
      setLoading(false);
      navigate('/play');
    } else {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-between text-center items-center h-full py-10'>
      <h1 className='text-6xl font-bold text-center font-bungee'>CITY HUNT</h1>
      <p className='text-xl text-zinc-400'>
        Join three fearless cops on a mission to track down a notorious criminal
        escape artist hiding in one of five neighboring cities.
      </p>

      <Button
        text={loading ? 'Loading...' : 'START'}
        onClick={handleStartGame}
      />
    </div>
  );
};

export default LandingPage;
