const fetch = require('node-fetch');

const coreURL = 'https://www.otomoto.pl/';
const DEFAULTS = {
  type: 'osobowe'
};

function getData(car, params) {
  return fetch(`${coreURL}${DEFAULTS.type}/${car}/`)
    .then(res => res.text())
    .then(res => res)
    .catch(err => err);
}

module.exports = { getData };
