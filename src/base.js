import { AREA_CODE_LIST } from './areaCodeList.js';
import { PHONE_FORMATS } from './phoneFormats.js';

const DASHES = '-\u2010-\u2015\u2212\u30FC\uFF0D';
const SLASHES = '\uFF0F/';
const DOTS = '\uFF0E.';
const WHITESPACE = ' \u00A0\u00AD\u200B\u2060\u3000';
const BRACKETS = '()\\[\\]\uFF08\uFF09\uFF3B\uFF3D';
const TILDES = '~\u2053\u223C\uFF5E';
const VALID_DIGITS = '0-9';
const PLUS_CHARS = '\\+';

const VALID_PUNCTUATION = `${DASHES}${SLASHES}${DOTS}${WHITESPACE}${BRACKETS}${TILDES}`;

const VALID_PHONE_NUMBER = new RegExp(
  `(?:(?:${PLUS_CHARS}?[${VALID_DIGITS}]{1,3}[${VALID_PUNCTUATION}]*)?` + // Country code (optional)
    `(?:\\(?[${VALID_DIGITS}]{1,4}\\)?[${VALID_PUNCTUATION}]*)?` + // Area code (optional)
    `(?:[${VALID_DIGITS}]{1,4}[${VALID_PUNCTUATION}]*){1,5}` + // Phone number segments
    `[${VALID_DIGITS}]{1,4})`, // Final segment
);

/**
 * Formats a phone number into the E.164 international standard.
 *
 * This function takes the components of a phone number and formats it into the
 * E.164 standard, which includes the region code and the local number. The format
 *
 * @param {Object} phoneParts - An object containing parts of the phone number.
 * @param {string} phoneParts.areaCode - The area code of the phone number.
 * @param {string} phoneParts.regionCode - The region code of the phone number.
 * @param {string} phoneParts.localNumber - The local part of the phone number.
 * @returns {string|null} The formatted phone number in E.164 format, or null if the region code or local number is not present.
 */
export const formatPhoneNumberForE164 = ({
  regionCode,
  areaCode,
  localNumber,
}) => {
  if ((regionCode !== '1' || areaCode) && regionCode && localNumber) {
    // A US number passed with area code decoupled from the localNumber.  Assumes the format:
    // regionCode: 1, areaCode: 310, localNumber: 3496200
    if (regionCode === '1' && areaCode && localNumber.length === 7) {
      return `+1${areaCode}${localNumber}`;
    }
    // Combine the region code and the formatted local number - this assumes US localNumber includes area code
    // This is for all intl and all US with format:
    // regionCode: 1, localNumber: 3103496200
    return areaCode ? `+1${localNumber}` : `+${regionCode}${localNumber}`;
  }

  return null;
};

/**
 * Formats a phone number into a tel: link format.
 *
 * This function takes the components of a phone number and formats it into a
 * `tel:` link, which can be used in HTML for clickable phone numbers.
 *
 * @param {Object} phoneParts - An object containing parts of the phone number.
 * @param {string} phoneParts.regionCode - The region code of the phone number.
 * @param {string} phoneParts.areaCode - The area code of the phone number.
 * @param {string} phoneParts.localNumber - The local part of the phone number.
 * @returns {string|null} The formatted phone number link, or null if the local number is not present.
 */
export const formatPhoneNumberLink = ({
  regionCode,
  areaCode,
  localNumber,
}) => {
  if (localNumber) {
    if (regionCode === '1') {
      return areaCode
        ? `tel:+1${areaCode}${localNumber}`
        : `tel:${localNumber}`;
    } else {
      return `tel:+${regionCode}${localNumber}`;
    }
  }

  return null;
};

/**
 * Validates a phone number based on a regex pattern and the ability to extract useful parts.
 *
 * This function first checks the phone number against a predefined regular expression pattern
 * to determine its validity. It then uses the `getPhoneParts` function to extract relevant parts
 * of the phone number and further confirms its validity based on the presence of these parts.
 *
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} Returns true if the phone number is valid, otherwise false.
 */
export const isValidPhoneNumber = (phoneNumber) => {
  // Check the big chunky regex for phone validity
  const phonePattern = new RegExp(VALID_PHONE_NUMBER, 'ig');
  if (phonePattern.test(phoneNumber)) {
    const phoneParts = getPhoneParts(phoneNumber);

    // Also check for phone validity by ability to extract useful parts.
    // This will also confirm area codes / region codes are valid.
    if (
      phoneParts &&
      phoneParts.localNumber &&
      phoneParts.regionCode &&
      (phoneParts.areaCode || phoneParts.regionCode !== '1')
    ) {
      return true;
    }
  }
  return false;
};

