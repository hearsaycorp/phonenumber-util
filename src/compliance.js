/**
 * TCPA quiet hours used for US local-time compliance checks.
 *
 * @type {{ start: number, end: number }}
 */
export const TCPA_QUIET_HOURS = {
  start: 8,
  end: 21,
};

/**
 * CRTC quiet hours used for Canadian local-time compliance checks.
 *
 * @type {{
 *   weekdays: { start: number, end: number },
 *   weekends: { start: number, end: number },
 * }}
 */
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

/**
 * State and province names treated as CRTC-governed regions.
 *
 * The strings here must match the `name` field in `AREA_CODES`.
 *
 * @type {string[]}
 */
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
