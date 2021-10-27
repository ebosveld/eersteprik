
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');
const fs = require('fs');

require('moment/locale/nl');

module.exports = {
    onPreBuild: async () => {
        moment.locale('nl');

        const oldData = JSON.parse(fs.readFileSync('static/data/vaccinations.json'));

        const source = 'https://www.rivm.nl/covid-19-vaccinatie/cijfers-vaccinatieprogramma'
        const { data } = await axios.get(source);
        const $ = cheerio.load(data);

        const dateHeading = $('div.content-block-wrapper h2:last').text();
        const lastUpdated = moment(dateHeading.split('t/m')[1].trim(), 'DD MMMM YYYY').format('YYYY-MM-DD');
        const partiallyVaccinated = $('table tr:nth(20)').children('td:nth(4)').text().replace(/\./g, '');
        const fullyVaccinated = $('table tr:nth(20)').children('td:nth(5)').text().replace(/\./g, '');

        const coverageData = {
            partiallyVaccinated: partiallyVaccinated,
            fullyVaccinated: fullyVaccinated
        };

        console.log('--- Partially vaccinated ---');
        console.log('Previous number: ' + oldData.coverage.partiallyVaccinated);
        console.log('New number: ' + coverageData.partiallyVaccinated);
        console.log('Difference: ' + (coverageData.partiallyVaccinated - oldData.coverage.partiallyVaccinated));

        console.log('--- Fully vaccinated ---');
        console.log('Previous number: ' + oldData.coverage.fullyVaccinated);
        console.log('New number: ' + coverageData.fullyVaccinated);
        console.log('Difference: ' + (coverageData.fullyVaccinated - oldData.coverage.fullyVaccinated));

        const newData = {
            lastUpdate: lastUpdated,
            coverage: coverageData
        }

        await fs.writeFileSync('static/data/vaccinations.json', JSON.stringify(newData));
    },
}
