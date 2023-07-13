import { join } from 'path';
import { promises } from 'fs';

const filePath = join('./', 'storage.json');

const getFile = async () => {
  try {
    await promises.stat(filePath);
    const file = await promises.readFile(filePath);
    return file;
  } catch {
    return null;
  }
};

const getKeyValue = async (key) => {
  const file = await getFile();
  if (!file) {
    return null;
  }
  const data = JSON.parse(file);
  return data[key];
};

const setKeyValue = async (key, value) => {
  let data = {};
  const file = await getFile();
  if (file) {
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const STORAGE_DICTIONARY = {
  token: 'token',
  city: 'city',
};

export { getKeyValue, setKeyValue, STORAGE_DICTIONARY };
