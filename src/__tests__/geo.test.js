import {
  isDaylightSavingTime,
  formatTimeOffset,
  offsetTieBreaker,
  findTimeDetails,
  findTimeFromAreaCode,
  findRegionFromRegionCode,
  findAllNumbersInfoInString,
} from '../geo.js';
import { AREA_CODE_LIST } from '../areaCodeList.js';
import { AREA_CODES, REGION_CODES } from '../phoneCodes.js';
import { PHONE_FORMATS } from '../phoneFormats.js';

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

const portlandPhone = {
  areaCodeHasMultipleTimezones: false,
  daylightSavings: true,
  estimatedTime: false,
  isQuietHours: false,
  isTCPAQuietHours: false,
  localTime24Hour: '08:00:00',
  localTimeReadable: '8:00:00 AM',
  stateHasMultipleTimezones: true,
  timezoneOffset: '-07:00',
  state: {
    name: 'Oregon',
    code: 'OR',
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

const longStringWithNumbers = `
It was a cold, rainy evening when Sophie stumbled upon the weathered journal in the attic of her late grandfather's home. The journal's leather cover was cracked, its pages yellowed with time. Inside, however, was a web of mystery that would unravel Sophie's life over the coming weeks. The most intriguing part? Each entry ended with a phone number-a mix of US, Canadian, and international numbers-written in her grandfather's meticulous hand.
The first number, 617-555-0134, was scribbled below a cryptic entry about "the Boston job." Sophie's heart raced as she dialed the Massachusetts number. A gruff voice answered on the third ring. "This is Detective Harris. Who's calling?" Sophie's voice trembled as she explained the journal. Harris's tone softened. "If that journal belonged to Robert Fields, you need to be careful. He was involved in some deep, dangerous stuff."
Sophie wasn't deterred. Instead, her curiosity grew. The next number was Canadian: +1-416-555-2468, written beneath an entry about a maple leaf emblem. The line connected to a cafe in Toronto. A barista named Elena answered and, after a moment of hesitation, said, "I remember Mr. Fields. He came in every Tuesday for a year. Always ordered the same thing-a double espresso-and left me an envelope every time."
Sophie's pulse quickened as Elena offered to send a picture of one of the envelopes. Within an hour, Sophie received an email with an image showing a wax seal bearing an intricate insignia. Below it, another phone number was scrawled: +44 20 7946 0958, a UK number. Without hesitation, Sophie dialed.
"Briggs Antiquities, London," a posh voice answered. Sophie explained her discovery, and the receptionist transferred her to a man named Charles. "Ah, Robert Fields," Charles said wistfully. "He was a loyal patron, always seeking artifacts tied to the Knights Templar. If you have his journal, you might find yourself part of a larger puzzle."
The puzzle, it seemed, spanned the globe. Another entry mentioned "the desert winds" and was linked to a number in Dubai: +971 4 555 1234. The number connected her to a man named Tariq, who revealed that Robert had been searching for a rare relic-a golden compass said to point to treasure. Tariq's description matched the insignia Sophie had seen on the envelope.
"But why so many numbers?" Sophie muttered to herself. Each call led to another layer of intrigue. A South African number, +27 21 555 6789, took her to Cape Town, where a historian named Amara spoke of Robert's fascination with lost languages. "He believed there was a cipher hidden in ancient texts. If he left you his journal, you're meant to decode it."
Another number, +55-11-5555-1234 in Brazil, led her to a tech entrepreneur in Sao Paulo who had once helped Robert crack encrypted files. "I thought he was crazy," the entrepreneur said. "But now? Maybe he was onto something."
Sophie pieced together her grandfather's movements over decades. Each phone number represented a person who had played a role in his quest. An Australian number, +61 2 5551 2345, introduced her to a diver named Liam who had helped Robert retrieve artifacts from a shipwreck. "He was fearless," Liam recalled. "And determined."
Back in the US, a Seattle number, 206-555-7890, connected Sophie to a lawyer who held a key to Robert's safety deposit box. Inside was a single piece of parchment and yet another number: +49 30 555 4321, this time in Germany. The number belonged to a librarian in Berlin who recognized the parchment as part of a centuries-old map.
The map, Sophie realized, was the heart of the mystery. Each phone number had been a breadcrumb leading her closer to understanding her grandfather's obsession. The final number, scribbled in bold at the back of the journal, was unlike the others. It was an Argentinian number: +54 11 5555 6789. Sophie hesitated, her finger hovering over the dial button. She took a deep breath and called.
"Sophie Fields," a voice answered before she could speak. "We've been expecting you."
"Who is this?" she demanded, her voice trembling.
"A friend of your grandfather," the voice replied. "He knew you would finish what he started."
The call ended abruptly, leaving Sophie with more questions than answers. But as she stared at the journal, now marked with notes and connections, she felt a sense of purpose. Each phone number was a clue, each person a piece of a puzzle her grandfather had trusted her to solve.
And Sophie was determined to finish what Robert Fields had begun.`;
const longStringOutput = [
  {
    index: 464,
    lastIndex: 476,
    areaCode: '617',
    e164: '+16175550134',
    format: '(xxx) xxx-xxxx',
    formattedNumber: '(617) 555-0134',
    href: 'tel:+16175550134',
    localNumber: '5550134',
    rawNumber: '617-555-0134',
    regionCode: '1',
    timezoneOffset: '-04:00',
    stateHasMultipleTimezones: false,
    areaCodeHasMultipleTimezones: false,
    daylightSavings: true,
    estimatedTime: false,
    state: { name: 'Massachusetts', code: 'MA' },
    region: { name: 'United States', code: 'US', flag: '🇺🇸' },
    localTimeReadable: '11:00:00 AM',
    localTime24Hour: '11:00:00',
    isTCPAQuietHours: false,
    isQuietHours: false,
  },
  {
    index: 961,
    lastIndex: 976,
    areaCode: '416',
    e164: '+14165552468',
    format: '(xxx) xxx-xxxx',
    formattedNumber: '(416) 555-2468',
    href: 'tel:+14165552468',
    localNumber: '5552468',
    rawNumber: '+1-416-555-2468',
    regionCode: '1',
    timezoneOffset: '-04:00',
    stateHasMultipleTimezones: true,
    areaCodeHasMultipleTimezones: false,
    daylightSavings: true,
    estimatedTime: false,
    state: { name: 'Ontario', code: 'ON' },
    region: { name: 'Canada', code: 'CA', flag: '🇨🇦' },
    localTimeReadable: '11:00:00 AM',
    localTime24Hour: '11:00:00',
    isCRTCQuietHours: false,
    isQuietHours: false,
  },
  {
    index: 1524,
    lastIndex: 1540,
    areaCode: null,
    e164: '+442079460958',
    format: '+xx xxxx xxxxxx',
    formattedNumber: '+44 2079 460958',
    href: 'tel:+442079460958',
    localNumber: '2079460958',
    rawNumber: '+44 20 7946 0958',
    regionCode: '44',
    name: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
  },
  {
    index: 2056,
    lastIndex: 2071,
    areaCode: null,
    e164: '+97145551234',
    format: '+xxx xx xxx xxxx',
    formattedNumber: '+97145551234',
    href: 'tel:+97145551234',
    localNumber: '45551234',
    rawNumber: '+971 4 555 1234',
    regionCode: '971',
    name: 'United Arab Emirates',
    code: 'AE',
    flag: '🇦🇪',
  },
  {
    index: 2422,
    lastIndex: 2437,
    areaCode: null,
    e164: '+27215556789',
    format: '+xx xx xxx xxxx',
    formattedNumber: '+27 21 555 6789',
    href: 'tel:+27215556789',
    localNumber: '215556789',
    rawNumber: '+27 21 555 6789',
    regionCode: '27',
    name: 'South Africa',
    code: 'ZA',
    flag: '🇿🇦',
  },
  {
    index: 2672,
    lastIndex: 2688,
    areaCode: null,
    e164: '+551155551234',
    format: '+xx xx xxxx-xxxx',
    formattedNumber: '+55 11 5555-1234',
    href: 'tel:+551155551234',
    localNumber: '1155551234',
    rawNumber: '+55-11-5555-1234',
    regionCode: '55',
    name: 'Brazil',
    code: 'BR',
    flag: '🇧🇷',
  },
  {
    index: 3045,
    lastIndex: 3060,
    areaCode: null,
    e164: '+61255512345',
    format: '+xx xxx xxx xxx',
    formattedNumber: '+61 255 512 345',
    href: 'tel:+61255512345',
    localNumber: '255512345',
    rawNumber: '+61 2 5551 2345',
    regionCode: '61',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
  },
  {
    index: 3244,
    lastIndex: 3256,
    areaCode: '206',
    e164: '+12065557890',
    format: '(xxx) xxx-xxxx',
    formattedNumber: '(206) 555-7890',
    href: 'tel:+12065557890',
    localNumber: '5557890',
    rawNumber: '206-555-7890',
    regionCode: '1',
    timezoneOffset: '-07:00',
    stateHasMultipleTimezones: false,
    areaCodeHasMultipleTimezones: false,
    daylightSavings: true,
    estimatedTime: false,
    state: { name: 'Washington', code: 'WA' },
    region: { name: 'United States', code: 'US', flag: '🇺🇸' },
    localTimeReadable: '8:00:00 AM',
    localTime24Hour: '08:00:00',
    isTCPAQuietHours: false,
    isQuietHours: false,
  },
  {
    index: 3397,
    lastIndex: 3412,
    areaCode: null,
    e164: '+49305554321',
    format: '(xxx) xxx-xxxx',
    formattedNumber: '+49305554321',
    href: 'tel:+49305554321',
    localNumber: '305554321',
    rawNumber: '+49 30 555 4321',
    regionCode: '49',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
  },
  {
    index: 3820,
    lastIndex: 3836,
    areaCode: null,
    e164: '+541155556789',
    format: '+xx xxx-xxx-xxxx',
    formattedNumber: '+54 115-555-6789',
    href: 'tel:+541155556789',
    localNumber: '1155556789',
    rawNumber: '+54 11 5555 6789',
    regionCode: '54',
    name: 'Argentina',
    code: 'AR',
    flag: '🇦🇷',
  },
];

describe('Validate that every allow-list area code has matching geo and time info', () => {
  it('should ensure every area code in AREA_CODE_LIST has a matching region code in AREA_CODES', () => {
    AREA_CODE_LIST.forEach((areaCode) => {
      const areaCodeInfo = AREA_CODES[areaCode];

      if (!areaCodeInfo) {
        console.warn(
          `Area code ${areaCode} does not have a matching AREA_CODES entry.`,
        );
      }

      expect(areaCodeInfo).toBeDefined();
      expect(areaCodeInfo).not.toBeNull();
    });

    Object.keys(AREA_CODES).forEach((areaCode) => {
      const exists = AREA_CODE_LIST.has(areaCode);

      if (!exists) {
        console.warn(
          `Area code ${areaCode} does not have a matching AREA_CODE_LIST entry.`,
        );
      }

      expect(exists).toBe(true);
    });
  });

  it('should ensure every area code in AREA_CODE_LIST has a matching timezone', () => {
    AREA_CODE_LIST.forEach((areaCode) => {
      const timezone = findTimeFromAreaCode(
        areaCode,
        new Date('2024-07-15T08:00:00'),
      );
      expect(timezone).toBeDefined();
      expect(timezone).not.toBeNull();
    });
  });

  it('should ensure every region code in REGION_CODES has a matching phone format', () => {
    Object.keys(REGION_CODES).forEach((regionCode) => {
      const phoneFormat = PHONE_FORMATS[regionCode];

      if (!phoneFormat) {
        console.warn(
          `Region code ${regionCode} does not have a matching PHONE_FORMATS entry.`,
        );
      }

      expect(phoneFormat).toBeDefined();
      expect(phoneFormat).not.toBeNull();
    });

    Object.keys(PHONE_FORMATS).forEach((regionCode) => {
      const regionInfo = REGION_CODES[regionCode];

      if (!regionInfo) {
        console.warn(
          `Region code ${regionCode} does not have a matching REGION_CODES entry.`,
        );
      }

      expect(regionInfo).toBeDefined();
      expect(regionInfo).not.toBeNull();
    });
  });
});

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
      findTimeFromAreaCode('503', new Date('2024-07-15T08:00:00')),
    ).toEqual(portlandPhone);
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

describe('Extracts all useful phone info from a long string of text', () => {
  it('Returns all phone numbers and geo data', () => {
    const numbers = findAllNumbersInfoInString(
      longStringWithNumbers,
      new Date('2024-07-20T08:00:00'),
    );

    expect(numbers).toEqual(longStringOutput);
  });
});
