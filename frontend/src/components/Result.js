import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import fetchResult from '../utils/fetchResult';
import { FAILURE_MSG } from '../utils/constants';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const successCls = 'text-green-500 border-green-500';
const failureCls = 'text-red-500 border-red-500';

const Result = () => {
  const [cop, setCop] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const { cops, copsData } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getResult = async () => {
      const result = await fetchResult(copsData);
      setSuccess(result.success);
      result.success && setCop(result.cop);
      setLoading(false);
    };

    cops?.length === 0 ? navigate('/') : getResult();
  }, []);

  return (
    <div className='flex flex-col justify-between text-center items-center h-full py-10'>
      <h1 className='text-6xl font-bold text-center font-bungee'>CITY HUNT</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div
            className={`text-xl max-w-md p-8 rounded-xl border-2 border-solid ${
              success ? successCls : failureCls
            }`}
          >
            {success
              ? `Congratulations!, ${cop.toUpperCase()} successfully captured the fugitive!`
              : FAILURE_MSG}
          </div>

          <div className='flex gap-3'>
            {!success && (
              <Button text='Retry?' onClick={() => navigate('/play')} />
            )}
            <Button text='Start a New Game' onClick={() => navigate('/')} />
          </div>
        </>
      )}
    </div>
  );
};
export default Result;
