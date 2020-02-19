const core = require('./src/core');
const fs = require('fs');

const mongoose = require('mongoose');
const Car = require('./car.model');

const carsNames = fs
  .readFileSync(__dirname + '\\carList.txt')
  .toString()
  .split('\r\n');

async function run() {
  mongoose.connect('mongodb://127.0.0.1:27017/cars', { useNewUrlParser: true });
  const connection = mongoose.connection;

  connection.once('open', function() {
    console.log('MongoDB database connection established successfully');

    for (const car of carsNames) {
      core.getData(car).then(cars => {
        for (const car of cars) {
          Car.update({ car_id: car.car_id }, car, { upsert: true }, err => {
            if (err) console.error(err);
          });
        }
      });
    }
  });
}

module.exports = { run };
