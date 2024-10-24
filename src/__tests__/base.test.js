import {
  formatPhoneNumberForE164,
  formatPhoneNumberLink,
  isValidPhoneNumber,
  getPhoneParts,
  sanitizeRawNumber,
  findNumbersInString,
  findPhoneFormat,
  formatPhoneNumber,
} from '../index.js';
import { describe, it, expect } from 'vitest';

const testNumbers = {
  3103491234: '1',
  18333671100: '1',
  '+86 755 8357 7777': '86',
  '+91 987 654 3210': '91',
  '+62 812 345 6789': '62',
  '+1 212 456 7890': '1',
  '+55 11 98765 4321': '55',
  '+7 912 345 6789': '7',
  '+92 333 123 4567': '92',
  '+234 802 345 6789': '234',
  '+880 1712 345 678': '880',
  '+81 90 1234 5678': '81',
  '+49 171 234 5678': '49',
  '+49 30 97 88 88 88': '49',
  '+63 917 123 4567': '63',
  '+52 55 1234 5678': '52',
  '+98 912 345 6789': '98',
  '+20 10 123 4567': '20',
  '+39 333 123 4567': '39',
  '+44 791 112 3456': '44',
  '+84 283 822 5555': '84',
  '+90 532 123 4567': '90',
  '+1 (310) 349-6543': '1',
  '+33 7 56 78 90 12': '33',
  '+66 92 345 6789': '66',
  '+27 82 345 6789': '27',
  '+57 321 123 45 67': '57',
  '+380 97 123 4567': '380',
  '+54 911 123 4567': '54',
};

describe('Region code mapping', () => {
  it('should find the correct region based on inputted number', () => {
    Object.keys(testNumbers).map(function (phoneNumber) {
      const phoneParts = getPhoneParts(phoneNumber);

      expect(phoneParts.regionCode).toBe(testNumbers[phoneNumber]);
      expect(phoneParts.formattedNumber.indexOf('x')).toBe(-1);
    });
  });

  it('handles bad data', () => {
    expect(getPhoneParts().rawNumber).toBe(undefined);
  });

  it('handles a number that has an invalid area code', () => {
    expect(getPhoneParts('+1 420 222 3333').formattedNumber).toBeNull();
  });

  it('handles a number is definitely not a phone number', () => {
    expect(getPhoneParts('7/23/2025').formattedNumber).toBeNull();
  });
});

describe('Sanitizing user inputted phone number values', () => {
  it('should return safe strings', () => {
    // These numbers are terribly malformed.  We try and reasonably extract values, but safety of the inputs is the priority.
    expect(sanitizeRawNumber("+1 <a>(3\\1%3C0) 3&49-'65`43")).toBe(
      '+131303496543',
    );
    expect(sanitizeRawNumber("+1; (3<>1&0) 3`49\\-65'43")).toBe('+13103496543');
  });
});

describe('Extracting numbers from a larger string of text', () => {
  it('should find the correct number of phone numbers present in a large string', () => {
    let rawString = '';
    // First, build a string based on the names and values in testNumbers object
    Object.keys(testNumbers).map(function (phoneNumber) {
      rawString =
        rawString +
        ' This: ' +
        phoneNumber +
        ' is a phone number for ' +
        testNumbers[phoneNumber] +
        '\n';
    });

    const output = findNumbersInString(rawString);
    expect(output.length).toBe(Object.keys(testNumbers).length);

    // Make sure each number given resolves to a region.  The lookup table will
    // have undefined for any number that doesn't exactly match.
    output.map(function (number) {
      expect(testNumbers[number.rawNumber]).toBeTruthy();
    });
  });

  it('should ingore numbers of the correct local length but lack area code', () => {
    expect(findNumbersInString('Meet me on 9/14/2024 over here').length).toBe(
      0,
    );
  });
});

describe('Phone number formatting', () => {
  it('should return undefined for a bad number', () => {
    expect(getPhoneParts('4444444444').formattedNumber).toBe(null);
  });

  it('should return correct values for a good number', () => {
    // Prevent malicious chars from being injected.
    expect(getPhoneParts("+1 <a>(3\\1%3C0) 3&49-'65`43").e164).toBe(null);
    expect(getPhoneParts("+1; (3<>1&0) 3`49\\-65'43").e164).toBe(
      '+13103496543',
    );
    // US
    expect(getPhoneParts('+1 (310) 349-6543').e164).toBe('+13103496543');
    expect(getPhoneParts('+1 (310) 349-6543').formattedNumber).toBe(
      '(310) 349-6543',
    );
    // US with a non-existent area code
    expect(getPhoneParts('+1 (420) 349-6543').e164).toBeNull();
    expect(getPhoneParts('+1 (420) 349-6543').formattedNumber).toBeNull();
    // Intl number (France)
    expect(getPhoneParts('+33 7 56 78 90 12').e164).toBe('+33756789012');
    expect(getPhoneParts('+33 7 56 78 90 12').formattedNumber).toBe(
      '+33 7 56 78 90 12',
    );
  });
});

