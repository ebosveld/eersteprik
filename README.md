# Eerste prik
![Netlify](https://img.shields.io/netlify/9c69f98b-ec13-4cf3-ac6b-973c7eaa9f38) ![GitHub](https://img.shields.io/github/license/ebosveld/eersteprik) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![Node](https://img.shields.io/badge/node-%3E%3D10.12.0-brightgreen)


To combat the Coronavirus crisis, Dutch Minister of Health, Welfare and Sport, Hugo de Jonge promised to vaccinate every adult with at least one shot by July 1st. This website is tracking if we're on target to reach that goal.

## Hosting
Hosting is done by Netlify. With every pull request, a preview is made to see the end result. When a commit is made to the main branch, the site will be automatically deployed.

## Build Setup
The project uses Nuxt.js and Yarn. So make sure you've installed Yarn and Node, and then just install the dependencies and start the development server with the following commands.

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

## Data
Currently our data is being crawled from [Our World in Data](https://ourworldindata.org/covid-vaccinations), which in turn gets it from the RIVM. So in the future it might be wise crawl it directly from the RIVM site, as it's being updated every Tuesday at 4PM CET.

The data is stored in `/static/data` and a version of the data is stored in this repository for ease of starting development. With every build by Netlify the data is being pull from the sources using a build plugin.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits

## License
[MIT](LICENSE) Copyright (c) 2021 Edwin Bosveld
