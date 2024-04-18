import { useNavigate } from 'react-router-dom';
import Button from './Button';

const NoResult = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-4 text-center'>
      <p className='text-zinc-400'>
        Click on the Below button to start a new game
      </p>
      <Button text='GO TO HOME' onClick={() => navigate('/')}></Button>
    </div>
  );
};

export default NoResult;
