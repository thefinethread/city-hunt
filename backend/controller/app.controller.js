const { SERVER_ERROR } = require('../constants/constants');
const cops = require('../data/cops.json');
const cities = require('../data/cities.json');
const vehicles = require('../data/vehicles.json');

const getData = async (req, res) => {
  try {
    res.status(201).json({ cops, cities, vehicles });
  } catch (error) {
    res.status(500).json({ error: SERVER_ERROR });
  }
};

const calculateResult = async (req, res) => {
  try {
    const copsData = req.body;
    res.status(201).json({ cops, cities, vehicles });
  } catch (error) {
    res.status(500).json({ error: SERVER_ERROR });
  }
};

module.exports = { getData, calculateResult };
