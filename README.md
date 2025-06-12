Utility for extracting and validating phone numbers. Extracts an array of phone numbers from an inputted string, validates that these numbers appear genuine and provide data about those phone numbers.

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Install from NPM](https://img.shields.io/badge/npm-@yext/phonenumber--util-blue)](https://www.npmjs.com/package/@yext/phonenumber-util)
![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat)

### Scripts

#### Install devDependencies

```bash
npm i
```

#### Formatting source code

```bash
npm run format
```

#### Linting

```bash
npm run lint
```

#### Testing

```bash
npm test
```

#### Code Coverage Report

```bash
npx vitest run --coverage
```

### Warning

The returned object will include a `rawNumber` value. This value is the return of the exact value passed to the function. No sanitization occurs with this value. If you reference this number, ensure you sanitize it _BEFORE_ passing to this function.

### Install

```bash
npm i @yext/phonenumber-util --save
```

### Usage

There is additional functionality exposed as `export`, but the primary expected use case is:

#### isValidPhoneNumber

Returns a boolean based on whether the passed number is presumed to be valid or invalid.

This checks for region code, number length and validity of region code and area code (where applicable).

```javascript
import { isValidPhoneNumber } from '@yext/phonenumber-util';
const validPhoneNumber = '3103496333';
isValidPhoneNumber(validPhoneNumber); // Returns `true` - "310" is an area code for California

const invalidPhoneNumber = '3113496333';
isValidPhoneNumber(invalidPhoneNumber); // Returns `false` - "311" is not a valid area code

const intlNumber = '+380 97 123 4567';
isValidPhoneNumber(intlNumber); // Returns `true` - "380" is the region code for Ukraine

const invalidIntlNumber = '+000 97 123 4567';
isValidPhoneNumber(invalidIntlNumber); // Returns `false` - "000" is not a valid region code
```

#### isValidPhoneNumberWithDescription

Returns an object that will contain a boolean of `isValid` which will behave exactly the same as `isValidPhoneNumber` (`true` or `false` based on whether the passed number is presumed to be valid or invalid) in addition to a string `description` that will contain one of the following values:

- `NOT_A_NUMBER` - The passed value is falsey (null, empty string, undefined or 0) or the passed value is not the expected `string` format.
- `UNKNOWN_NUMBER` - The portion of the phone number including the region code and/or local number is unrecognized, unexpected or invalid.
- `UNKNOWN_AREA_CODE` - The NANP number includes an area code of the correct length but cannot be validated. If you believe this to be in error, please file a [Github Issue](https://github.com/hearsaycorp/phonenumber-util/issues/new?title=Area+Code+Missing).
- `VALID_NUMBER` - When `isValid` is `true`, this `description` will always read `VALID_NUMBER`.
- `UNKNOWN_FORMAT` - There were issues parsing the provided number and does not appear to be a valid phone number structure.

```javascript
import { isValidPhoneNumberWithDescription } from '@yext/phonenumber-util';
const validPhoneNumber = '3103496333';
isValidPhoneNumberWithDescription(validPhoneNumber); // Returns { description: 'VALID_NUMBER', isValid: true }

const invalidPhoneNumber = '3113496333';
isValidPhoneNumberWithDescription(invalidPhoneNumber); // Returns { description: 'UNKNOWN_NUMBER', isValid: false }

const intlNumber = '+380 97 123 4567';
isValidPhoneNumberWithDescription(intlNumber); // Returns { description: 'VALID_NUMBER', isValid: true }

const invalidIntlNumber = '+000 97 123 4567';
isValidPhoneNumberWithDescription(invalidIntlNumber); // Returns { description: 'UNKNOWN_NUMBER', isValid: false }
```

#### getPhoneParts

Return an object of relevant phone number parts and information.

```javascript
import { getPhoneParts } from '@yext/phonenumber-util';
const validPhoneNumber = '3496333';
getPhoneParts(validPhoneNumber); // Returns an object, assumed to be US / Canada, region code "1" but no area code can be reliably determined.

const validPhoneNumber = '+923331234567';
getPhoneParts(validPhoneNumber); // Returns an object, assumed to be Pakistan, region code "92".
```

Example output for Pakistan ("+923331234567"):

```javascript
{
  areaCode: null,
  e164: "+923331234567",
  format: "+xx xxx xxx xxxx",
  formattedNumber: "+92 333 123 4567",
  href: "tel:+923331234567",
  localNumber: "3331234567",
  rawNumber: "+923331234567",
  regionCode: "92"
}
```

Example for US with 7 digits provided ("3496200") where no state can be determined. Note that e164 and formattedNumber also cannot be derived:

```javascript
{
  areaCode: null,
  e164: null,
  format: "(xxx) xxx-xxxx",
  formattedNumber: null,
  href: "tel:3496200",
  localNumber: "3496200",
  rawNumber: "349.6200",
  regionCode: "1"
}
```

Example for US with full area code provided ("310.349.9999"):

```javascript
{
  areaCode: "310",
  e164: "+13103499999",
  format: "(xxx) xxx-xxxx",
  formattedNumber: "(310) 349-9999",
  href: "tel:+13103499999",
  localNumber: "3103499999",
  rawNumber: "310.349.9999",
  regionCode: "1"
}
```

#### findNumbersInString

Accepts a full string of text and returns an array of phone numbers extracted from within that text.

The objects within this array will be identical to the object provided in the `getPhoneParts` above with the only exception being the addition of a `index` and `lastIndex` integer noting the start and end of the instance of that specific number within the provided string.

Example for US with full area code provided ("Hey there, my number is 310.349.9999. Please give me a call!"):

```javascript
[
  {
    index: 24,
    lastIndex: 36,
    areaCode: '310',
    e164: '+13103499999',
    format: '(xxx) xxx-xxxx',
    formattedNumber: '(310) 349-9999',
    href: 'tel:+13103499999',
    localNumber: '3103499999',
    rawNumber: '310.349.9999',
    regionCode: '1',
  },
];
```

Numbers that lack area codes will NOT be returned via `findNumbersInString` since they cannot be reliably validated.

Example for US with no area code provided ("Hey there, my number is 349.9999. Please give me a call!"):

```javascript
[];
```

## Geography / Time Functionality

In addition to the above methods, the following methods are also available via a different export.

There is additional functionality exposed as `export`, but the primary expected use case is:

#### findTimeFromAreaCode

Returns an object with geographic and time related information for a given region.

_NOTE:_ This is only applicable for United States and Canada.

```javascript
import { findTimeFromAreaCode } from '@yext/phonenumber-util/geo';
findTimeFromAreaCode('928');
```

Example output for Arizona:

```javascript
{
  areaCodeHasMultipleTimezones: false,
  daylightSavings: true,
  estimatedTime: true,
  isQuietHours: false,
  isTCPAQuietHours: false,
  localTime24Hour: "15:00:00",
  localTimeReadable: "3:00:00 PM",
  region: {
    code: "US",
    flag: "🇺🇸",
    name: "United States"
  },
  state: {
    code: "AZ",
    name: "Arizona"
  },
  stateHasMultipleTimezones: false,
  timezoneOffset: "-07:00"
}
```

```javascript
import { findTimeFromAreaCode } from '@yext/phonenumber-util/geo';
findTimeFromAreaCode('250', date); // A date object is optional, defaulting to the current time.
```

Example output for British Columbia:

```javascript
{
  areaCodeHasMultipleTimezones: true,
  daylightSavings: true,
  estimatedTime: true,
  isCRTCQuietHours: false,
  isQuietHours: false,
  localTime24Hour: "17:00:00",
  localTimeReadable: "5:00:00 PM",
  region: {
    code: "CA",
    flag: "🇨🇦",
    name: "Canada"
  },
  state: {
    code: "BC",
    name: "British Columbia"
  },
  stateHasMultipleTimezones: true,
  timezoneOffset: "-07:00"
}
```

#### findRegionFromRegionCode

```javascript
import { findRegionFromRegionCode } from '@yext/phonenumber-util/geo';
findRegionFromRegionCode('47');
```

Returns the string name of a given region name based on region code provided.

_NOTE:_ This string is provided in English only (example: "Norway" and not the region-specific name "Norge").

```javascript
{
  code: "NO",
  flag: "🇳🇴",
  name: "Norway"
}
```
