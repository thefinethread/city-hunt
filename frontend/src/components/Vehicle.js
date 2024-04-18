import { useContext, useEffect } from 'react';
import Button from './Button';
import RadioInput from './RadioInput';
import { useNavigate, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Heading from './Heading';
import NoResult from './NoResult';

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

  const isDisabled = (vehicle) => availableVehicles[vehicle]?.quantity === 0;

  useEffect(() => {
    if (!vehicles) navigate('/');
  }, []);

  return (
    <div className='flex bg-[#171717]  flex-col justify-between items-center gap-4 h-full py-4'>
      <Heading text={`SELECT VEHICLE FOR ${copId.toUpperCase()}`} />

      {/* Content for selecting cities */}
      <div className='flex flex-wrap gap-8 w-full items-center justify-center'>
        {vehicles ? (
          Object.values(vehicles)?.map(({ label, value, imgUrl }) => (
            <RadioInput
              key={value}
              img={imgUrl}
              label={label}
              value={value}
              onChange={handleChange}
              checked={isChecked(value)}
              disabled={isDisabled(value)}
            />
          ))
        ) : (
          <NoResult />
        )}
      </div>
      <div className='flex gap-3'>
        <Button text='Back' onClick={() => navigate(-1)} />
        <Button text='Home' disabled={!vehicle} onClick={handleGoToHome} />
      </div>
    </div>
  );
};

export default Vehicle;
