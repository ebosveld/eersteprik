
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');
const fs = require('fs');

require('moment/locale/nl');

module.exports = {
    onPreBuild: async () => {
        moment.locale('nl');

        const source = 'https://www.rivm.nl/covid-19-vaccinatie/cijfers-vaccinatieprogramma'
        const { data } = await axios.get(source);
        const $ = cheerio.load(data);

        const dateHeading = $('div.content-block-wrapper h2:last').text();
        const lastUpdated = moment(dateHeading.split('t/m')[1].trim(), 'DD MMMM YYYY').format('YYYY-MM-DD');
        const firstVaccinations = $('table tr:last').children('td:nth(3)').text().replace(/\./g, '');

        const newData = {
            lastUpdate: lastUpdated,
            firstVaccinations: firstVaccinations
        }

        await fs.writeFileSync('static/data/vaccinations.json', JSON.stringify(newData));
    },
}
