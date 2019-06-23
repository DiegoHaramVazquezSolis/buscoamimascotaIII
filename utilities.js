import axios from 'axios';

/**
 * Return list of places based on the location obtained of mapbox Geologation API
 * or Promise.reject() if the query have less than two characters
 * @param {string} location location to query on mapbox API
 */
export function makeGeolocationMapBoxQuery(location) {
    if (location.length > 1) {
        const URILocation = encodeURI(location);
        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${URILocation}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1560102813486&autocomplete=true&types=place%2Cdistrict`);
    } else {
        return Promise.reject();
    }
}

/**
 * Make a query to an API to get user location (city, state and country) based on their IP
 * and return the response of the query
 */
export async function getUserLocationBasedOnTheirIP() {
    return await getUserIP()
    .then((ipResponse) => {
        return axios.get(`http://api.ipstack.com/${ipResponse.data}?access_key=8c50179e5095cd3b5160b64da0942400&format=1`);
    });
}

/**
 * Get the user IP
 */
function getUserIP() {
    return axios.get('https://api.ipify.org/?callback=getIP');
}