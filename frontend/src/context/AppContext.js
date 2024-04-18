import { createContext, useState } from 'react';

const AppContext = createContext();

const initialState = {
  cop1: { city: '', vehicle: '' },
  cop2: { city: '', vehicle: '' },
  cop3: { city: '', vehicle: '' },
};

const c = [
  'Yapkashnagar',
  'Lihaspur',
  'Narmis City',
  'Shekharvati',
  'Nuravgram',
];

export const AppContextProvider = ({ children }) => {
  const [copsData, setCopsData] = useState(initialState);
  const [cities, setCities] = useState([
    'Yapkashnagar',
    'Lihaspur',
    'Narmis City',
    'Shekharvati',
    'Nuravgram',
  ]);

  const [availableCities, setAvailableCities] = useState([
    'Yapkashnagar',
    'Lihaspur',
    'Narmis City',
    'Shekharvati',
    'Nuravgram',
  ]);

  const [vehicles, setVehicles] = useState({
    evBike: 2,
    evCar: 1,
    evSuv: 1,
  });
  const [availableVehicles, setAvailableVehicles] = useState({
    evBike: 2,
    evCar: 1,
    evSuv: 1,
  });

  const updateAvailableVehicles = (currentVehicle, newVehicle) => {
    const obj = { ...availableVehicles };

    obj[newVehicle] += -1;
    if (currentVehicle) obj[currentVehicle] += 1;

    setAvailableVehicles(obj);
  };

  const updateAvailableCities = (currentCity, newCity) => {
    const index = availableCities.findIndex((item) => item === newCity);

    if (index !== -1) {
      const arr = [...availableCities];

      currentCity ? arr.splice(index, 1, currentCity) : arr.splice(index, 1);

      setAvailableCities(arr);
    }
  };

  return (
    <AppContext.Provider
      value={{
        copsData,
        cities,
        vehicles,
        availableCities,
        availableVehicles,
        setCopsData,
        updateAvailableCities,
        updateAvailableVehicles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
