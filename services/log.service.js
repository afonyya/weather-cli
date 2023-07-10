import chalk from 'chalk';
import dedent from 'dedent-js';

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

export { printError, printSuccess, printHelp };
