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

export function formatPhoneNumberForE164(
  phoneParts: Pick<PhoneParts, 'regionCode' | 'areaCode' | 'localNumber'>
): string | null;

export function formatPhoneNumberLink(
  phoneParts: Pick<PhoneParts, 'regionCode' | 'areaCode' | 'localNumber'>
): string | null;

export function isValidPhoneNumber(phoneNumber: string): boolean;

export function getPhoneParts(phoneNumber: string): PhoneParts;

export function sanitizeRawNumber(phoneNumber: string): string;

export function findNumbersInString(text: string): Array<{
  index: number;
  lastIndex: number;
  phoneParts: PhoneParts;
}>;

export function findPhoneFormat(regionCode: string): string;

export function formatPhoneNumber(params: {
  format: string;
  e164: string;
}): string | null;
