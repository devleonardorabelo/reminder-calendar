import Axios from 'axios';
import { TWeather } from '../types';

async function getWeather(
  city: string,
  date: string,
): Promise<TWeather | null> {
  try {
    const { data } = await Axios.get(process.env.REACT_APP_API_URL, {
      params: {
        key: process.env.REACT_APP_API_KEY,
        q: city,
        lang: 'pt',
        dt: date,
      },
    });
    return data;
  } catch (err) {
    return null;
  }
}

export default getWeather;
