import {
  isDaylightSavingTime,
  formatTimeOffset,
  offsetTieBreaker,
  findTimeDetails,
  findTimeFromAreaCode,
  findRegionFromRegionCode,
} from '../index.js';
import { describe, it, expect } from 'vitest';

const invalidPhone = {
  timezoneOffset: null,
  daylightSavings: null,
  stateHasMultipleTimezones: null,
  areaCodeHasMultipleTimezones: null,
  estimatedTime: false,
};

const seattlePhone = {
  areaCodeHasMultipleTimezones: false,
  daylightSavings: true,
  estimatedTime: false,
  isQuietHours: false,
  isTCPAQuietHours: false,
  localTime24Hour: '08:00:00',
  localTimeReadable: '8:00:00 AM',
  stateHasMultipleTimezones: false,
  timezoneOffset: '-07:00',
  state: {
    name: 'Washington',
    code: 'WA',
  },
  region: {
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
  },
};

const arizonaPhoneJul = {
  areaCodeHasMultipleTimezones: false,
  daylightSavings: true,
  estimatedTime: true,
  isQuietHours: false,
  isTCPAQuietHours: false,
  localTime24Hour: '09:00:00',
  localTimeReadable: '9:00:00 AM',
  stateHasMultipleTimezones: false,
  timezoneOffset: '-06:00',
  state: {
    name: 'Arizona',
    code: 'AZ',
  },
  region: {
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
  },
};

const arizonaPhoneDec = {
  areaCodeHasMultipleTimezones: false,
  daylightSavings: false,
  estimatedTime: false,
  isQuietHours: false,
  isTCPAQuietHours: false,
  localTime24Hour: '09:00:00',
  localTimeReadable: '9:00:00 AM',
  stateHasMultipleTimezones: false,
  timezoneOffset: '-07:00',
  state: {
    name: 'Arizona',
    code: 'AZ',
  },
  region: {
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
  },
};

const texasPhone = {
  areaCodeHasMultipleTimezones: true,
  daylightSavings: false,
  estimatedTime: true,
  isQuietHours: false,
  isTCPAQuietHours: false,
  localTime24Hour: '10:00:00',
  localTimeReadable: '10:00:00 AM',
  stateHasMultipleTimezones: true,
  timezoneOffset: '-06:00',
  state: {
    name: 'Texas',
    code: 'TX',
  },
  region: {
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
  },
};

const floridaPhone = {
  areaCodeHasMultipleTimezones: false,
  daylightSavings: false,
  estimatedTime: false,
  isQuietHours: false,
  isTCPAQuietHours: false,
  localTime24Hour: '10:00:00',
  localTimeReadable: '10:00:00 AM',
  stateHasMultipleTimezones: true,
  timezoneOffset: '-06:00',
  state: {
    name: 'Florida',
    code: 'FL',
  },
  region: {
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
  },
};

const hawaiiPhone = {
  areaCodeHasMultipleTimezones: false,
  daylightSavings: false,
  estimatedTime: false,
  isQuietHours: true,
  isTCPAQuietHours: true,
  localTime24Hour: '06:00:00',
  localTimeReadable: '6:00:00 AM',
  stateHasMultipleTimezones: false,
  timezoneOffset: '-10:00',
  state: {
    name: 'Hawaii',
    code: 'HI',
  },
  region: {
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
  },
};

const canadianPhone = {
  areaCodeHasMultipleTimezones: true,
  daylightSavings: true,
  estimatedTime: true,
  isQuietHours: false,
  isCRTCQuietHours: false,
  localTime24Hour: '10:00:00',
  localTimeReadable: '10:00:00 AM',
  stateHasMultipleTimezones: true,
  timezoneOffset: '-05:00',
  state: {
    name: 'British Columbia',
    code: 'BC',
  },
  region: {
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
  },
};

describe('Daylight Savings', () => {
  it('should correctly be determined if the time given is or is not within daylight savings time', () => {
    const daylightSavings = new Date('2024-07-15T12:00:00');
    const notDaylightSavings = new Date('2024-12-15T12:00:00');

    expect(isDaylightSavingTime(daylightSavings)).toBe(true);
    expect(isDaylightSavingTime(notDaylightSavings)).toBe(false);
  });
});

describe('Formatting time offset', () => {
  it('return a proper ISO 8601 formatted date string, regardless of hour length', () => {
    expect(formatTimeOffset('-8:00')).toBe('-08:00');
    expect(formatTimeOffset('-12:00')).toBe('-12:00');
    expect(formatTimeOffset('+7:00')).toBe('+07:00');
    expect(formatTimeOffset('-3:30')).toBe('-03:30');
  });
});

