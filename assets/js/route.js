/*
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * 
 */

'use strict';

import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/weather?lat=28.7041&lon=77.1025" // Delhi

const currentLocation = function() {
    window.navigator.geolocation.getCurrentPosition( res => {
        const { latitude, longitude } = res.coords;

        updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    }, err => {
        window.location.hash = defaultLocation;
    });
}

/**
 * @param {string} query searched query
 */
const searchedLocation = query => updateWeather(...query.split("&"));
// updateWeather("lat=28.7041", "lon=77.1025") 

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = function () {
    const requestURL = Window.location.hash.slice(1);

    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];
    routes.get(route) ? routes.get(route)(query) : error404();
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function (){
    if (!window.location.hash) {
        window.location.hash = "/current-location";
    } else {
        checkHash();
    }
})