/**
 * Extracts and formats parts of a phone number, including area code, region code, and local number.
 *
 * This function takes a phone number and optionally a region code, then processes it to extract
 * relevant parts like the area code, region code, and local number. It also validates the phone
 * number and ensures it conforms to specific formats, particularly for US numbers.
 *
 * @param {string} phoneNumber - The phone number to process.
 * @returns {Object} An object containing relevant phone number information.
 * @property {string|null} areaCode - The area code of the phone number.
 * @property {string|null} e164 - The E.164 formatted version of the phone number.
 * @property {string|null} href - A formatted phone number link.
 * @property {string|null} localNumber - The local part of the phone number.
 * @property {string} rawNumber - The original raw phone number.  Unsanitized.
 * @property {string|null} regionCode - The region code of the phone number.
 */
export const getPhoneParts = (phoneNumber) => {
  const regionCodeLengths = [1, 2, 3];
  let phoneParts = {
    areaCode: null,
    e164: null,
    format: null,
    formattedNumber: null,
    href: null,
    localNumber: null,
    rawNumber: phoneNumber,
    regionCode: null,
  };

  if (!phoneNumber) {
    return phoneParts;
  }

  // Remove all non-digit characters except the leading '+'
  let strippedPhoneNumber = sanitizeRawNumber(phoneNumber);

  // The shortest length for a phone number (that we care about) is 7 digits.
  // The longest phone number is 15 digits.
  if (
    strippedPhoneNumber.replace(/\D/g, '').length >= 7 &&
    strippedPhoneNumber.replace(/\D/g, '').length <= 15
  ) {
    // Extract the region code if not explicitly provided and it is part of the
    // phone number
    if (strippedPhoneNumber.startsWith('+')) {
      // US number formatted with +12065551234
      if (
        strippedPhoneNumber.length === 12 &&
        strippedPhoneNumber.startsWith('+1')
      ) {
        phoneParts.regionCode = '1';
        phoneParts.localNumber = strippedPhoneNumber.slice(2); // Strip out the "+1"
        phoneParts.areaCode = phoneParts.localNumber.slice(0, 3); // Grab the area code
      }
      // Otherwise, an intl number which may have 1, 2 or 3 digit region
      else if (
        strippedPhoneNumber.length >= 7 &&
        strippedPhoneNumber.length <= 14
      ) {
        // Try to match the phone number with each possible region code length
        for (let length of regionCodeLengths) {
          let match = strippedPhoneNumber.match(
            new RegExp(`^\\+(\\d{${length}})(\\d+)`),
          );
          if (match && PHONE_FORMATS[match[1]]) {
            phoneParts.regionCode = match[1];
            phoneParts.localNumber = match[2];
            break;
          }
        }
      }
    }
    // If no region code is provided, assume US with the format 3109309000 after being stripped of non-numeric values.
    // We'll try and derive the area code by looking it up against the known area codes.
    else if (strippedPhoneNumber.length === 10) {
      if (AREA_CODE_LIST.indexOf(strippedPhoneNumber.substring(0, 3)) !== -1) {
        phoneParts.regionCode = '1';
        phoneParts.areaCode = strippedPhoneNumber.substring(0, 3);
        phoneParts.localNumber = strippedPhoneNumber.substring(3);
      }
    }
    // If no region code is provided, assume US with the format 9309000 after being stripped of non-numeric values.
    // This is not able to be validated or formatted since it lacks an area code.
    else if (strippedPhoneNumber.length === 7) {
      phoneParts.regionCode = '1';
      phoneParts.localNumber = strippedPhoneNumber;
    }

    // Default to region code 1 for US numbers if none is provided
    if (
      strippedPhoneNumber.length === 11 &&
      strippedPhoneNumber.startsWith('1')
    ) {
      phoneParts.regionCode = '1';
      phoneParts.localNumber = strippedPhoneNumber.slice(1);
      phoneParts.areaCode = phoneParts.localNumber.slice(0, 3);
    }

    // US likes a format that isn't as common
    if (phoneParts.localNumber && phoneParts.regionCode === '1') {
      // Specific format for US numbers with areaCode (206-930-9000).
      if (phoneParts.localNumber.length === 10) {
        phoneParts.areaCode = phoneParts.localNumber.slice(0, 3);
      }
    } else if (phoneParts.localNumber) {
      // General format for shorter numbers
      phoneParts.localNumber = phoneParts.localNumber.replace(/\D/g, '');
    }
  }

  // Unset any known invalid area codes.  We only care about region 1 (USA).
  if (
    AREA_CODE_LIST.indexOf(phoneParts.areaCode) === -1 ||
    phoneParts.regionCode !== '1'
  ) {
    phoneParts.areaCode = null;
  }

  if (phoneParts.localNumber && phoneParts.regionCode) {
    phoneParts.href = formatPhoneNumberLink(phoneParts);
    phoneParts.e164 = formatPhoneNumberForE164(phoneParts);
    phoneParts.format = findPhoneFormat(phoneParts);
    phoneParts.formattedNumber = formatPhoneNumber(phoneParts);

    // If there are left over x's, the formatting ran into something unexpected.
    // This may be ok depending on the region and their phone number formats.
    // But it does mean we don't want to display this number.
    if (
      phoneParts.formattedNumber &&
      phoneParts.formattedNumber.indexOf('x') !== -1
    ) {
      // Since `rawNumber` isn't sanitized, we'll use a simple format that we
      // are assured to be safe.
      phoneParts.formattedNumber = strippedPhoneNumber;
    }
  }

  return phoneParts;
};

