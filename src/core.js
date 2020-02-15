const fetch = require('node-fetch');
const fs = require('fs');
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

  const result = carEntries
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
        id: $(e)
          .find('a[class="offer-title__link"]')
          .attr('data-ad-id')
          .trim(),
        carModel:
          $(e)
            .find('a[class="offer-title__link"]')
            .attr('title')
            .trim() || null,
        description:
          $(e)
            .find('h3')
            .text()
            .trim() || null,
        productionYear:
          $(e)
            .find('li[data-code="year"]')
            .text()
            .trim() || null,
        mileage:
          $(e)
            .find('li[data-code="mileage"]')
            .text()
            .trim() || null,
        engineCapacity:
          $(e)
            .find('li[data-code="engine_capacity"]')
            .text()
            .trim() || null,
        fuelType:
          $(e)
            .find('li[data-code="fuel_type"]')
            .text()
            .trim() || null,
        city:
          $(e)
            .find('span[class="ds-location-city"]')
            .text()
            .trim() || null,
        region:
          $(e)
            .find('span[class="ds-location-region"]')
            .text()
            .trim()
            .replace(/[()]/g, '') || null,
        fullPage:
          $(e)
            .find('a[class="offer-title__link"]')
            .attr('href')
            .trim()
            .replace(/#[A-Za-z0-9]*/g, '') || null,
        image
      };
    })
    .get();

  fs.writeFileSync('output.json', JSON.stringify(result, null, 2));
  return result;
}

module.exports = { getData };
