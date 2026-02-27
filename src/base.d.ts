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

export interface PhoneNumberInText extends PhoneParts {
  index: number;
  lastIndex: number;
}

export function formatPhoneNumberForE164(
  phoneParts: Pick<PhoneParts, 'regionCode' | 'areaCode' | 'localNumber'>
): string | null;

export function formatPhoneNumberLink(
  phoneParts: Pick<PhoneParts, 'regionCode' | 'areaCode' | 'localNumber'>
): string | null;

export function isValidPhoneNumber(phoneNumber?: string | null | undefined): boolean;

export function isValidPhoneNumberWithDescription(phoneNumber?: string | null | undefined): PhoneValidationResult;

export function getPhoneParts(phoneNumber?: string | null | undefined): PhoneParts;

export function sanitizeRawNumber(phoneNumber?: string | null | undefined): string;

export function findNumbersInString(text?: string | null | undefined): PhoneNumberInText[];

export function findPhoneFormat(params: {
  regionCode?: string | null;
  e164?: string | null;
}): string;

export function formatPhoneNumber(params: {
  format?: string | null;
  e164?: string | null;
  regionCode?: string | null;
}): string | null;
