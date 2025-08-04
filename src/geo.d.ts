export function isDaylightSavingTime(date?: Date): boolean;

export function formatTimeOffset(offset: string): string;

export function offsetTieBreaker(timezones: string[], date: Date): string;

export function findTimeDetails(
  offset: string,
  date: Date,
  state: string
): {
  localTimeReadable: string;
  localTime24Hour: string;
  isTCPAQuietHours?: boolean;
  isCRTCQuietHours?: boolean;
  isQuietHours: boolean;
};

export function findTimeFromAreaCode(
  areaCode: string,
  date?: Date
): {
  timezoneOffset: string | null;
  daylightSavings: boolean | null;
  stateHasMultipleTimezones: boolean | null;
  state: { name: string; code: string } | null;
  region?: { name: string; code: string; flag: string };
  areaCodeHasMultipleTimezones: boolean | null;
  estimatedTime: boolean;
  localTime24Hour?: string;
  localTimeReadable?: string;
  isTCPAQuietHours?: boolean;
  isCRTCQuietHours?: boolean;
  isQuietHours?: boolean;
};

export function findRegionFromRegionCode(
  regionCode: string | number,
  areaCode?: string
): { name: string; code: string; flag: string } | undefined;

export function findAllNumbersInfoInString(
  text: string,
  date?: Date
): Array<object>;
