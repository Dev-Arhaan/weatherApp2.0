'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday", 
    "Teusday", 
    "Wednesday", 
    "Thursday",
    "Friday", 
    "Saturday", 
];

export const monthNames = [
    "Jan",
    "Feb", 
    "Mar", 
    "Apr", 
    "May",
    "Jun", 
    "Jul",
    "Aug", 
    "Sep", 
    "Oct", 
    "Nov",
    "Dec", 
];

/**
 * 
 * @param {number} dateUnix unix date in seconds 
 * @param {number} timezone timezone shift from utc in seconds
 * @returns {string} Date String. format: "Sunday 10, Jan"
 */

export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds 
 * @param {Function} addZero Adds zzero in front of single digit minutes
 * @returns {String} Time String. format: "HH:MM AM/PM"
 */

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }

    return i;
  }

  
export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = addZero(date.getUTCMinutes());
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds 
 * @returns {String} Time String. format: "HH AM/PM"
 */
export const getHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps meter per second 
 * @returns {number} kilo meter persecond
 */
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considerede satisfactory, and air pollution causes little or no risk."
    },

    2: {
        level: "Fair",
        message: "Air quality is acceptable, however for some pollutant there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },

    3: {
        level: "Moderate",
        message: "Member of sensitive group may experience health effects. The general public is not likely to be effected."
    },

    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects. The general public is not likely to be affected."
    },

    5: {
        level: "Very Poor",
        message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
    }
}