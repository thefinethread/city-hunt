import React, { useContext } from 'react';
import evBike from '../assets/images/vehicles/ev-bike.png';
import evCar from '../assets/images/vehicles/ev-car.png';
import evSuv from '../assets/images/vehicles/ev-suv.png';
import Button from './Button';
import RadioInput from './RadioInput';
import { useNavigate, useParams } from 'react-router-dom';
import { formatLabelText } from '../utils/utils';
import AppContext from '../context/AppContext';

const imgs = [evBike, evCar, evSuv];

const Vehicle = () => {
  const { copId } = useParams();

  const {
    copsData,
    vehicles,
    setCopsData,
    availableVehicles,
    updateAvailableVehicles,
  } = useContext(AppContext);

  const vehicle = copsData[copId]?.vehicle;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newVehicle = e.target.value;

    setCopsData((prev) => ({
      ...prev,
      [copId]: {
        ...prev[copId],
        vehicle: newVehicle,
      },
    }));

    updateAvailableVehicles(vehicle, newVehicle);
  };
  const handleGoToHome = () => navigate(`/play`);

  const isChecked = (value) => vehicle === value;

  const isDisabled = (vehicle) => {
    return availableVehicles[vehicle] === 0;
  };

  console.log(availableVehicles);

  return (
    <div className='flex bg-[#171717]  flex-col justify-between items-center gap-4 h-full py-4'>
      <h1 className='text-6xl font-bold text-center font-bungee'>
        SELECT VEHICLE FOR {formatLabelText(copId).toUpperCase()}
      </h1>

      {/* Content for selecting cities */}
      <div className='flex flex-wrap gap-8 w-full items-center justify-center'>
        {Object.keys(vehicles)?.map((vehicle, i) => (
          <RadioInput
            key={vehicle}
            img={imgs[i]}
            label={vehicle}
            value={vehicle}
            onChange={handleChange}
            checked={isChecked(vehicle)}
            disabled={isDisabled(vehicle)}
          />
        ))}
        {/* <RadioInput
          img={evBike}
          label='EV Bike'
          value='evBike'
          onChange={handleChange}
          checked={isChecked('evBike')}
        />
        <RadioInput
          img={evCar}
          label='EV Car'
          value='evCar'
          onChange={handleChange}
          checked={isChecked('evCar')}
        />
        <RadioInput
          img={evSuv}
          label='EV SUV'
          value='evSuv'
          onChange={handleChange}
          checked={isChecked('evSuv')}
        /> */}
      </div>
      <div className='flex gap-3'>
        <Button text='Back' onClick={() => navigate(-1)} />
        <Button text='Home' disabled={!vehicle} onClick={handleGoToHome} />
      </div>
    </div>
  );
};

export default Vehicle;
