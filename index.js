const core = require('./src/core');

core.getData('audi').then(res => {
  console.log(res);
  console.log(res.length);
});
