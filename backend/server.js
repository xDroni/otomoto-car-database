const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const carRoutes = express.Router();
const PORT = 4000;

const Car = require('./car.model');

app.use(cors());
app.use(bodyParser.json());
app.use('/cars', carRoutes);

carRoutes.route('/').get(paginatedResults(Car), (req, res) => {
  res.json(res.paginatedResults);
});

carRoutes.route('/:car').get(paginatedResults(Car), (req, res) => {
  res.json(res.paginatedResults);
});

mongoose.connect('mongodb://127.0.0.1:27017/cars', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
});

app.listen(PORT, function() {
  console.log('Server is running on Port: ' + PORT);
});

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    let query = {};
    if (req.params.car) {
      query = { car_name: req.params.car };
    }
    const count = await model
      .find(query)
      .countDocuments()
      .exec();

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    if (endIndex < count) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }

    try {
      results.results = await model
        .find(query)
        .limit(limit)
        .skip(startIndex)
        .exec();
      results.count = count;
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}