describe('Errs on the side of caution, minimizing the given time options to the more narrow', () => {
  it('Late at night, the available options for morning should be later', () => {
    expect(
      offsetTieBreaker(['-8:00', '-7:00'], new Date('2024-07-15T23:00:00')),
    ).toBe('-7:00');
  });

  it('Early in day, the available options for morning should be earlier', () => {
    expect(
      offsetTieBreaker(['-8:00', '-7:00'], new Date('2024-07-15T08:00:00')),
    ).toBe('-8:00');
  });
});

describe('Provides compliance quiet hours for any given region', () => {
  it('Returns quiet hours booleans for standard US area', () => {
    // US regions should have TCPA quiet hours but not CRTC quiet hours.
    expect(
      findTimeDetails('-08:00', new Date('2024-07-15T21:00:00'), 'California')
        .isTCPAQuietHours,
    ).toEqual(false);
    expect(
      findTimeDetails('-08:00', new Date('2024-07-15T22:00:00'), 'California')
        .isTCPAQuietHours,
    ).toEqual(true);
    expect(
      findTimeDetails('-08:00', new Date('2024-07-15T08:00:00'), 'California')
        .isTCPAQuietHours,
    ).toEqual(true);
    expect(
      findTimeDetails('-08:00', new Date('2024-07-15T08:00:00'), 'California')
        .isCRTCQuietHours,
    ).toEqual(undefined);
    expect(
      findTimeDetails('-08:00', new Date('2024-07-15T09:00:00'), 'California')
        .isTCPAQuietHours,
    ).toEqual(false);

    // Alberta should have CRTC quiet hours but not TCPA quiet hours.
    expect(
      findTimeDetails('-07:00', new Date('2024-07-15T09:00:00'), 'Alberta')
        .isTCPAQuietHours,
    ).toEqual(undefined);
    expect(
      findTimeDetails('-07:00', new Date('2024-07-20T07:00:00'), 'Alberta')
        .isCRTCQuietHours,
    ).toEqual(true);

    // Both should have an abstracted general quiet hours value.
    expect(
      findTimeDetails('-08:00', new Date('2024-07-15T08:00:00'), 'California')
        .isQuietHours,
    ).toEqual(true);
    expect(
      findTimeDetails('-07:00', new Date('2024-07-15T7:00:00'), 'Alberta')
        .isQuietHours,
    ).toEqual(true);
  });
});

describe('Provides general time information for the given phone number (US and Canada only)', () => {
  it('Returns general time information for a phone number region', () => {
    expect(findTimeFromAreaCode(null, new Date('2024-07-15T08:00:00'))).toEqual(
      invalidPhone,
    );
    expect(
      findTimeFromAreaCode('206', new Date('2024-07-15T08:00:00')),
    ).toEqual(seattlePhone);
    expect(
      findTimeFromAreaCode('928', new Date('2024-07-15T08:00:00')),
    ).toEqual(arizonaPhoneJul);
    expect(
      findTimeFromAreaCode('928', new Date('2024-12-15T08:00:00')),
    ).toEqual(arizonaPhoneDec);
    expect(
      findTimeFromAreaCode('432', new Date('2024-12-15T08:00:00')),
    ).toEqual(texasPhone);
    expect(
      findTimeFromAreaCode('850', new Date('2024-12-15T08:00:00')),
    ).toEqual(floridaPhone);
    expect(
      findTimeFromAreaCode('808', new Date('2024-12-15T08:00:00')),
    ).toEqual(hawaiiPhone);
    expect(
      findTimeFromAreaCode('236', new Date('2024-07-20T08:00:00')),
    ).toEqual(canadianPhone);
  });
});

describe('Provides region name for a given region code', () => {
  it('Returns region name', () => {
    expect(findRegionFromRegionCode(1).name).toEqual('United States, Canada');
    expect(findRegionFromRegionCode(1, 206).name).toEqual('United States');
    expect(findRegionFromRegionCode(7).name).toEqual('Russia, Kazakhstan');
    expect(findRegionFromRegionCode(20).name).toEqual('Egypt');
    expect(findRegionFromRegionCode(27).name).toEqual('South Africa');
    expect(findRegionFromRegionCode(30).name).toEqual('Greece');
    expect(findRegionFromRegionCode(31).name).toEqual('Netherlands');
    expect(findRegionFromRegionCode(32).name).toEqual('Belgium');
    expect(findRegionFromRegionCode(33).name).toEqual('France');
  });
});
