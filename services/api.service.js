import axios from 'axios';
import { getKeyValue, STORAGE_DICTIONARY } from './storage.service.js';

const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(STORAGE_DICTIONARY.token));
  if (!token) {
    throw new Error('Set token via -t [API_KEY]');
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

const getIcon = (iconCode) => {
  switch (iconCode.slice(0, -1)) {
    case '01':
      return '☀️';
    case '02':
      return '🌤️';
    case '03':
      return '☁️';
    case '04':
      return '☁️';
    case '09':
      return '🌧️';
    case '10':
      return '🌦️';
    case '11':
      return '🌩️';
    case '13':
      return '❄️';
    case '50':
      return '🌫️';
  }
};

export { getWeather, getIcon };
