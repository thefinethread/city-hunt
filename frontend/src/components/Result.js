import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Result = () => {
  return (
    <div className='flex flex-col justify-between text-center items-center h-full py-10'>
      <h1 className='text-6xl font-bold text-center font-bungee'>CITY HUNT</h1>
      <p className='text-xl '>
        {' '}
        Congratulations! cop - 1 successfully captured the fugitive!
      </p>
      <div className='flex gap-3'>
        <Button text='Retry?' />
        <Button text='Start a New Game' />
      </div>
    </div>
  );
};
export default Result;
