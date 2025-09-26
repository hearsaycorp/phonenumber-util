export interface RegionInfo {
  name: string;
  code: string;
  flag: string;
}

export interface StateInfo {
  name: string;
  code: string;
}

export interface TimeDetails {
  localTimeReadable: string;
  localTime24Hour: string;
  isTCPAQuietHours?: boolean;
  isCRTCQuietHours?: boolean;
  isQuietHours: boolean;
}

export interface AreaCodeTimeInfo {
  timezoneOffset: string | null;
  daylightSavings: boolean | null;
  stateHasMultipleTimezones: boolean | null;
  areaCodeHasMultipleTimezones: boolean | null;
  estimatedTime: boolean;
  state?: StateInfo;
  region?: RegionInfo;
  localTimeReadable?: string;
  localTime24Hour?: string;
  isTCPAQuietHours?: boolean;
  isCRTCQuietHours?: boolean;
  isQuietHours?: boolean;
}

export interface PhoneNumberWithGeoInfo {
  index: number;
  lastIndex: number;
  areaCode: string | null;
  e164: string | null;
  format: string | null;
  formattedNumber: string | null;
  href: string | null;
  localNumber: string | null;
  rawNumber: string | undefined; // Can be undefined, matches base PhoneParts
  regionCode: string | null;
  // Geo-specific fields (all present in actual return)
  timezoneOffset?: string | null;
  daylightSavings?: boolean | null;
  stateHasMultipleTimezones?: boolean | null;
  areaCodeHasMultipleTimezones?: boolean | null;
  estimatedTime?: boolean;
  state?: StateInfo | null;
  region?: RegionInfo | null;
  localTimeReadable?: string;
  localTime24Hour?: string;
  isTCPAQuietHours?: boolean;
  isCRTCQuietHours?: boolean;
  isQuietHours?: boolean;
}

export function isDaylightSavingTime(date?: Date): boolean;

export function formatTimeOffset(offset: string): string;

export function offsetTieBreaker(timezones: string[], date: Date): string;

export function findTimeDetails(
  offset: string,
  date: Date,
  stateName: string
): TimeDetails;

export function findTimeFromAreaCode(
  areaCode: string,
  date?: Date
): AreaCodeTimeInfo;

export function findRegionFromRegionCode(
  regionCode: string | number,
  areaCode?: string
): RegionInfo | null;

export function findAllNumbersInfoInString(
  text: string,
  date?: Date
): PhoneNumberWithGeoInfo[];
