// For each region, provide a pretty format.  Some regions may have multiple formats, in which case an array can be used.  Each "x" will be replaced with a digit when the number of digits matches the number of "x"s in the format.
// If no format is found with a correct matching length, a sanitized e164 is returned as a fall-back.
export const PHONE_FORMATS = {
  1: '(xxx) xxx-xxxx', // US, Canada, and NANP regions
  7: '+x xxx xxx-xx-xx', // Russia, Kazakhstan
  20: '+xx xxx xxx xxxx', // Egypt
  27: '+xx xx xxx xxxx', // South Africa
  30: '+xx xxx xxx xxxx', // Greece
  31: '+xx xx xxxxxxxx', // Netherlands
  32: '+xx xxx xx xx xx', // Belgium
  33: '+xx x xx xx xx xx', // France
  34: '+xx xxx xxx xxx', // Spain
  36: '+xx xxx xxx xxx', // Hungary
  39: '+xx xxx xxx xxxx', // Italy
  40: '+xx xxx xxx xxx', // Romania
  41: '+xx xxx xxx xx xx', // Switzerland
  43: [
    '+xx xxxx xxx-xxx', // 10 digits (mobile)
    '+xx xxxx xxx-xxxx', // 11 digits
  ], // Austria
  44: [
    '+xx xxxx xxxxxx', // 10 digits (landline)
    '+xx xxxxx xxxxxx', // 11 digits (mobile)
  ], // United Kingdom
  45: '+xx xx xx xx xx', // Denmark
  46: '+xx xx-xxx xx xx', // Sweden
  47: '+xx xxx xx xxx', // Norway
  48: '+xx xxx xxx xxx', // Poland
  49: [
    '+xx xxx xxxxxxx', // 10 digits (standard)
    '+xx xxxx xxxxxxxx', // 11 digits (mobile)
  ], // Germany
  51: '+xx xxx xxx xxx', // Peru
  52: [
    '+xx xxx xxx xxxx', // 10 digits (standard)
    '+xx xx xx xxxx xxxx', // 12 digits (with area code)
  ], // Mexico
  53: '+xx x xxx xxxx', // Cuba
  54: [
    '+xx xxx-xxx-xxxx', // 10 digits (mobile and Buenos Aires)
    '+xx xxxx-xx-xxxx', // 11 digits (mobile with 9 prefix)
  ], // Argentina
  55: [
    '+xx xx xxxx-xxxx', // 10 digits (standard)
    '+xx xx xxxxx-xxxx', // 11 digits (mobile)
  ], // Brazil
  56: '+xx x xxxx xxxx', // Chile
  57: '+xx xxx xxx xxxx', // Colombia
  58: '+xx xxx-xxxxxxx', // Venezuela
  60: '+xx xx-xxx xxxx', // Malaysia
  61: [
    '+xx xx xxxx xxxx', // 10 digits (standard)
    '+xx xxx xxx xxx', // 9 digits (some services)
  ], // Australia
  62: [
    '+xx xxx-xxx-xxx', // 9 digits (landline)
    '+xx xxx-xxx-xxxx', // 10-12 digits (mobile)
  ], // Indonesia
  63: [
    '+xx xxxx xxxx', // 8 digits (landline)
    '+xx xxxx xxx xxxx', // 11 digits (mobile)
  ], // Philippines
  64: '+xx xx xxx xxxx', // New Zealand
  65: '+xx xxxx xxxx', // Singapore
  66: [
    '+xx xx xxx xxxx', // 9 digits (landline)
    '+xx xxx-xxx-xxxx', // 10 digits (mobile)
  ], // Thailand
  81: [
    '+xx xx-xxxx-xxxx', // 10 digits (landline)
    '+xx xxx-xxxx-xxxx', // 11 digits (mobile)
  ], // Japan
  82: '+xx xx-xxxx-xxxx', // South Korea
  84: [
    '+xx xx xx xxx xx', // 10 digits (standard)
    '+xx xxx xxxx xxxx', // 11 digits (mobile)
  ], // Vietnam
  86: [
    '+xx xxx xxxx xxxx', // 11 digits (mobile)
    '+xx xxxx xxxx xxxx', // 12 digits (special services)
  ], // China
  90: '+xx xxx xxx xx xx', // Turkey
  91: [
    '+xx xxxxx xxxxx', // 10 digits (standard)
    '+xx xxxxx xxxxxx', // 11 digits (with area code)
  ], // India
  92: '+xx xxx xxx xxxx', // Pakistan
  93: '+xx xx xxx xxxx', // Afghanistan
  94: '+xx xx xxx xxxx', // Sri Lanka
  95: '+xx xx xxx xxxx', // Myanmar
  98: '+xx xxx xxx xxxx', // Iran
  211: '+xxx xx xxx xxxx', // South Sudan
  212: '+xxx xxx xx xx xx', // Morocco
  213: '+xxx xx xx xx xx', // Algeria
  216: '+xxx xx xxx xxx', // Tunisia
  218: '+xxx xx xxx xxxx', // Libya
  220: '+xxx xxx xxxx', // Gambia
  221: '+xxx xx xxx xx xx', // Senegal
  222: '+xxx xxxx xxxx', // Mauritania
  223: '+xxx xxxx xxxx', // Mali
  224: '+xxx xxx xxx xxx', // Guinea
  225: '+xxx xx xx xx xxxx', // Côte d'Ivoire
  226: '+xxx xx xx xx xx', // Burkina Faso
  227: '+xxx xx xx xx xx', // Niger
  228: '+xxx xx xxx xxx', // Togo
  229: '+xxx xx xx xx xx', // Benin
  230: '+xxx xxxx xxxx', // Mauritius
  231: '+xxx xx xxx xxxx', // Liberia
  232: '+xxx xx xxx xxx', // Sierra Leone
  233: '+xxx xxx xxx xxxx', // Ghana
  234: '+xxx xxx xxx xxxx', // Nigeria
  235: '+xxx xx xx xx xx', // Chad
  236: '+xxx xx xx xx xx', // Central African Republic
  237: '+xxx xxx xx xx xx', // Cameroon
  238: '+xxx xxx xxxx', // Cape Verde
  239: '+xxx xx xxxxx', // São Tomé and Príncipe
  240: '+xxx xxx xxx xxx', // Equatorial Guinea
  241: '+xxx x xx xx xx', // Gabon
  242: '+xxx xx xxx xxxx', // Republic of the Congo
  243: '+xxx xxx xxx xxx', // Democratic Republic of the Congo
  244: '+xxx xxx xxx xxx', // Angola
  245: '+xxx xxx xxxx', // Guinea-Bissau
  246: '+xxx xxx xxxx', // British Indian Ocean Territory
  247: '+xxx xxxxx', // Ascension Island
  248: '+xxx x xx xx xx', // Seychelles
  249: '+xxx xx xxx xxxx', // Sudan
  250: '+xxx xxx xxx xxx', // Rwanda
  251: '+xxx xx xxx xxxx', // Ethiopia
  252: '+xxx xx xxx xxx', // Somalia
  253: '+xxx xx xx xx xx', // Djibouti
  254: '+xxx xxx xxx xxx', // Kenya
  255: '+xxx xxx xxx xxx', // Tanzania
  256: '+xxx xxx xxx xxx', // Uganda
  257: '+xxx xx xx xxxx', // Burundi
  258: '+xxx xx xxx xxxx', // Mozambique
  260: '+xxx xx xxx xxxx', // Zambia
  261: '+xxx xx xx xxx xx', // Madagascar
  262: '+xxx xxx xx xx xx', // Réunion, Mayotte
  263: '+xxx xx xxx xxxx', // Zimbabwe
  264: '+xxx xx xxx xxxx', // Namibia
  265: '+xxx xxx xx xx xx', // Malawi
  266: '+xxx xx xxx xxx', // Lesotho
  267: '+xxx xx xxx xxx', // Botswana
  268: '+xxx xxxx xxxx', // Eswatini
  269: '+xxx xxx xx xx', // Comoros
  290: '+xxx xxxx', // Saint Helena
  291: '+xxx x xxx xxx', // Eritrea
  297: '+xxx xxx xxxx', // Aruba
  298: '+xxx xxx xxx', // Faroe Islands
  299: '+xxx xx xx xx', // Greenland
  350: '+xxx xxxx xxxx', // Gibraltar
  351: '+xxx xxx xxx xxx', // Portugal
  352: '+xxx xxx xxx xxx', // Luxembourg
  353: [
    '+xxx xxx xxx xxxx', // 10 digits (standard)
    '+xxx xxx xxx xxxxx', // 11 digits (some services)
  ], // Ireland
  354: '+xxx xxx xxxx', // Iceland
  355: '+xxx xx xxx xxxx', // Albania
  356: '+xxx xxxx xxxx', // Malta
  357: '+xxx xx xxxxxx', // Cyprus
  358: ['+xxx xxx xxx xxxx', '+xxx xx xxx xxxx'], // Finland
  359: '+xxx xxx xxx xxx', // Bulgaria
  370: '+xxx xxx xxxxx', // Lithuania
  371: '+xxx xxxx xxxx', // Latvia
  372: ['+xxx xxxx xxxx', '+xxx xxx xxxx'], // Estonia
  373: '+xxx xxx xx xxx', // Moldova
  374: '+xxx xx xxx xxx', // Armenia
  375: '+xxx xx xxx-xx-xx', // Belarus
  376: '+xxx xxx xxx', // Andorra
  377: '+xxx xxxx xxx xxx', // Monaco
  378: '+xxx xxx xx xx xx', // San Marino
  379: '+xxx xx xxxxxx', // Vatican City
  380: '+xxx xxx xxx xxxx', // Ukraine
  381: '+xxx xx xxx xxxx', // Serbia
  382: '+xxx xx xxx xxx', // Montenegro
  383: '+xxx xx xxx xxx', // Kosovo
  385: '+xxx xx xxx xxxx', // Croatia
  386: '+xxx xx xxx xxx', // Slovenia
  387: '+xxx xx xxx xxx', // Bosnia and Herzegovina
  389: '+xxx xx xxx xxx', // North Macedonia
  420: '+xxx xxx xxx xxx', // Czech Republic
  421: '+xxx xxx xxx xxx', // Slovakia
  423: '+xxx xxx xxx xx xx', // Liechtenstein
  473: '+x xxx xxx xxxx', // Grenada
  500: '+xxx xxxxx', // Falkland Islands
  501: '+xxx xxx-xxxx', // Belize
  502: '+xxx x xxx xxxx', // Guatemala
  503: '+xxx xxxx xxxx', // El Salvador
  504: '+xxx xxxx-xxxx', // Honduras
  505: '+xxx xxxx xxxx', // Nicaragua
  506: '+xxx xxxx xxxx', // Costa Rica
  507: '+xxx xxxx-xxxx', // Panama
  508: '+xxx xx xx xx', // Saint Pierre and Miquelon
  509: '+xxx xxxx xxxx', // Haiti
  590: '+xxx (xxx) xxx-xxxx', // Guadeloupe, Saint Barthélemy, Saint Martin
  591: '+xxx x xxx xxxx', // Bolivia
  592: '+xxx xxx xxxx', // Guyana
  593: '+xxx xx xxx xxxx', // Ecuador
  594: '+xxx xxxx xx xx xx', // French Guiana
  595: '+xxx xxx xxx xxx', // Paraguay
  596: '+xxx (xxx) xxx-xxxx', // Martinique
  597: '+xxx xxx-xxxx', // Suriname
  598: '+xxx x xxx xx xx', // Uruguay
  599: [
    '+xxx x xxx xxxx', // Netherlands Antilles format 1
    '+xxx xxx xxxx', // Netherlands Antilles format 2
  ],
  670: '+xxx xxxx xxxx', // Timor-Leste
  672: [
    '+xxx xxxxx', // Norfolk Island
    '+xxx xx xxxx', // Australian External Territories
  ],
  673: '+xxx xxx xxxx', // Brunei
  674: '+xxx xxx xxxx', // Nauru
  675: '+xxx xxx xxxx', // Papua New Guinea
  676: '+xxx xxxxx', // Tonga
  677: '+xxx xxxxxxx', // Solomon Islands
  678: '+xxx xx xxxxx', // Vanuatu
  679: '+xxx xxx xxxx', // Fiji
  680: '+xxx xxx xxxx', // Palau
  681: '+xxx xx xx xx', // Wallis and Futuna
  682: '+xxx xx xxx', // Cook Islands
  683: '+xxx xxxx', // Niue
  685: '+xxx xxxxx', // Samoa
  686: '+xxx xxxxx', // Kiribati
  687: '+xxx xx.xx.xx', // New Caledonia
  688: '+xxx xxxxx', // Tuvalu
  689: '+xxx xx xx xx', // French Polynesia
  690: '+xxx xxxx', // Tokelau
  691: '+xxx xxx xxxx', // Micronesia
  692: '+xxx xxx xxxx', // Marshall Islands
  850: '+xxx xx xxx xxxx', // North Korea
  852: '+xxx xxxx xxxx', // Hong Kong
  853: '+xxx xxxx xxxx', // Macau
  855: '+xxx xx xxx xxx', // Cambodia
  856: '+xxx xx xx xxx xxx', // Laos
  880: '+xxx xxxx-xxxxxx', // Bangladesh
  886: '+xxx xxxx-xxx-xxx', // Taiwan
  960: '+xxx xxx-xxxx', // Maldives
  961: '+xxx xx xxx xxx', // Lebanon
  962: '+xxx x xxxx xxxx', // Jordan
  963: '+xxx xx xxxx xxx', // Syria
  964: '+xxx xxxx xxx xxxx', // Iraq
  965: '+xxx xxxx xxxx', // Kuwait
  966: '+xxx xx xxx xxxx', // Saudi Arabia
  967: '+xxx xxx xxx xxx', // Yemen
  968: '+xxx xxxx xxxx', // Oman
  970: '+xxx xxx xx xxxx', // Palestine
  971: '+xxx xx xxx xxxx', // United Arab Emirates
  972: [
    '+xxx xx-xxx-xxxx', // 9 digits (standard)
    '+xxx xxx-xxx-xxxx', // 10 digits (mobile)
  ], // Israel
  973: '+xxx xxxx xxxx', // Bahrain
  974: '+xxx xxxx xxxx', // Qatar
  975: '+xxx x xxx xxxx', // Bhutan
  976: '+xxx xxxx xxxx', // Mongolia
  977: '+xxx xxx-xxxxxxx', // Nepal
  992: ['+xxx xxx xx xxxx', '+xxx xxx xxx xxxx'], // Tajikistan
  993: '+xxx xx xxxxxx', // Turkmenistan
  994: '+xxx xx xxx xx xx', // Azerbaijan
  995: '+xxx xxx xxx xxx', // Georgia
  996: '+xxx xxx xxx xxx', // Kyrgyzstan
  998: ['+xxx xx xxx xx xx', '+xxx xx xxxxxxx'], // Uzbekistan
};
