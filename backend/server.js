const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const carRoutes = express.Router();
const PORT = 4000;

const Car = require('./car.model');
const core = require('./src/core');

app.use(cors());
app.use(bodyParser.json());
app.use('/cars', carRoutes);

carRoutes.route('/').get((req, res) => {
  Car.find((err, cars) => {
    if (err) {
      console.error(err);
    } else {
      res.json(cars);
    }
  });
});

carRoutes.route('/add').post(async function(req, res) {
  const carModel = req.body.car_model;
  const cars = await core.getData(carModel);

  try {
    for (const car of cars) {
      Car.update({ car_id: car.car_id }, car, { upsert: true });
    }
    return res.status(200).send('Succesfully saved.');
  } catch (e) {
    return res.status(500).send({ error: e });
  }
});

mongoose.connect('mongodb://127.0.0.1:27017/cars', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
});

app.listen(PORT, function() {
  console.log('Server is running on Port: ' + PORT);
});
