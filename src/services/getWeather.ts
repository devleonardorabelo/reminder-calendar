import Axios from 'axios';
import { TWeatherResponse } from '../types';

async function getWeather(city: string): Promise<TWeatherResponse> {
  const { data } = await Axios.get(process.env.REACT_APP_API_URL, {
    params: {
      key: process.env.REACT_APP_API_KEY,
      q: city,
      lang: 'pt',
    },
  });
  return data;
}

export default getWeather;
