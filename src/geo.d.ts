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
  state: string | null;
  areaCodeHasMultipleTimezones: boolean | null;
  estimatedTime: boolean;
};

export function findRegionFromRegionCode(regionCode: string): string | undefined;