/**
 * Sanitizes a phone number by removing all non-numeric characters
 * except for the leading plus sign (+) if it exists.
 *
 * @param {string} phoneNumber - The raw phone number input.
 * @returns {string} - The sanitized phone number containing only digits and an optional leading plus sign.
 */
export const sanitizeRawNumber = (phoneNumber) => {
  return phoneNumber.replace(/(?!^\+)\D/g, '');
};

/**
 * Finds valid phone numbers in a given text string.
 *
 * This function uses a regular expression to locate potential phone numbers in the text.
 * Valid matches are then processed to extract relevant information.
 *
 * @param {string} text - The text string to search for phone numbers.
 * @returns {Array<Object>} An array of objects, each containing the index, lastIndex, and parts of the valid phone numbers found.
 * @property {number} index - The starting index of the phone number in the text.
 * @property {number} lastIndex - The ending index of the phone number in the text.
 * @property {Object} phoneParts - The parts of the phone number, as returned by the getPhoneParts function.
 */
export const findNumbersInString = (text) => {
  const regex = new RegExp(VALID_PHONE_NUMBER, 'g');
  let matches = [];
  let match;

  // Regex finds possible matches.  Go through each of them to further validate and extract relevant info.
  while ((match = regex.exec(text)) !== null) {
    let number = match[0].trim(); // Access the captured group

    // Ensure number is not just a partial match by checking it contains at least 6 digits.
    if (
      number.replace(new RegExp(`[${VALID_PUNCTUATION}]`, 'g'), '').length >= 6
    ) {
      const index = text.indexOf(number);
      const lastIndex = index + number.length;
      const phoneParts = getPhoneParts(number);

      // Presumed phone numbers may be invalidated by omission of formattedNumber from getPhoneParts.
      // This will prevent short-numbers that ommit area code from being fetched from a larger string since it may be unreliable.
      if (phoneParts.formattedNumber) {
        matches.push({
          index,
          lastIndex,
          ...phoneParts,
        });
      }
    }
  }

  return matches;
};

/**
 * Finds the phone number format for a given region code.
 *
 * This function retrieves the phone number format corresponding to the provided
 * region code from the PHONE_FORMATS object. If the region code is not found,
 * it defaults to the format for region code '1' (US).
 *
 * @param {Object} params - The parameters for formatting the phone number.
 * @param {string} regionCode - The region code to look up the phone number format.
 * @param {string} params.e164 - The E.164 formatted phone number to format. Example: `+12065551234`.
 * @returns {string} The phone number format for the given region code in the format of "(xxx) xxx-xxxx".
 */
export const findPhoneFormat = ({ regionCode, e164 }) => {
  const formatRaw = PHONE_FORMATS[regionCode];
  const numberLength = e164 && e164.replace(/\D/g, '').length;
  // If the region isn't defined or no matching length is found in the PHONE_FORMATS, we'll fall back to the US format.
  let format = PHONE_FORMATS[1];

  if (formatRaw && numberLength) {
    // The PHONE_FORMATS will have arrays for regions with inconsistent number lengths / formats.
    if (Array.isArray(formatRaw)) {
      formatRaw.forEach((value) => {
        const templateLength = value.split('x').length - 1;
        if (numberLength === templateLength) {
          format = value;
        }
      });
    }
    // Some region (such as the US) will have a consistent format, so we expect a string.
    else if (formatRaw) {
      format = formatRaw;
    }
  }

  return format;
};

/**
 * Formats a phone number according to a specified format.
 *
 * This function takes a desired format string and an E.164 formatted phone number,
 * then formats the phone number according to the provided format. The format string
 * uses 'x' characters to represent digits from the phone number.
 *
 * @param {Object} params - The parameters for formatting the phone number.
 * @param {string} params.format - The desired format for the phone number. Example: `(xxx) xxx-xxxx`.
 * @param {string} params.e164 - The E.164 formatted phone number to format. Example: `+12065551234`.
 * @returns {string|null} The formatted phone number, or null if the E.164 number or format is not provided.
 */
export const formatPhoneNumber = ({ format, e164 }) => {
  let formattedNumber = '';

  if (e164 && format) {
    // Remove the leading '+' and let the format handle it.
    const strippedPhone = e164.replace(/\D/g, '');
    let phoneIndex = strippedPhone.length - 1;

    // Traverse backward so we can omit country code in some formats (like US).
    for (let i = format.length; i >= 0; i--) {
      if (format[i]) {
        if (format[i].toLowerCase() === 'x' && strippedPhone[phoneIndex]) {
          formattedNumber = strippedPhone[phoneIndex] + formattedNumber;
          phoneIndex -= 1;
        } else {
          formattedNumber = format[i] + formattedNumber;
        }
      }
    }
  }

  return formattedNumber || null;
};