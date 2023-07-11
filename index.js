#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { setKeyValue } from './services/storage.service.js';

const setToken = async (token) => {
  try {
    await setKeyValue('token', token);
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
};

initCLI();
