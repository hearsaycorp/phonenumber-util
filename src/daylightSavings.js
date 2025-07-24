export const STATES_THAT_DONT_HAVE_DAYLIGHT_SAVINGS = [
  'Arizona',
  'Hawaii',
  'British Columbia',
  'Puerto Rico',
  'Saskatchewan',
  'Virgin Islands',
  'Yukon, Northwest Territories, and Nunavut',
];

// Arizona does not follow Daylight Savings, but the Navajo Nation does.  The
// 928 area code spans both Arizone (no DST) and Navajo Nation lands (DST).
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
