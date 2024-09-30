Utility for extracting and validating phone numbers. Extracts an array of phone numbers from an inputted string, validates that these numbers appear genuine and provide data about those phone numbers.

### Scripts

#### Install dependencies

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

### Usage

There is additional functionality exposed as `export`, but the primary expected use case is:

#### isValidPhoneNumber

Returns a boolean based on whether the passed number is presumed to be valid or invalid.

This checks for region code, number length and validity of region code and area code (where applicable).

```javascript
import { isValidPhoneNumber } from 'phonenumber-util';
const validPhoneNumber = '3103496333';
isValidPhoneNumber(validPhoneNumber); // Returns `true` - "310" is an area code for California

const invalidPhoneNumber = '3113496333';
isValidPhoneNumber(invalidPhoneNumber); // Returns `false` - "311" is not a valid area code

const intlNumber = '+380 97 123 4567';
isValidPhoneNumber(intlNumber); // Returns `true` - "380" is the region code for Ukraine

const invalidIntlNumber = '+666 97 123 4567';
isValidPhoneNumber(invalidIntlNumber); // Returns `false` - "666" is not a valid region code
```

#### getPhoneParts

Return an object of relevant phone number parts and information.

```javascript
import { getPhoneParts } from 'phonenumber-util';
const validPhoneNumber = '3496333';
getPhoneParts(validPhoneNumber); // Returns an object, assumed to be US / Canada, region code "1" but no area code can be reliably determined.

const validPhoneNumber = '"+923331234567"';
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
  e164: "+13103103499999",
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
    e164: '+13103103499999',
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
