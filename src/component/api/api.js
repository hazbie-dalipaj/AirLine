import FLIGHTS from '../collection-flights/flights_data';
import MOCK_FLIGHTS from './mock_flights';
import COUNTRY from './country';

/**
 * Fetches flights.
 * @return {Promise} Fetch results.
 */
export async function getFlights() {
    const results = await new Promise(resolve => setTimeout(() => {
      if (process.env.TEST) {
        resolve(MOCK_FLIGHTS);
        return;
      }
      resolve(FLIGHTS);
    }, 1000));
    return results;
  }
  
  /**
   * Fetches results.
   * @return {Promise} Fetch results.
   */
  export async function getCountries() {
    const results = await new Promise(resolve => setTimeout(() => {
      resolve(COUNTRY);
    }, 1));
    return results;
  }