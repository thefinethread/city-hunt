const { SERVER_ERROR } = require('../constants/constants');
const cops = require('../data/cops.json');
const cities = require('../data/cities.json');
const vehicles = require('../data/vehicles.json');
const cityDistance = require('../data/cityDistance.json');
const vehiclesRange = require('../data/vehiclesRange.json');

let FUGITIVE_LOCATION = 'yapkashnagar';

const setFugitiveLocation = (req, res) => {
  const randomIndex = Math.floor(Math.random() * cities.length);
  FUGITIVE_LOCATION = cities[randomIndex].value;

  res.status(200).json({ success: 'OK' });
};

const getData = async (req, res) => {
  res.status(200).json({ cops, cities, vehicles });
};

const calculateResult = async (req, res) => {
  try {
    const copsPayload = req.body;

    const copsData = Object.values(copsPayload);

    const index = copsData.findIndex((data) => data.city === FUGITIVE_LOCATION);

    if (index === -1) {
      return res.status(200).json({ success: false });
    }
    const { vehicle, city } = copsData[index];

    if (hasEnoughRange(vehicle, city)) {
      const copName = Object.keys(copsPayload)[index];
      return res.status(200).json({ success: true, cop: copName });
    }

    return res.status(200).json({ success: false });
  } catch (error) {
    res.status(500).json({ error: SERVER_ERROR });
  }
};

const hasEnoughRange = (vehicle, city) => {
  return vehiclesRange[vehicle] >= 2 * cityDistance[city];
};

module.exports = {
  getData,
  calculateResult,
  setFugitiveLocation,
};
