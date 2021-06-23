
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');

require('moment/locale/nl');

module.exports = {
    onPreBuild: async () => {
        moment.locale('nl');

        const source = 'https://coronadashboard.rijksoverheid.nl/json/NL.json';
        const { data } = await axios.get(source);

        const vaccineCoverage = data.vaccine_coverage.last_value;

        const coverageData = {
            lastUpdate: moment.unix(vaccineCoverage.date_end_unix).format('YYYY-MM-DD'),
            partiallyVaccinated: vaccineCoverage.partially_or_fully_vaccinated,
            fullyVaccinated: vaccineCoverage.fully_vaccinated
        };

        const administered = data.vaccine_administered_estimate.last_value;
        const vaccineAdministratedData = {
            lastUpdate: moment.unix(administered.date_end_unix).format('YYYY-MM-DD'),
            pfizer: administered.pfizer,
            moderna: administered.moderna,
            janssen: administered.janssen,
            astrazeneca: administered.astra_zeneca,
            total: administered.total
        }

        const newData = {
            lastUpdate: moment().format('YYYY-MM-DD'),
            coverage: coverageData,
            administered: vaccineAdministratedData
        }

        await fs.writeFileSync('static/data/vaccinations.json', JSON.stringify(newData));
    },
}
