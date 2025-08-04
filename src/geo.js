import { AREA_CODES, REGION_CODES } from './phoneCodes.js';
import {
  TCPA_QUIET_HOURS,
  CRTC_QUIET_HOURS,
  CRTC_STATES,
} from './compliance.js';
import {
  STATE_TIMEZONES,
  STATES_WITH_MULTIPLE_TIMEZONES,
} from './timezones.js';
import {
  STATES_THAT_DONT_HAVE_DAYLIGHT_SAVINGS,
  AREA_CODES_WITH_MULTIPLE_DAYLIGHT_SAVINGS,
} from './daylightSavings.js';
import { findNumbersInString } from './base.js';

/**
 * Determines whether the given date is within daylight saving time for the local time zone.
 *
 * This function compares the timezone offsets of January 1st and July 1st of the given year.
 * If the current date's timezone offset is less than the maximum of these offsets,
 * it indicates that daylight saving time is in effect.
 *
 * @param {Date} [date=new Date()] - The date to check. Defaults to the current date if not provided.
 * @returns {boolean} - Returns true if the date is within daylight saving time, false otherwise.
 */
export function isDaylightSavingTime(date = new Date()) {
  const jan = new Date(date.getFullYear(), 0, 1);
  const jul = new Date(date.getFullYear(), 6, 1);
  const stdTimezoneOffset = Math.max(
    jan.getTimezoneOffset(),
    jul.getTimezoneOffset(),
  );
  return date.getTimezoneOffset() < stdTimezoneOffset;
}

/**
 * Formats a time offset string to ensure it complies with ISO 8601 by padding the hour component with leading zeros if necessary.
 *
 * This function takes a time offset string (e.g., "-8:00" or "+8:00") and ensures the hour part is always two digits (e.g., "-08:00" or "+08:00").
 *
 * @param {string} offset - The time offset string to format, in the format "±H:MM".
 * @returns {string} - The formatted time offset string in the format "±HH:MM".
 */
export function formatTimeOffset(offset) {
  const offsetParts = offset.split(':');
  const sign = offsetParts[0].startsWith('-') ? '-' : '+';
  const hour = offsetParts[0].replace(sign, '');

  return sign + [hour.padStart(2, '0'), offsetParts[1]].join(':');
}

/**
 * Determines the appropriate timezone offset when there are multiple possibilities, based on the time of day.
 *
 * When given a list of timezones for an area code that spans multiple timezones, this function biases the selection
 * based on the time of day. If the local time is in the morning (before 12:00 PM), it selects the earlier timezone.
 * If the local time is in the afternoon or later (12:00 PM or later), it selects the later timezone.
 *
 * @param {Array<string>} timezones - An array of timezone offsets (e.g., ["-08:00", "-07:00"]).
 * @param {Date} date - The date object used to determine the local time.
 * @returns {string} - The selected timezone offset based on the time of day.
 */
export function offsetTieBreaker(timezones, date) {
  const localTime = date.toLocaleTimeString('en-US', { hour12: false });
  const localHour = parseInt(localTime.split(':')[0]);

  if (localHour < 12) {
    return timezones[0];
  } else {
    return timezones[1];
  }
}

/**
 * Calculates local time details based on a given UTC offset and date.
 *
 * @param {string} offset - The UTC offset in the format "+HH:MM" or "-HH:MM".
 * @param {Date} date - The date object for which to calculate the local time.
 * @param {string} stateName - The state in which the area code is located.
 * @returns {Object} An object containing local time details.
 * @returns {string} return.localTimeReadable - The local time as a readable string in 12-hour format.
 * @returns {string} return.localTime24Hour - The local time as a string in 24-hour format.
 * @returns {boolean} return.isTCPAQuietHours - Indicates whether the local time falls outside TCPA quiet hours (US).
 * @returns {boolean} return.isCRTCQuietHours - Indicates whether the local time falls outside CRTC quiet hours (Canada).
 * @returns {boolean} return.isQuietHours - Indicates whether the local time falls outside either TCPA or CRTC quiet hours.
 */
export function findTimeDetails(offset, date, stateName) {
  const localTime = new Date(
    date.getTime() +
      date.getTimezoneOffset() * 60000 +
      parseInt(offset.split(':')[0]) * 3600000 +
      parseInt(offset.split(':')[1]) * 60000,
  );
  const localDay = localTime.getDay();
  const localHour = localTime.getHours();
  // CRTC Info
  const isWeekend = localDay === 0 || localDay === 6;
  const isCRTCRegion = CRTC_STATES.indexOf(stateName) !== -1;

  let timeDetails = {
    localTimeReadable: localTime.toLocaleTimeString(),
    localTime24Hour: localTime.toLocaleTimeString('en-US', { hour12: false }),
  };

  if (isCRTCRegion) {
    if (isWeekend) {
      timeDetails.isCRTCQuietHours = !(
        localHour >= CRTC_QUIET_HOURS.weekends.start &&
        localHour < CRTC_QUIET_HOURS.weekends.end
      );
    } else {
      timeDetails.isCRTCQuietHours = !(
        localHour >= CRTC_QUIET_HOURS.weekdays.start &&
        localHour < CRTC_QUIET_HOURS.weekdays.end
      );
    }
  } else {
    timeDetails.isTCPAQuietHours = !(
      localHour >= TCPA_QUIET_HOURS.start && localHour < TCPA_QUIET_HOURS.end
    );
  }

  timeDetails.isQuietHours = !!(
    timeDetails.isTCPAQuietHours || timeDetails.isCRTCQuietHours
  );

  return timeDetails;
}

