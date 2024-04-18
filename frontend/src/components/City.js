import { useContext } from 'react';
import Button from './Button';
import RadioInput from './RadioInput';
import { useNavigate, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Heading from './Heading';
import NoResult from './NoResult';

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

  const isDisabled = (value) => !availableCities.includes(value);

  const isChecked = (value) => city === value;

  return (
    <div className='flex bg-[#171717]  flex-col justify-between items-center gap-4 h-full py-4 mb-3'>
      <Heading text={` SELECT CITY FOR ${copId.toUpperCase()}`} />

      <div className='flex flex-wrap gap-8 w-full items-center justify-center'>
        {cities?.length ? (
          cities?.map(({ value, label, imgUrl }) => (
            <RadioInput
              key={value}
              disabled={isDisabled(value)}
              img={imgUrl}
              label={label}
              value={value}
              onChange={handleChange}
              checked={isChecked(value)}
            />
          ))
        ) : (
          <NoResult />
        )}
      </div>

      <div className='flex gap-3'>
        <Button text='Back' onClick={() => navigate(-1)} />
        <Button text='Next' disabled={!city} onClick={handleNext} />
      </div>
    </div>
  );
};

export default City;