describe('Creation of e164 numbers', () => {
  it('should create a valid e164 number for numbers that have that info.  Should return null for local numbers that exclude country code.', () => {
    const testNumbers = {
      usLocal: { regionCode: '1', localNumber: '3496200' },
      usAreaCode: { regionCode: '1', areaCode: '310', localNumber: '3496200' },
      intl: { regionCode: '49', localNumber: '1712345678' },
    };

    // US numbers without area codes don't offer enough info to provide a
    // valid e164 number.
    expect(formatPhoneNumberForE164(testNumbers.usLocal)).toBe(null);
    expect(formatPhoneNumberForE164(testNumbers.usAreaCode)).toBe(
      '+13103496200',
    );
    expect(formatPhoneNumberForE164(testNumbers.intl)).toBe('+491712345678');
  });
});

describe('Creation of phone links for href', () => {
  it('should create a valid href value for use in anchor tags', () => {
    const testNumbers = {
      nullCase: {
        regionCode: null,
        localNumber: null,
        rawNumber: null,
      },
      usLocal: {
        regionCode: '1',
        localNumber: '3496200',
        rawNumber: '3496200',
      },
      usAreaCode: {
        regionCode: '1',
        areaCode: '310',
        localNumber: '3496200',
        rawNumber: '(310) 349-6200',
      },
      intl: {
        regionCode: '49',
        localNumber: '1712345678',
        rawNumber: '+49 171 234 5678',
      },
    };

    expect(formatPhoneNumberLink(testNumbers.nullCase)).toBe(null);
    expect(formatPhoneNumberLink(testNumbers.usLocal)).toBe('tel:3496200');
    expect(formatPhoneNumberLink(testNumbers.usAreaCode)).toBe(
      'tel:+13103496200',
    );
    expect(formatPhoneNumberLink(testNumbers.intl)).toBe('tel:+491712345678');
  });
});

describe('Phone number validation', () => {
  it('should determine whether a phone number is presumed valid or not', () => {
    expect(isValidPhoneNumber('13103496200')).toBe(true);
    expect(isValidPhoneNumber('3103496200')).toBe(true);
    expect(isValidPhoneNumber('+234 345 6789')).toBe(true);
    expect(isValidPhoneNumber('349-6200')).toBe(false);
    expect(isValidPhoneNumber('7/23/2025')).toBe(false);
    expect(isValidPhoneNumber('7.23.2025')).toBe(false);
    expect(isValidPhoneNumber('7-23-2025')).toBe(false);
    expect(isValidPhoneNumber('$5055')).toBe(false);
    expect(isValidPhoneNumber('310-496-32313')).toBe(false);
    expect(isValidPhoneNumber('5553496200')).toBe(false);
    expect(isValidPhoneNumber('4444444444')).toBe(false);
  });
});

describe('Phone number pretty formatting', () => {
  it('should create a pretty phone number for different regions', () => {
    const testNumbers = {
      nullCase: {
        e164: null,
        format: findPhoneFormat({}),
      },
      us: {
        e164: '13103496200',
        regionCode: '1',
        format: findPhoneFormat({ regionCode: '1', e164: '13103496200' }),
      },
      colombia: {
        e164: '+573211234567',
        regionCode: '57',
        format: findPhoneFormat({ regionCode: '57', e164: '+573211234567' }),
      },
      germany: {
        e164: '+49 170 87654321',
        regionCode: '49',
        format: findPhoneFormat({ regionCode: '49', e164: '+4917087654321' }),
      },
      germanyAlt: {
        e164: '+49 170 8765432',
        regionCode: '49',
        format: findPhoneFormat({ regionCode: '49', e164: '+491708765432' }),
      },
    };

    expect(formatPhoneNumber(testNumbers.nullCase)).toBe(null);
    expect(formatPhoneNumber(testNumbers.us)).toBe('(310) 349-6200');
    expect(formatPhoneNumber(testNumbers.colombia)).toBe('+57 321 123 4567');
    expect(formatPhoneNumber(testNumbers.germanyAlt)).toBe('+49 17 08765432');
  });
});
