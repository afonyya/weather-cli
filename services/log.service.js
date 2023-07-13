import chalk from 'chalk';
import dedent from 'dedent-js';
import { getIcon } from './api.service.js';

const printError = (error) => {
  console.log(`${chalk.bgRed('ERROR')} ${error}`);
};

const printSuccess = (message) => {
  console.log(`${chalk.bgGreen('SUCCESS')} ${message}`);
};

const printHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan('HELP')}
    without args -- show weater
    -h           -- show help
    -s [CITY]    -- set city
    -t [API_KEY] -- set token
  `);
};

const printWeather = (data) => {
  const city = data.name;
  const icon = getIcon(data.weather[0].icon);
  const description = data.weather[0].description;
  const temperature = data.main.temp;
  const feelsLike = data.main.feels_like;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  console.log(dedent`
    ${chalk.bgYellow('WEATHER')}
    Weather in ${city}
    ${icon}  ${description}
    Temperature: ${temperature} (feels like ${feelsLike})
    Humidity: ${humidity}%
    Wind speed: ${windSpeed}
  `);
};

export { printError, printSuccess, printHelp, printWeather };
