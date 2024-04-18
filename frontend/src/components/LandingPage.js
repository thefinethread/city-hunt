import { Link } from 'react-router-dom';
import Button from './Button';

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-between text-center items-center h-full py-10'>
      <h1 className='text-6xl font-bold text-center font-bungee'>CITY HUNT</h1>
      <p className='text-xl '>
        Join three fearless cops on a mission to track down a notorious criminal
        escape artist hiding in one of five neighboring cities.
      </p>
      <Link to='/play'>
        <Button text='START' />
      </Link>
    </div>
  );
};

export default LandingPage;
