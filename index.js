#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import {
  printHelp,
  printSuccess,
  printError,
  printWeather,
} from './services/log.service.js';
import {
  getKeyValue,
  setKeyValue,
  STORAGE_DICTIONARY,
} from './services/storage.service.js';

const setToken = async (token) => {
  if (!token.length) {
    printError('Token not passed');
    return;
  }
  try {
    await setKeyValue(STORAGE_DICTIONARY.token, token);
    printSuccess('Token saved');
  } catch (error) {
    printError(error.message);
  }
};

const setCity = async (city) => {
  if (!city.length) {
    printError('City not passed');
    return;
  }
  try {
    await setKeyValue(STORAGE_DICTIONARY.city, city);
    printSuccess('City saved');
  } catch (error) {
    printError(error.message);
  }
};

const getForecast = async () => {
  try {
    const city =
      process.env.CITY ?? (await getKeyValue(STORAGE_DICTIONARY.city));
    const weather = await getWeather(city);
    printWeather(weather);
  } catch (error) {
    if (error?.response?.status === 404) {
      printError('City is incorrect');
    } else if (error?.response?.status === 401) {
      printError('Token is incorrect');
    } else {
      printError(error.message);
    }
  }
};

const init = async () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.c) {
    return await setCity(args.c);
  }
  if (args.t) {
    return await setToken(args.t);
  }
  return getForecast();
};

init();
