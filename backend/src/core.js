const fetch = require('node-fetch');
const cheerio = require('cheerio');

const coreURL = 'https://www.otomoto.pl/';
const DEFAULTS = {
  type: 'osobowe'
};

async function getData(car) {
  const data = await fetch(`${coreURL}${DEFAULTS.type}/${car}/`)
    .then(res => res.text())
    .then(res => res)
    .catch(err => err);

  const $ = cheerio.load(data);

  const carEntries = $('article');

  return carEntries
    .map((i, e) => {
      let image;
      try {
        image =
          $(e)
            .find('img')
            .attr('data-src')
            .trim()
            .replace(/s=([0-9]*x[0-9]*;)/, '') || null;
      } catch (e) {
        image = null;
      }

      return {
        car_id: $(e)
          .find('a[class="offer-title__link"]')
          .attr('data-ad-id')
          .trim(),
        car_model:
          $(e)
            .find('a[class="offer-title__link"]')
            .attr('title')
            .trim() || null,
        car_description:
          $(e)
            .find('h3')
            .text()
            .trim() || null,
        car_productionYear:
          $(e)
            .find('li[data-code="year"]')
            .text()
            .trim() || null,
        car_mileage:
          $(e)
            .find('li[data-code="mileage"]')
            .text()
            .trim() || null,
        car_engineCapacity:
          $(e)
            .find('li[data-code="engine_capacity"]')
            .text()
            .trim() || null,
        car_fuelType:
          $(e)
            .find('li[data-code="fuel_type"]')
            .text()
            .trim() || null,
        car_city:
          $(e)
            .find('span[class="ds-location-city"]')
            .text()
            .trim() || null,
        car_region:
          $(e)
            .find('span[class="ds-location-region"]')
            .text()
            .trim()
            .replace(/[()]/g, '') || null,
        car_fullPage:
          $(e)
            .find('a[class="offer-title__link"]')
            .attr('href')
            .trim()
            .replace(/#[A-Za-z0-9]*/g, '') || null,
        car_image: image
      };
    })
    .get();
}

module.exports = { getData };
