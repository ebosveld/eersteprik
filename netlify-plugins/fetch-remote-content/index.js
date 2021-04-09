
const axios  = require('axios');
const parse  = require('csv-parse/lib/sync')
const fs      = require('fs');

module.exports = {
    onPreBuild: async () => {
        let fileUrl = 'https://raw.githubusercontent.com/owid/covid-19-data/master/scripts/scripts/vaccinations/automations/output/Netherlands.csv'

        const parserOpts = { columns: true, skip_empty_lines: true};
        const data = await axios.get(fileUrl).then(response => { return response.data; })
        const parsedRecords = await parse(data, parserOpts);
        const [lastItem] = parsedRecords.slice(-1);
        await fs.writeFileSync('static/data/vaccinations.json', JSON.stringify(lastItem));
    },
}