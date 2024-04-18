import { useContext } from 'react';
import Card from './Card';
import AppContext from '../context/AppContext';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Heading from './Heading';
import NoResult from './NoResult';

const Main = () => {
  const { copsData, cops } = useContext(AppContext);

  const navigate = useNavigate();

  const selectionCompleted = Object.values(copsData).map(({ city, vehicle }) =>
    !city || !vehicle ? false : true
  );

  const isBtnEnabled = () => selectionCompleted.every((item) => item === true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/result');
  };

  const handleSelectCop = (label) =>
    navigate(`/${label.toLowerCase()}/select-city`);

  console.log(copsData);

  return (
    <div className='flex bg-[#171717] gap-6 text-center flex-col justify-between items-center h-full py-4'>
      <Heading text='SELECT COPS' />
      <p className='text-lg mb-6 text-zinc-400'>
        Choose three fearless cops to embark on the pursuit.
      </p>

      <div className='flex flex-wrap gap-8 w-full items-center justify-center'>
        {cops?.length ? (
          cops.map(({ label, value, imgUrl }, index) => (
            <Card
              onClick={() => handleSelectCop(label)}
              key={value}
              img={imgUrl}
              label={label}
              value={value}
              completed={selectionCompleted[index]}
            />
          ))
        ) : (
          <NoResult />
        )}
      </div>

      <Button onClick={handleSubmit} text='SUBMIT' disabled={!isBtnEnabled()} />
    </div>
  );
};

export default Main;
