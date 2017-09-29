import axios from 'axios';

const API_KEY = 'f168a3e9dd078087857f1115286df64b';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function(city) {
  const url = `${ROOT_URL}&q={city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
