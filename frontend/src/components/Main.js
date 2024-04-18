import { useContext, useState } from 'react';
import cop1Image from '../assets/images/cops/cop1.png';
import cop2Image from '../assets/images/cops/cop2.png';
import cop3Image from '../assets/images/cops/cop3.png';
import Card from './Card';
import AppContext from '../context/AppContext';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const { copsData } = useContext(AppContext);

  const navigate = useNavigate();

  const selectionCompleted = Object.values(copsData).map(({ city, vehicle }) =>
    !city || !vehicle ? false : true
  );

  const isBtnEnabled = () => selectionCompleted.every((item) => item === true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/result');
  };

  return (
    <div className='flex bg-[#171717]  flex-col justify-between items-center h-full py-4'>
      <h1 className='text-6xl font-bold text-center font-bungee'>
        SELECT COPS
      </h1>
      <p className='text-lg mb-6'>
        Choose three fearless cops to embark on the pursuit.
      </p>

      {/* Content for selecting cops */}
      <div className='flex flex-wrap gap-8 w-full items-center justify-center'>
        <Card img={cop1Image} label='cop1' completed={selectionCompleted[0]} />
        <Card img={cop2Image} label='cop2' completed={selectionCompleted[1]} />
        <Card img={cop3Image} label='cop3' completed={selectionCompleted[2]} />
      </div>

      {/* Modal or pop-up for selecting city and vehicle */}

      {/* Description: After selecting a cop, a pop-up will appear for you to choose the city and vehicle. Click 'Save' to proceed. Repeat this process for all three cops before submitting. */}

      <Button onClick={handleSubmit} text='SUBMIT' disabled={!isBtnEnabled()} />
    </div>
  );
};

export default Main;
