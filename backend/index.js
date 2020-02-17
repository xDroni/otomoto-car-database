const core = require('./src/core');
const fs = require('fs');

const mongoose = require('mongoose');
const Car = require('./car.model');

const carsNames = fs
  .readFileSync(__dirname + '\\carList.txt')
  .toString()
  .split('\r\n');

mongoose.connect('mongodb://127.0.0.1:27017/cars', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
  run();
});

let counter = 0;

async function run() {
  for (const car of carsNames) {
    core.getData(car).then(cars => {
      counter += cars.length;
      for (const car of cars) {
        Car.update({ car_id: car.car_id }, car, { upsert: true }, (err, res) => {
          if (err) console.error(err);
        });
      }
    });
  }
  console.log(counter);
}
