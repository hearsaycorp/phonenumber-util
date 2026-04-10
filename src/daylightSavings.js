/**
 * Supported states and provinces that do not uniformly observe daylight
 * saving time.
 *
 * @type {string[]}
 */
export const STATES_THAT_DONT_HAVE_DAYLIGHT_SAVINGS = [
  'Arizona',
  'Hawaii',
  'British Columbia',
  'Puerto Rico',
  'Saskatchewan',
  'Virgin Islands',
  'Yukon, Northwest Territories, and Nunavut',
];

/**
 * Area codes that span places with different daylight-saving behavior.
 *
 * Arizona does not follow daylight saving time, but the Navajo Nation does.
 * Area code `928` spans both.
 *
 * @type {Record<string, string>}
 */
export const AREA_CODES_WITH_MULTIPLE_DAYLIGHT_SAVINGS = {
  928: 'Arizona',
  236: 'British Columbia',
  250: 'British Columbia',
  257: 'British Columbia',
  672: 'British Columbia',
  778: 'British Columbia',
  306: 'Saskatchewan',
  474: 'Saskatchewan',
  639: 'Saskatchewan',
};
