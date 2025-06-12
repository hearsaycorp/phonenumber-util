export interface PhoneParts {
  areaCode: string | null;
  e164: string | null;
  format: string | null;
  formattedNumber: string | null;
  href: string | null;
  localNumber: string | null;
  rawNumber: string;
  regionCode: string | null;
}

export interface PhoneValidationResult {
  description: 'NOT_A_NUMBER' | 'VALID_NUMBER' | 'UNKNOWN_NUMBER' | 'UNKNOWN_AREA_CODE' | 'UNKNOWN_FORMAT';
  isValid: boolean;
}

export function formatPhoneNumberForE164(
  phoneParts: Pick<PhoneParts, 'regionCode' | 'areaCode' | 'localNumber'>
): string | null;

export function formatPhoneNumberLink(
  phoneParts: Pick<PhoneParts, 'regionCode' | 'areaCode' | 'localNumber'>
): string | null;

export function isValidPhoneNumber(phoneNumber: string): boolean;

export function isValidPhoneNumberWithDescription(phoneNumber: string): PhoneValidationResult;

export function getPhoneParts(phoneNumber?: string | null): PhoneParts;

export function sanitizeRawNumber(phoneNumber: string): string;

export function findNumbersInString(text: string): Array<{
  index: number;
  lastIndex: number;
} & PhoneParts>;

export function findPhoneFormat(params: {
  regionCode: string;
  e164: string;
}): string;

export function formatPhoneNumber(params: {
  format: string;
  e164: string;
  regionCode: string;
}): string | null;
