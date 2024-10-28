export const STATE_TIMEZONES = {
  Alabama: '-06:00',
  Alaska: '-09:00',
  'American Samoa': '-11:00',
  Arizona: '-07:00',
  Arkansas: '-06:00',
  California: '-08:00',
  Colorado: '-07:00',
  Connecticut: '-05:00',
  Delaware: '-05:00',
  Florida: '-05:00',
  Georgia: '-05:00',
  Guam: '+10:00',
  Grenada: '-04:00',
  Hawaii: '-10:00',
  Idaho: '-07:00',
  Illinois: '-06:00',
  Indiana: '-05:00',
  Iowa: '-06:00',
  Kansas: '-06:00',
  Kentucky: '-05:00',
  Louisiana: '-06:00',
  Maine: '-05:00',
  Maryland: '-05:00',
  Massachusetts: '-05:00',
  Michigan: '-05:00',
  Minnesota: '-06:00',
  Mississippi: '-06:00',
  Missouri: '-06:00',
  Montana: '-07:00',
  Nebraska: '-06:00',
  Nevada: '-08:00',
  'New Hampshire': '-05:00',
  'New Jersey': '-05:00',
  'New Mexico': '-07:00',
  'New York': '-05:00',
  'North Carolina': '-05:00',
  'North Dakota': '-06:00',
  'Northern Mariana Islands': '+10:00',
  Ohio: '-05:00',
  Oklahoma: '-06:00',
  Oregon: '-08:00',
  Pennsylvania: '-05:00',
  'Puerto Rico': '-04:00',
  'Rhode Island': '-05:00',
  'South Carolina': '-05:00',
  'South Dakota': '-06:00',
  Tennessee: '-06:00',
  Texas: '-06:00',
  Utah: '-07:00',
  Vermont: '-05:00',
  'Virgin Islands': '-04:00',
  Virginia: '-05:00',
  Washington: '-08:00',
  'Washington, DC': '-04:00',
  'West Virginia': '-05:00',
  Wisconsin: '-06:00',
  Wyoming: '-07:00',
  // Canadian Provinces
  Alberta: '-07:00',
  'British Columbia': '-07:00',
  Manitoba: '-06:00',
  'New Brunswick': '-04:00',
  'Newfoundland and Labrador': '-03:30',
  'Northwest Territories': '-07:00',
  'Nova Scotia': '-04:00',
  Nunavut: '-05:00',
  Ontario: '-05:00',
  'Nova Scotia and Prince Edward Island': '-04:00',
  Quebec: '-05:00',
  Saskatchewan: '-06:00',
  Yukon: '-07:00',
};

// We refer to STATE_TIMEZONES for the default timezone for each state.
// This list is for exceptions for area codes within those states.
export const STATES_WITH_MULTIPLE_TIMEZONES = {
  Alaska: {
    907: ['-09:00', '-10:00'],
  },
  Florida: {
    850: '-06:00',
    448: '-06:00',
  },
  Idaho: {
    208: ['-07:00', '-08:00'],
    986: ['-07:00', '-08:00'],
  },
  Indiana: {
    219: ['-05:00', '-06:00'],
    574: ['-05:00', '-06:00'],
    812: ['-05:00', '-06:00'],
    930: ['-05:00', '-06:00'],
  },
  Kansas: {
    620: ['-06:00', '-07:00'],
    785: ['-06:00', '-07:00'],
  },
  Kentucky: {
    270: ['-05:00', '-06:00'],
    364: ['-05:00', '-06:00'],
  },
  Michigan: {
    906: ['-05:00', '-06:00'],
  },
  Nebraska: {
    308: ['-06:00', '-07:00'],
    402: ['-06:00', '-07:00'],
    531: ['-06:00', '-07:00'],
  },
  'North Dakota': {
    701: ['-06:00', '-07:00'],
  },
  Oregon: {
    458: ['-08:00', '-07:00'],
    541: ['-08:00', '-07:00'],
  },
  'South Dakota': {
    605: ['-06:00', '-07:00'],
  },
  Tennessee: {
    423: ['-05:00', '-06:00'],
    865: ['-05:00', '-06:00'],
  },
  Texas: {
    432: ['-06:00', '-07:00'],
    915: '-07:00',
  },
  // Canadian Provinces
  'British Columbia': {
    236: ['-06:00', '-07:00'],
    250: ['-06:00', '-07:00'],
    257: ['-06:00', '-07:00'],
    672: ['-06:00', '-07:00'],
    778: ['-06:00', '-07:00'],
  },
  Ontario: {
    807: ['-05:00', '-06:00'],
  },
  Quebec: {
    418: ['-04:00'],
  },
  'Newfoundland and Labrador': {
    709: ['-03:30', '-04:00'],
    879: ['-03:30', '-04:00'],
  },
};
