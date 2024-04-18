import { createContext, useState } from 'react';

const AppContext = createContext();

const initialState = {
  ['cop-1']: { city: '', vehicle: '' },
  ['cop-2']: { city: '', vehicle: '' },
  ['cop-3']: { city: '', vehicle: '' },
};

export const AppContextProvider = ({ children }) => {
  const [cops, setCops] = useState([]);
  const [cities, setCities] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);
  const [copsData, setCopsData] = useState(initialState);

  const [vehicles, setVehicles] = useState(null);
  const [availableVehicles, setAvailableVehicles] = useState(null);

  const initializeAppData = ({ cops, cities, vehicles }) => {
    setCops(cops);
    setCities(cities);
    setVehicles(vehicles);

    setAvailableCities(cities.map((city) => city.value));
    setAvailableVehicles(vehicles);
  };

  const updateAvailableVehicles = (currentVehicle, newVehicle) => {
    const obj = { ...availableVehicles };

    obj[newVehicle].quantity += -1;
    if (currentVehicle) obj[currentVehicle].quantity += 1;

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
        cops,
        copsData,
        cities,
        vehicles,
        availableCities,
        availableVehicles,
        setCops,
        initializeAppData,
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
