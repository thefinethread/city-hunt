import React, { useContext } from 'react';
import yapkashnagar from '../assets/images/cities/yapkashnagar.png';
import lihaspur from '../assets/images/cities/lihaspur.png';
import narmisCity from '../assets/images/cities/narmis-city.png';
import shekharvati from '../assets/images/cities/shekharvati.png';
import nuravgram from '../assets/images/cities/nuravgram.png';
import Button from './Button';
import RadioInput from './RadioInput';
import { useNavigate, useParams } from 'react-router-dom';
import { formatLabelText } from '../utils/utils';
import AppContext from '../context/AppContext';

const imgs = [yapkashnagar, lihaspur, narmisCity, shekharvati, nuravgram];

const City = () => {
  const { copId } = useParams();

  const {
    cities,
    copsData,
    setCopsData,
    availableCities,
    updateAvailableCities,
  } = useContext(AppContext);

  const city = copsData[copId]?.city;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const cityName = e.target.value;

    setCopsData((prev) => ({
      ...prev,
      [copId]: {
        ...prev[copId],
        city: cityName,
      },
    }));

    updateAvailableCities(city, cityName);
  };

  const handleNext = () => navigate(`/${copId}/select-vehicle`);

  const isChecked = (value) => city === value;

  return (
    <div className='flex bg-[#171717]  flex-col justify-between items-center gap-4 h-full py-4'>
      <h1 className='text-6xl font-bold text-center font-bungee'>
        SELECT CITY FOR {formatLabelText(copId).toUpperCase()}
      </h1>

      {/* Content for selecting cities */}
      <div className='flex flex-wrap gap-8 w-full items-center justify-center'>
        {cities?.map((city, i) => (
          <RadioInput
            key={city}
            disabled={!availableCities.includes(city)}
            img={imgs[i]}
            label={city}
            value={city}
            onChange={handleChange}
            checked={isChecked(city)}
          />
        ))}
      </div>

      <div className='flex gap-3'>
        <Button text='Back' onClick={() => navigate(-1)} />
        <Button text='Next' disabled={!city} onClick={handleNext} />
      </div>
    </div>
  );
};

export default City;