/**
 * Finds the formatted time offset for a given area code and state, considering daylight saving time and multiple timezones.
 *
 * This function determines the correct timezone offset for a given area code and state. It accounts for states with multiple
 * timezones and biases the selection based on the time of day. It also adjusts for daylight saving time if applicable.
 *
 * @param {string} areaCode - The valid area code to determine the timezone for.
 * @param {Date} [date=new Date()] - The date object used to determine the local time and daylight saving time. Defaults to the current date if not provided.
 * @returns {string} - The formatted timezone offset in the format "±HH:MM".
 */
export function findTimeFromAreaCode(areaCode, date = new Date()) {
  let localOffset;
  const stateName = AREA_CODES[areaCode]?.name;
  let returnTime = {
    timezoneOffset: null,
    stateHasMultipleTimezones: null,
    areaCodeHasMultipleTimezones: null,
    daylightSavings: null,
    estimatedTime: false,
  };

  if (AREA_CODES[areaCode]) {
    returnTime.state = {
      name: AREA_CODES[areaCode].name,
      code: AREA_CODES[areaCode].code,
    };

    if (AREA_CODES[areaCode].region) {
      returnTime.region = {
        name: AREA_CODES[areaCode].region.name,
        code: AREA_CODES[areaCode].region.code,
        flag: AREA_CODES[areaCode].region.flag,
      };
    }
  }

  if (!stateName || !STATE_TIMEZONES[stateName]) {
    return returnTime;
  }

  if (
    STATES_WITH_MULTIPLE_TIMEZONES[stateName] &&
    STATES_WITH_MULTIPLE_TIMEZONES[stateName][areaCode]
  ) {
    returnTime.stateHasMultipleTimezones = true;

    if (Array.isArray(STATES_WITH_MULTIPLE_TIMEZONES[stateName][areaCode])) {
      // A few area codes span multiple timezones.  We need to determine which is more _conservative_ for the provided time.
      localOffset = offsetTieBreaker(
        STATES_WITH_MULTIPLE_TIMEZONES[stateName][areaCode],
        date,
      );
      returnTime.areaCodeHasMultipleTimezones = true;
      returnTime.estimatedTime = true;
    } else {
      localOffset = STATES_WITH_MULTIPLE_TIMEZONES[stateName][areaCode];
      returnTime.areaCodeHasMultipleTimezones = false;
    }
  } else {
    returnTime.stateHasMultipleTimezones =
      !!STATES_WITH_MULTIPLE_TIMEZONES[stateName];
    returnTime.areaCodeHasMultipleTimezones = false;
    localOffset = STATE_TIMEZONES[stateName];
  }

  if (AREA_CODES_WITH_MULTIPLE_DAYLIGHT_SAVINGS[areaCode]) {
    const offset = parseInt(localOffset.split(':')[0]);

    if (isDaylightSavingTime(date)) {
      returnTime.daylightSavings = true;
      // During daylight savings, parts of this area code will be adhering and other parts not.
      // We'll take the most _conservative_ time within the two options.
      localOffset = offsetTieBreaker([`${offset + 1}:00`, localOffset], date);
      returnTime.estimatedTime = true;
    } else {
      // Nothing to change - the entire area code is at the same time.
      returnTime.daylightSavings = false;
      localOffset = `${offset}:00`;
    }
  } else if (!STATES_THAT_DONT_HAVE_DAYLIGHT_SAVINGS.includes(stateName)) {
    const offset = parseInt(localOffset.split(':')[0]);

    if (isDaylightSavingTime(date)) {
      returnTime.daylightSavings = true;
      localOffset = `${offset + 1}:00`;
    } else {
      returnTime.daylightSavings = false;
      localOffset = `${offset}:00`;
    }
  } else {
    returnTime.daylightSavings = false;
  }

  returnTime.timezoneOffset = formatTimeOffset(localOffset);
  returnTime = {
    ...returnTime,
    ...findTimeDetails(localOffset, date, stateName),
  };

  return returnTime;
}

/**
 * Finds and returns the region name corresponding to a given region code.
 *
 * @param {string} regionCode - The code representing the region.
 * @param {string} areaCode - Optionally, the area code if regionCode is 1 - to distinguish between US, Canada and other NANP regions.
 * @returns {Object} An object containing local region details.
 * @returns {string | undefined} The name of the region if found, otherwise `undefined`.
 * @returns {string | undefined} The 2-letter code of the region if found, otherwise `undefined`.
 * @returns {string | undefined} The emoji flag of the region if found, otherwise `undefined`.
 */
export function findRegionFromRegionCode(regionCode, areaCode) {
  const regionInfo = REGION_CODES[regionCode];

  // Region 1 is unique that it covers US, Canada as well as a number of NANP countries that do not have states.
  if (parseInt(regionCode, 10) === 1 && areaCode) {
    const stateInfo = AREA_CODES[areaCode];

    return {
      ...regionInfo,
      name: stateInfo.region.name,
      code: stateInfo.region.code,
      flag: stateInfo.region.flag,
    };
  }

  return regionInfo;
}

/**
 * Finds all phone numbers in a string and adds in geographical and/or time zone information to that object.
 *
 * @param {string} text - The text to search for phone numbers.
 * @param {Date} [date=new Date()] - The date to use for determining time zone information. Defaults to the current date.
 * @returns {Array<object>} An array of objects, where each object represents a found phone number
 * and includes details from `findNumbersInString` as well as geographical and/or time zone information.
 */
export function findAllNumbersInfoInString(text, date = new Date()) {
  const numbers = findNumbersInString(text);

  return numbers.map((item) => {
    const geo = item.areaCode
      ? findTimeFromAreaCode(item.areaCode, date)
      : findRegionFromRegionCode(item.regionCode);
    return { ...item, ...geo };
  });
}
