import { getKeyValue, STORAGE_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(STORAGE_DICTIONARY.token));
  if (!token) {
    throw new Error('Token not set. Set it with the -t option [API_KEY]');
  }
  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appid: token,
        lang: 'en',
        units: 'metric',
      },
    },
  );
  return data;
};

export { getWeather };
