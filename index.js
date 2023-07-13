#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { setKeyValue, STORAGE_DICTIONARY } from './services/storage.service.js';

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

const initCLI = async () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    return await setToken(args.t);
  }
  await getWeather('warsaw');
};

initCLI();
