// Compliance settings are used to define quiet hours for the US (using TCPA) and Canada (using CRTC).
export const TCPA_QUIET_HOURS = {
  start: 8,
  end: 21,
};

export const CRTC_QUIET_HOURS = {
  weekdays: {
    start: 9,
    end: 21.5,
  },
  weekends: {
    start: 10,
    end: 18,
  },
};

// The strings of CRTC_STATES must match the `name` field found within AREA_CODES object in phoneCodes.js.
export const CRTC_STATES = [
  'Canadian Special Services',
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Nova Scotia and Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
];
