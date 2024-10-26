// We have a lot of US / Canada numbers.  Just define them once to avoid redundant code.
const UNITED_STATES = { name: 'United States', code: 'US', flag: '🇺🇸' };
const CANADA = { name: 'Canada', code: 'CA', flag: '🇨🇦' };

export const AREA_CODES = {
  // Toll Free / Not Geographic
  800: { name: 'Toll-free', region: { name: 'United States', code: 'US' } },
  833: { name: 'Toll-free', region: { name: 'United States', code: 'US' } },
  888: { name: 'Toll-free', region: { name: 'United States', code: 'US' } },
  877: { name: 'Toll-free', region: { name: 'United States', code: 'US' } },
  866: { name: 'Toll-free', region: { name: 'United States', code: 'US' } },
  855: { name: 'Toll-free', region: { name: 'United States', code: 'US' } },
  // US Numbers
  205: { name: 'Alabama', code: 'AL', region: UNITED_STATES },
  251: { name: 'Alabama', code: 'AL', region: UNITED_STATES },
  256: { name: 'Alabama', code: 'AL', region: UNITED_STATES },
  334: { name: 'Alabama', code: 'AL', region: UNITED_STATES },
  659: { name: 'Alabama', code: 'AL', region: UNITED_STATES },
  938: { name: 'Alabama', code: 'AL', region: UNITED_STATES },
  907: { name: 'Alaska', code: 'AK', region: UNITED_STATES },
  480: { name: 'Arizona', code: 'AZ', region: UNITED_STATES },
  520: { name: 'Arizona', code: 'AZ', region: UNITED_STATES },
  602: { name: 'Arizona', code: 'AZ', region: UNITED_STATES },
  623: { name: 'Arizona', code: 'AZ', region: UNITED_STATES },
  928: { name: 'Arizona', code: 'AZ', region: UNITED_STATES },
  479: { name: 'Arkansas', code: 'AR', region: UNITED_STATES },
  501: { name: 'Arkansas', code: 'AR', region: UNITED_STATES },
  870: { name: 'Arkansas', code: 'AR', region: UNITED_STATES },
  209: { name: 'California', code: 'CA', region: UNITED_STATES },
  213: { name: 'California', code: 'CA', region: UNITED_STATES },
  279: { name: 'California', code: 'CA', region: UNITED_STATES },
  310: { name: 'California', code: 'CA', region: UNITED_STATES },
  323: { name: 'California', code: 'CA', region: UNITED_STATES },
  341: { name: 'California', code: 'CA', region: UNITED_STATES },
  350: { name: 'California', code: 'CA', region: UNITED_STATES },
  408: { name: 'California', code: 'CA', region: UNITED_STATES },
  415: { name: 'California', code: 'CA', region: UNITED_STATES },
  424: { name: 'California', code: 'CA', region: UNITED_STATES },
  442: { name: 'California', code: 'CA', region: UNITED_STATES },
  510: { name: 'California', code: 'CA', region: UNITED_STATES },
  530: { name: 'California', code: 'CA', region: UNITED_STATES },
  559: { name: 'California', code: 'CA', region: UNITED_STATES },
  562: { name: 'California', code: 'CA', region: UNITED_STATES },
  619: { name: 'California', code: 'CA', region: UNITED_STATES },
  626: { name: 'California', code: 'CA', region: UNITED_STATES },
  628: { name: 'California', code: 'CA', region: UNITED_STATES },
  650: { name: 'California', code: 'CA', region: UNITED_STATES },
  657: { name: 'California', code: 'CA', region: UNITED_STATES },
  661: { name: 'California', code: 'CA', region: UNITED_STATES },
  669: { name: 'California', code: 'CA', region: UNITED_STATES },
  707: { name: 'California', code: 'CA', region: UNITED_STATES },
  714: { name: 'California', code: 'CA', region: UNITED_STATES },
  747: { name: 'California', code: 'CA', region: UNITED_STATES },
  760: { name: 'California', code: 'CA', region: UNITED_STATES },
  805: { name: 'California', code: 'CA', region: UNITED_STATES },
  818: { name: 'California', code: 'CA', region: UNITED_STATES },
  820: { name: 'California', code: 'CA', region: UNITED_STATES },
  831: { name: 'California', code: 'CA', region: UNITED_STATES },
  840: { name: 'California', code: 'CA', region: UNITED_STATES },
  858: { name: 'California', code: 'CA', region: UNITED_STATES },
  909: { name: 'California', code: 'CA', region: UNITED_STATES },
  916: { name: 'California', code: 'CA', region: UNITED_STATES },
  925: { name: 'California', code: 'CA', region: UNITED_STATES },
  949: { name: 'California', code: 'CA', region: UNITED_STATES },
  951: { name: 'California', code: 'CA', region: UNITED_STATES },
  303: { name: 'Colorado', code: 'CO', region: UNITED_STATES },
  719: { name: 'Colorado', code: 'CO', region: UNITED_STATES },
  720: { name: 'Colorado', code: 'CO', region: UNITED_STATES },
  970: { name: 'Colorado', code: 'CO', region: UNITED_STATES },
  983: { name: 'Colorado', code: 'CO', region: UNITED_STATES },
  203: { name: 'Connecticut', code: 'CT', region: UNITED_STATES },
  475: { name: 'Connecticut', code: 'CT', region: UNITED_STATES },
  860: { name: 'Connecticut', code: 'CT', region: UNITED_STATES },
  959: { name: 'Connecticut', code: 'CT', region: UNITED_STATES },
  302: { name: 'Delaware', code: 'DE', region: UNITED_STATES },
  239: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  305: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  321: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  352: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  386: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  407: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  448: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  561: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  656: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  689: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  727: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  728: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  754: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  772: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  786: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  813: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  850: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  863: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  904: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  941: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  954: { name: 'Florida', code: 'FL', region: UNITED_STATES },
  229: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  404: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  470: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  478: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  678: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  706: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  762: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  770: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  912: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  943: { name: 'Georgia', code: 'GA', region: UNITED_STATES },
  808: { name: 'Hawaii', code: 'HI', region: UNITED_STATES },
  208: { name: 'Idaho', code: 'ID', region: UNITED_STATES },
  986: { name: 'Idaho', code: 'ID', region: UNITED_STATES },
  217: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  224: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  309: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  312: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  331: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  447: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  464: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  618: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  630: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  708: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  773: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  779: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  815: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  847: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  872: { name: 'Illinois', code: 'IL', region: UNITED_STATES },
  219: { name: 'Indiana', code: 'IN', region: UNITED_STATES },
  260: { name: 'Indiana', code: 'IN', region: UNITED_STATES },
  317: { name: 'Indiana', code: 'IN', region: UNITED_STATES },
  463: { name: 'Indiana', code: 'IN', region: UNITED_STATES },
  574: { name: 'Indiana', code: 'IN', region: UNITED_STATES },
  765: { name: 'Indiana', code: 'IN', region: UNITED_STATES },
  812: { name: 'Indiana', code: 'IN', region: UNITED_STATES },
  930: { name: 'Indiana', code: 'IN', region: UNITED_STATES },
  319: { name: 'Iowa', code: 'IA', region: UNITED_STATES },
  515: { name: 'Iowa', code: 'IA', region: UNITED_STATES },
  563: { name: 'Iowa', code: 'IA', region: UNITED_STATES },
  641: { name: 'Iowa', code: 'IA', region: UNITED_STATES },
  712: { name: 'Iowa', code: 'IA', region: UNITED_STATES },
  316: { name: 'Kansas', code: 'KS', region: UNITED_STATES },
  620: { name: 'Kansas', code: 'KS', region: UNITED_STATES },
  785: { name: 'Kansas', code: 'KS', region: UNITED_STATES },
  913: { name: 'Kansas', code: 'KS', region: UNITED_STATES },
  270: { name: 'Kentucky', code: 'KY', region: UNITED_STATES },
  364: { name: 'Kentucky', code: 'KY', region: UNITED_STATES },
  502: { name: 'Kentucky', code: 'KY', region: UNITED_STATES },
  606: { name: 'Kentucky', code: 'KY', region: UNITED_STATES },
  859: { name: 'Kentucky', code: 'KY', region: UNITED_STATES },
  225: { name: 'Louisiana', code: 'LA', region: UNITED_STATES },
  318: { name: 'Louisiana', code: 'LA', region: UNITED_STATES },
  337: { name: 'Louisiana', code: 'LA', region: UNITED_STATES },
  504: { name: 'Louisiana', code: 'LA', region: UNITED_STATES },
  985: { name: 'Louisiana', code: 'LA', region: UNITED_STATES },
  207: { name: 'Maine', code: 'ME', region: UNITED_STATES },
  240: { name: 'Maryland', code: 'MD', region: UNITED_STATES },
  301: { name: 'Maryland', code: 'MD', region: UNITED_STATES },
  410: { name: 'Maryland', code: 'MD', region: UNITED_STATES },
  443: { name: 'Maryland', code: 'MD', region: UNITED_STATES },
  667: { name: 'Maryland', code: 'MD', region: UNITED_STATES },
  339: { name: 'Massachusetts', code: 'MA', region: UNITED_STATES },
  351: { name: 'Massachusetts', code: 'MA', region: UNITED_STATES },
  413: { name: 'Massachusetts', code: 'MA', region: UNITED_STATES },
  508: { name: 'Massachusetts', code: 'MA', region: UNITED_STATES },
  617: { name: 'Massachusetts', code: 'MA', region: UNITED_STATES },
  774: { name: 'Massachusetts', code: 'MA', region: UNITED_STATES },
  781: { name: 'Massachusetts', code: 'MA', region: UNITED_STATES },
  857: { name: 'Massachusetts', code: 'MA', region: UNITED_STATES },
  978: { name: 'Massachusetts', code: 'MA', region: UNITED_STATES },
  231: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  248: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  269: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  313: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  517: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  586: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  616: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  734: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  810: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  906: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  947: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  989: { name: 'Michigan', code: 'MI', region: UNITED_STATES },
  218: { name: 'Minnesota', code: 'MN', region: UNITED_STATES },
  320: { name: 'Minnesota', code: 'MN', region: UNITED_STATES },
  507: { name: 'Minnesota', code: 'MN', region: UNITED_STATES },
  612: { name: 'Minnesota', code: 'MN', region: UNITED_STATES },
  651: { name: 'Minnesota', code: 'MN', region: UNITED_STATES },
  763: { name: 'Minnesota', code: 'MN', region: UNITED_STATES },
  952: { name: 'Minnesota', code: 'MN', region: UNITED_STATES },
  228: { name: 'Mississippi', code: 'MS', region: UNITED_STATES },
  601: { name: 'Mississippi', code: 'MS', region: UNITED_STATES },
  662: { name: 'Mississippi', code: 'MS', region: UNITED_STATES },
  769: { name: 'Mississippi', code: 'MS', region: UNITED_STATES },
  314: { name: 'Missouri', code: 'MO', region: UNITED_STATES },
  417: { name: 'Missouri', code: 'MO', region: UNITED_STATES },
  557: { name: 'Missouri', code: 'MO', region: UNITED_STATES },
  573: { name: 'Missouri', code: 'MO', region: UNITED_STATES },
  636: { name: 'Missouri', code: 'MO', region: UNITED_STATES },
  660: { name: 'Missouri', code: 'MO', region: UNITED_STATES },
  816: { name: 'Missouri', code: 'MO', region: UNITED_STATES },
  406: { name: 'Montana', code: 'MT', region: UNITED_STATES },
  308: { name: 'Nebraska', code: 'NE', region: UNITED_STATES },
  402: { name: 'Nebraska', code: 'NE', region: UNITED_STATES },
  531: { name: 'Nebraska', code: 'NE', region: UNITED_STATES },
  702: { name: 'Nevada', code: 'NV', region: UNITED_STATES },
  725: { name: 'Nevada', code: 'NV', region: UNITED_STATES },
  775: { name: 'Nevada', code: 'NV', region: UNITED_STATES },
  603: { name: 'New Hampshire', code: 'NH', region: UNITED_STATES },
  201: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  551: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  609: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  640: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  732: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  848: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  856: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  862: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  908: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  973: { name: 'New Jersey', code: 'NJ', region: UNITED_STATES },
  505: { name: 'New Mexico', code: 'NM', region: UNITED_STATES },
  575: { name: 'New Mexico', code: 'NM', region: UNITED_STATES },
  212: { name: 'New York', code: 'NY', region: UNITED_STATES },
  315: { name: 'New York', code: 'NY', region: UNITED_STATES },
  332: { name: 'New York', code: 'NY', region: UNITED_STATES },
  347: { name: 'New York', code: 'NY', region: UNITED_STATES },
  363: { name: 'New York', code: 'NY', region: UNITED_STATES },
  516: { name: 'New York', code: 'NY', region: UNITED_STATES },
  518: { name: 'New York', code: 'NY', region: UNITED_STATES },
  585: { name: 'New York', code: 'NY', region: UNITED_STATES },
  607: { name: 'New York', code: 'NY', region: UNITED_STATES },
  631: { name: 'New York', code: 'NY', region: UNITED_STATES },
  646: { name: 'New York', code: 'NY', region: UNITED_STATES },
  680: { name: 'New York', code: 'NY', region: UNITED_STATES },
  716: { name: 'New York', code: 'NY', region: UNITED_STATES },
  718: { name: 'New York', code: 'NY', region: UNITED_STATES },
  838: { name: 'New York', code: 'NY', region: UNITED_STATES },
  845: { name: 'New York', code: 'NY', region: UNITED_STATES },
  914: { name: 'New York', code: 'NY', region: UNITED_STATES },
  917: { name: 'New York', code: 'NY', region: UNITED_STATES },
  929: { name: 'New York', code: 'NY', region: UNITED_STATES },
  934: { name: 'New York', code: 'NY', region: UNITED_STATES },
  252: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  336: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  472: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  704: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  743: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  828: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  910: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  919: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  980: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  984: { name: 'North Carolina', code: 'NC', region: UNITED_STATES },
  701: { name: 'North Dakota', code: 'ND', region: UNITED_STATES },
  216: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  220: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  234: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  326: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  330: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  380: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  419: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  440: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  513: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  567: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  614: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  740: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  937: { name: 'Ohio', code: 'OH', region: UNITED_STATES },
  405: { name: 'Oklahoma', code: 'OK', region: UNITED_STATES },
  539: { name: 'Oklahoma', code: 'OK', region: UNITED_STATES },
  572: { name: 'Oklahoma', code: 'OK', region: UNITED_STATES },
  580: { name: 'Oklahoma', code: 'OK', region: UNITED_STATES },
  918: { name: 'Oklahoma', code: 'OK', region: UNITED_STATES },
  458: { name: 'Oregon', code: 'OR', region: UNITED_STATES },
  503: { name: 'Oregon', code: 'OR', region: UNITED_STATES },
  541: { name: 'Oregon', code: 'OR', region: UNITED_STATES },
  971: { name: 'Oregon', code: 'OR', region: UNITED_STATES },
  215: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  223: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  267: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  272: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  412: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  445: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  484: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  570: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  582: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  610: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  717: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  724: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  814: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  835: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  878: { name: 'Pennsylvania', code: 'PA', region: UNITED_STATES },
  401: { name: 'Rhode Island', code: 'RI', region: UNITED_STATES },
  803: { name: 'South Carolina', code: 'SC', region: UNITED_STATES },
  839: { name: 'South Carolina', code: 'SC', region: UNITED_STATES },
  843: { name: 'South Carolina', code: 'SC', region: UNITED_STATES },
  854: { name: 'South Carolina', code: 'SC', region: UNITED_STATES },
  864: { name: 'South Carolina', code: 'SC', region: UNITED_STATES },
  605: { name: 'South Dakota', code: 'SD', region: UNITED_STATES },
  423: { name: 'Tennessee', code: 'TN', region: UNITED_STATES },
  615: { name: 'Tennessee', code: 'TN', region: UNITED_STATES },
  629: { name: 'Tennessee', code: 'TN', region: UNITED_STATES },
  731: { name: 'Tennessee', code: 'TN', region: UNITED_STATES },
  865: { name: 'Tennessee', code: 'TN', region: UNITED_STATES },
  901: { name: 'Tennessee', code: 'TN', region: UNITED_STATES },
  931: { name: 'Tennessee', code: 'TN', region: UNITED_STATES },
  210: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  214: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  254: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  281: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  325: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  346: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  361: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  409: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  430: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  432: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  469: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  512: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  682: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  713: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  726: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  737: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  806: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  817: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  830: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  832: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  903: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  915: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  936: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  940: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  945: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  956: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  972: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  979: { name: 'Texas', code: 'TX', region: UNITED_STATES },
  385: { name: 'Utah', code: 'UT', region: UNITED_STATES },
  435: { name: 'Utah', code: 'UT', region: UNITED_STATES },
  801: { name: 'Utah', code: 'UT', region: UNITED_STATES },
  802: { name: 'Vermont', code: 'VT', region: UNITED_STATES },
  276: { name: 'Virginia', code: 'VA', region: UNITED_STATES },
  434: { name: 'Virginia', code: 'VA', region: UNITED_STATES },
  540: { name: 'Virginia', code: 'VA', region: UNITED_STATES },
  571: { name: 'Virginia', code: 'VA', region: UNITED_STATES },
  703: { name: 'Virginia', code: 'VA', region: UNITED_STATES },
  757: { name: 'Virginia', code: 'VA', region: UNITED_STATES },
  804: { name: 'Virginia', code: 'VA', region: UNITED_STATES },
  826: { name: 'Virginia', code: 'VA', region: UNITED_STATES },
  948: { name: 'Virginia', code: 'VA', region: UNITED_STATES },
  206: { name: 'Washington', code: 'WA', region: UNITED_STATES },
  253: { name: 'Washington', code: 'WA', region: UNITED_STATES },
  360: { name: 'Washington', code: 'WA', region: UNITED_STATES },
  425: { name: 'Washington', code: 'WA', region: UNITED_STATES },
  509: { name: 'Washington', code: 'WA', region: UNITED_STATES },
  564: { name: 'Washington', code: 'WA', region: UNITED_STATES },
  202: { name: 'Washington, DC', code: 'DC', region: UNITED_STATES },
  771: { name: 'Washington, DC', code: 'DC', region: UNITED_STATES },
  304: { name: 'West Virginia', code: 'WV', region: UNITED_STATES },
  681: { name: 'West Virginia', code: 'WV', region: UNITED_STATES },
  262: { name: 'Wisconsin', code: 'WI', region: UNITED_STATES },
  414: { name: 'Wisconsin', code: 'WI', region: UNITED_STATES },
  534: { name: 'Wisconsin', code: 'WI', region: UNITED_STATES },
  608: { name: 'Wisconsin', code: 'WI', region: UNITED_STATES },
  715: { name: 'Wisconsin', code: 'WI', region: UNITED_STATES },
  920: { name: 'Wisconsin', code: 'WI', region: UNITED_STATES },
  307: { name: 'Wyoming', code: 'WY', region: UNITED_STATES },
  // Candian Numbers
  204: { name: 'Manitoba', code: 'MB', region: CANADA },
  236: { name: 'British Columbia', code: 'BC', region: CANADA },
  250: { name: 'British Columbia', code: 'BC', region: CANADA },
  289: { name: 'Ontario', code: 'ON', region: CANADA },
  306: { name: 'Saskatchewan', code: 'SK', region: CANADA },
  343: { name: 'Ontario', code: 'ON', region: CANADA },
  365: { name: 'Ontario', code: 'ON', region: CANADA },
  387: { name: 'Quebec', code: 'QC', region: CANADA },
  403: { name: 'Alberta', code: 'AB', region: CANADA },
  416: { name: 'Ontario', code: 'ON', region: CANADA },
  418: { name: 'Quebec', code: 'QC', region: CANADA },
  431: { name: 'Manitoba', code: 'MB', region: CANADA },
  437: { name: 'Ontario', code: 'ON', region: CANADA },
  438: { name: 'Quebec', code: 'QC', region: CANADA },
  450: { name: 'Quebec', code: 'QC', region: CANADA },
  506: { name: 'New Brunswick', code: 'NB', region: CANADA },
  514: { name: 'Quebec', code: 'QC', region: CANADA },
  519: { name: 'Ontario', code: 'ON', region: CANADA },
  548: { name: 'Ontario', code: 'ON', region: CANADA },
  579: { name: 'Quebec', code: 'QC', region: CANADA },
  581: { name: 'Quebec', code: 'QC', region: CANADA },
  587: { name: 'Alberta', code: 'AB', region: CANADA },
  604: { name: 'British Columbia', code: 'BC', region: CANADA },
  613: { name: 'Ontario', code: 'ON', region: CANADA },
  639: { name: 'Saskatchewan', code: 'SK', region: CANADA },
  647: { name: 'Ontario', code: 'ON', region: CANADA },
  672: { name: 'British Columbia', code: 'BC', region: CANADA },
  705: { name: 'Ontario', code: 'ON', region: CANADA },
  709: { name: 'Newfoundland and Labrador', code: 'NL', region: CANADA },
  742: { name: 'Ontario', code: 'ON', region: CANADA },
  778: { name: 'British Columbia', code: 'BC', region: CANADA },
  780: { name: 'Alberta', code: 'AB', region: CANADA },
  782: {
    name: 'Nova Scotia and Prince Edward Island',
    code: 'NS/PE',
    region: CANADA,
  },
  807: { name: 'Ontario', code: 'ON', region: CANADA },
  819: { name: 'Quebec', code: 'QC', region: CANADA },
  825: { name: 'Alberta', code: 'AB', region: CANADA },
  867: {
    name: 'Yukon, Northwest Territories, and Nunavut',
    code: 'YT/NT/NU',
    region: CANADA,
  },
  873: { name: 'Quebec', code: 'QC', region: CANADA },
  902: {
    name: 'Nova Scotia and Prince Edward Island',
    state: 'NS/PE',
    region: CANADA,
  },
  905: { name: 'Ontario', code: 'ON', region: CANADA },
  // Other North American Numbering Plan (NANP) Numbers
  // These will return "United States, Canada" as the region, which is incorrect, but they follow the same standard.
  684: { region: { name: 'American Samoa', code: 'AS', flag: '🇦🇸' } },
  264: { region: { name: 'Anguilla', code: 'AI', flag: '🇦🇮' } },
  268: { region: { name: 'Antigua and Barbuda', code: 'AG', flag: '🇦🇬' } },
  242: { region: { name: 'Bahamas', code: 'BS', flag: '🇧🇸' } },
  246: { region: { name: 'Barbados', code: 'BB', flag: '🇧🇧' } },
  441: { region: { name: 'Bermuda', code: 'BM', flag: '🇧🇲' } },
  284: { region: { name: 'British Virgin Islands', code: 'VG', flag: '🇻🇬' } },
  345: { region: { name: 'Cayman Islands', code: 'KY', flag: '🇰🇾' } },
  767: { region: { name: 'Dominica', code: 'DM', flag: '🇩🇲' } },
  809: { region: { name: 'Dominican Republic', code: 'DO', flag: '🇩🇴' } },
  829: { region: { name: 'Dominican Republic', code: 'DO', flag: '🇩🇴' } },
  849: { region: { name: 'Dominican Republic', code: 'DO', flag: '🇩🇴' } },
  473: { region: { name: 'Grenada', code: 'GD', flag: '🇬🇩' } },
  671: { region: { name: 'Guam', code: 'GU', flag: '🇬🇺' } },
  876: { region: { name: 'Jamaica', code: 'JM', flag: '🇯🇲' } },
  658: { region: { name: 'Jamaica', code: 'JM', flag: '🇯🇲' } },
  664: { region: { name: 'Montserrat', code: 'MS', flag: '🇲🇸' } },
  670: { region: { name: 'Northern Mariana Islands', code: 'MP', flag: '🇲🇵' } },
  787: { region: { name: 'Puerto Rico', code: 'PR', flag: '🇵🇷' } },
  939: { region: { name: 'Puerto Rico', code: 'PR', flag: '🇵🇷' } },
  869: { region: { name: 'Saint Kitts and Nevis', code: 'KN', flag: '🇰🇳' } },
  758: { region: { name: 'Saint Lucia', code: 'LC', flag: '🇱🇨' } },
  784: {
    region: {
      name: 'Saint Vincent and the Grenadines',
      code: 'VC',
      flag: '🇻🇨',
    },
  },
  721: { region: { name: 'Sint Maarten', code: 'SX', flag: '🇸🇽' } },
  868: { region: { name: 'Trinidad and Tobago', code: 'TT', flag: '🇹🇹' } },
  649: { region: { name: 'Turks and Caicos Islands', code: 'TC', flag: '🇹🇨' } },
  340: { region: { name: 'U.S. Virgin Islands', code: 'VI', flag: '🇻🇮' } },
};

export const REGION_CODES = {
  93: { name: 'Afghanistan', code: 'AF', flag: '🇦🇫' },
  355: { name: 'Albania', code: 'AL', flag: '🇦🇱' },
  213: { name: 'Algeria', code: 'DZ', flag: '🇩🇿' },
  376: { name: 'Andorra', code: 'AD', flag: '🇦🇩' },
  244: { name: 'Angola', code: 'AO', flag: '🇦🇴' },
  672: { name: 'Antarctica', code: 'AQ', flag: '🇦🇶' },
  54: { name: 'Argentina', code: 'AR', flag: '🇦🇷' },
  374: { name: 'Armenia', code: 'AM', flag: '🇦🇲' },
  297: { name: 'Aruba', code: 'AW', flag: '🇦🇼' },
  43: { name: 'Austria', code: 'AT', flag: '🇦🇹' },
  994: { name: 'Azerbaijan', code: 'AZ', flag: '🇦🇿' },
  973: { name: 'Bahrain', code: 'BH', flag: '🇧🇭' },
  880: { name: 'Bangladesh', code: 'BD', flag: '🇧🇩' },
  375: { name: 'Belarus', code: 'BY', flag: '🇧🇾' },
  32: { name: 'Belgium', code: 'BE', flag: '🇧🇪' },
  501: { name: 'Belize', code: 'BZ', flag: '🇧🇿' },
  229: { name: 'Benin', code: 'BJ', flag: '🇧🇯' },
  975: { name: 'Bhutan', code: 'BT', flag: '🇧🇹' },
  591: { name: 'Bolivia', code: 'BO', flag: '🇧🇴' },
  387: { name: 'Bosnia and Herzegovina', code: 'BA', flag: '🇧🇦' },
  267: { name: 'Botswana', code: 'BW', flag: '🇧🇼' },
  55: { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
  246: { name: 'British Indian Ocean Territory', code: 'IO', flag: '🇮🇴' },
  673: { name: 'Brunei', code: 'BN', flag: '🇧🇳' },
  359: { name: 'Bulgaria', code: 'BG', flag: '🇧🇬' },
  226: { name: 'Burkina Faso', code: 'BF', flag: '🇧🇫' },
  257: { name: 'Burundi', code: 'BI', flag: '🇧🇮' },
  855: { name: 'Cambodia', code: 'KH', flag: '🇰🇭' },
  237: { name: 'Cameroon', code: 'CM', flag: '🇨🇲' },
  238: { name: 'Cape Verde', code: 'CV', flag: '🇨🇻' },
  236: { name: 'Central African Republic', code: 'CF', flag: '🇨🇫' },
  235: { name: 'Chad', code: 'TD', flag: '🇹🇩' },
  56: { name: 'Chile', code: 'CL', flag: '🇨🇱' },
  86: { name: 'China', code: 'CN', flag: '🇨🇳' },
  61: { name: 'Christmas Island, Cocos Islands', code: 'CX', flag: '🇨🇽' },
  57: { name: 'Colombia', code: 'CO', flag: '🇨🇴' },
  269: { name: 'Comoros', code: 'KM', flag: '🇰🇲' },
  682: { name: 'Cook Islands', code: 'CK', flag: '🇨🇰' },
  506: { name: 'Costa Rica', code: 'CR', flag: '🇨🇷' },
  385: { name: 'Croatia', code: 'HR', flag: '🇭🇷' },
  53: { name: 'Cuba', code: 'CU', flag: '🇨🇺' },
  357: { name: 'Cyprus', code: 'CY', flag: '🇨🇾' },
  420: { name: 'Czech Republic', code: 'CZ', flag: '🇨🇿' },
  243: { name: 'Democratic Republic of the Congo', code: 'CD', flag: '🇨🇩' },
  45: { name: 'Denmark', code: 'DK', flag: '🇩🇰' },
  253: { name: 'Djibouti', code: 'DJ', flag: '🇩🇯' },
  670: { name: 'East Timor', code: 'TL', flag: '🇹🇱' },
  593: { name: 'Ecuador', code: 'EC', flag: '🇪🇨' },
  20: { name: 'Egypt', code: 'EG', flag: '🇪🇬' },
  503: { name: 'El Salvador', code: 'SV', flag: '🇸🇻' },
  240: { name: 'Equatorial Guinea', code: 'GQ', flag: '🇬🇶' },
  291: { name: 'Eritrea', code: 'ER', flag: '🇪🇷' },
  372: { name: 'Estonia', code: 'EE', flag: '🇪🇪' },
  251: { name: 'Ethiopia', code: 'ET', flag: '🇪🇹' },
  500: { name: 'Falkland Islands', code: 'FK', flag: '🇫🇰' },
  298: { name: 'Faroe Islands', code: 'FO', flag: '🇫🇴' },
  679: { name: 'Fiji', code: 'FJ', flag: '🇫🇯' },
  358: { name: 'Finland', code: 'FI', flag: '🇫🇮' },
  33: { name: 'France', code: 'FR', flag: '🇫🇷' },
  689: { name: 'French Polynesia', code: 'PF', flag: '🇵🇫' },
  241: { name: 'Gabon', code: 'GA', flag: '🇬🇦' },
  220: { name: 'Gambia', code: 'GM', flag: '🇬🇲' },
  995: { name: 'Georgia', code: 'GE', flag: '🇬🇪' },
  49: { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  233: { name: 'Ghana', code: 'GH', flag: '🇬🇭' },
  350: { name: 'Gibraltar', code: 'GI', flag: '🇬🇮' },
  30: { name: 'Greece', code: 'GR', flag: '🇬🇷' },
  299: { name: 'Greenland', code: 'GL', flag: '🇬🇱' },
  502: { name: 'Guatemala', code: 'GT', flag: '🇬🇹' },
  224: { name: 'Guinea', code: 'GN', flag: '🇬🇳' },
  245: { name: 'Guinea-Bissau', code: 'GW', flag: '🇬🇼' },
  592: { name: 'Guyana', code: 'GY', flag: '🇬🇾' },
  509: { name: 'Haiti', code: 'HT', flag: '🇭🇹' },
  504: { name: 'Honduras', code: 'HN', flag: '🇭🇳' },
  852: { name: 'Hong Kong', code: 'HK', flag: '🇭🇰' },
  36: { name: 'Hungary', code: 'HU', flag: '🇭🇺' },
  354: { name: 'Iceland', code: 'IS', flag: '🇮🇸' },
  91: { name: 'India', code: 'IN', flag: '🇮🇳' },
  62: { name: 'Indonesia', code: 'ID', flag: '🇮🇩' },
  98: { name: 'Iran', code: 'IR', flag: '🇮🇷' },
  964: { name: 'Iraq', code: 'IQ', flag: '🇮🇶' },
  353: { name: 'Ireland', code: 'IE', flag: '🇮🇪' },
  972: { name: 'Israel', code: 'IL', flag: '🇮🇱' },
  39: { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  225: { name: 'Ivory Coast', code: 'CI', flag: '🇨🇮' },
  81: { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  962: { name: 'Jordan', code: 'JO', flag: '🇯🇴' },
  7: { name: 'Russia, Kazakhstan', code: 'RU/KZ', flag: '🇷🇺/🇰🇿' },
  254: { name: 'Kenya', code: 'KE', flag: '🇰🇪' },
  686: { name: 'Kiribati', code: 'KI', flag: '🇰🇮' },
  383: { name: 'Kosovo', code: 'XK', flag: '🇽🇰' },
  965: { name: 'Kuwait', code: 'KW', flag: '🇰🇼' },
  996: { name: 'Kyrgyzstan', code: 'KG', flag: '🇰🇬' },
  856: { name: 'Laos', code: 'LA', flag: '🇱🇦' },
  371: { name: 'Latvia', code: 'LV', flag: '🇱🇻' },
  961: { name: 'Lebanon', code: 'LB', flag: '🇱🇧' },
  266: { name: 'Lesotho', code: 'LS', flag: '🇱🇸' },
  231: { name: 'Liberia', code: 'LR', flag: '🇱🇷' },
  218: { name: 'Libya', code: 'LY', flag: '🇱🇾' },
  423: { name: 'Liechtenstein', code: 'LI', flag: '🇱🇮' },
  370: { name: 'Lithuania', code: 'LT', flag: '🇱🇹' },
  352: { name: 'Luxembourg', code: 'LU', flag: '🇱🇺' },
  853: { name: 'Macau', code: 'MO', flag: '🇲🇴' },
  389: { name: 'Macedonia', code: 'MK', flag: '🇲🇰' },
  261: { name: 'Madagascar', code: 'MG', flag: '🇲🇬' },
  265: { name: 'Malawi', code: 'MW', flag: '🇲🇼' },
  60: { name: 'Malaysia', code: 'MY', flag: '🇲🇾' },
  960: { name: 'Maldives', code: 'MV', flag: '🇲🇻' },
  223: { name: 'Mali', code: 'ML', flag: '🇲🇱' },
  356: { name: 'Malta', code: 'MT', flag: '🇲🇹' },
  692: { name: 'Marshall Islands', code: 'MH', flag: '🇲🇭' },
  222: { name: 'Mauritania', code: 'MR', flag: '🇲🇷' },
  230: { name: 'Mauritius', code: 'MU', flag: '🇲🇺' },
  262: { name: 'Mayotte, Reunion', code: 'YT/RE', flag: '🇾🇹/🇷🇪' },
  52: { name: 'Mexico', code: 'MX', flag: '🇲🇽' },
  691: { name: 'Micronesia', code: 'FM', flag: '🇫🇲' },
  373: { name: 'Moldova', code: 'MD', flag: '🇲🇩' },
  377: { name: 'Monaco', code: 'MC', flag: '🇲🇨' },
  976: { name: 'Mongolia', code: 'MN', flag: '🇲🇳' },
  382: { name: 'Montenegro', code: 'ME', flag: '🇲🇪' },
  212: { name: 'Morocco, Western Sahara', code: 'MA/EH', flag: '🇲🇦/🇪🇭' },
  258: { name: 'Mozambique', code: 'MZ', flag: '🇲🇿' },
  95: { name: 'Myanmar', code: 'MM', flag: '🇲🇲' },
  264: { name: 'Namibia', code: 'NA', flag: '🇳🇦' },
  674: { name: 'Nauru', code: 'NR', flag: '🇳🇷' },
  977: { name: 'Nepal', code: 'NP', flag: '🇳🇵' },
  31: { name: 'Netherlands', code: 'NL', flag: '🇳🇱' },
  599: { name: 'Curacao, Netherlands Antilles', code: 'CW/AN', flag: '🇨🇼/🇦🇳' },
  687: { name: 'New Caledonia', code: 'NC', flag: '🇳🇨' },
  505: { name: 'Nicaragua', code: 'NI', flag: '🇳🇮' },
  227: { name: 'Niger', code: 'NE', flag: '🇳🇪' },
  234: { name: 'Nigeria', code: 'NG', flag: '🇳🇬' },
  683: { name: 'Niue', code: 'NU', flag: '🇳🇺' },
  850: { name: 'North Korea', code: 'KP', flag: '🇰🇵' },
  47: { name: 'Norway, Svalbard and Jan Mayen', code: 'NO/SJ', flag: '🇳🇴' },
  968: { name: 'Oman', code: 'OM', flag: '🇴🇲' },
  92: { name: 'Pakistan', code: 'PK', flag: '🇵🇰' },
  680: { name: 'Palau', code: 'PW', flag: '🇵🇼' },
  970: { name: 'Palestine', code: 'PS', flag: '🇵🇸' },
  507: { name: 'Panama', code: 'PA', flag: '🇵🇦' },
  675: { name: 'Papua New Guinea', code: 'PG', flag: '🇵🇬' },
  595: { name: 'Paraguay', code: 'PY', flag: '🇵🇾' },
  51: { name: 'Peru', code: 'PE', flag: '🇵🇪' },
  63: { name: 'Philippines', code: 'PH', flag: '🇵🇭' },
  64: { name: 'New Zealand, Pitcairn', code: 'NZ/PN', flag: '🇳🇿/🇵🇳' },
  48: { name: 'Poland', code: 'PL', flag: '🇵🇱' },
  351: { name: 'Portugal', code: 'PT', flag: '🇵🇹' },
  974: { name: 'Qatar', code: 'QA', flag: '🇶🇦' },
  242: { name: 'Republic of the Congo', code: 'CG', flag: '🇨🇬' },
  40: { name: 'Romania', code: 'RO', flag: '🇷🇴' },
  250: { name: 'Rwanda', code: 'RW', flag: '🇷🇼' },
  590: { name: 'Saint Martin, Saint Barthelemy', code: 'MF/BL', flag: '🇲🇫/🇧🇱' },
  290: { name: 'Saint Helena', code: 'SH', flag: '🇸🇭' },
  508: { name: 'Saint Pierre and Miquelon', code: 'PM', flag: '🇵🇲' },
  685: { name: 'Samoa', code: 'WS', flag: '🇼🇸' },
  378: { name: 'San Marino', code: 'SM', flag: '🇸🇲' },
  239: { name: 'Sao Tome and Principe', code: 'ST', flag: '🇸🇹' },
  966: { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦' },
  221: { name: 'Senegal', code: 'SN', flag: '🇸🇳' },
  381: { name: 'Serbia', code: 'RS', flag: '🇷🇸' },
  248: { name: 'Seychelles', code: 'SC', flag: '🇸🇨' },
  232: { name: 'Sierra Leone', code: 'SL', flag: '🇸🇱' },
  65: { name: 'Singapore', code: 'SG', flag: '🇸🇬' },
  421: { name: 'Slovakia', code: 'SK', flag: '🇸🇰' },
  386: { name: 'Slovenia', code: 'SI', flag: '🇸🇮' },
  677: { name: 'Solomon Islands', code: 'SB', flag: '🇸🇧' },
  252: { name: 'Somalia', code: 'SO', flag: '🇸🇴' },
  27: { name: 'South Africa', code: 'ZA', flag: '🇿🇦' },
  82: { name: 'South Korea', code: 'KR', flag: '🇰🇷' },
  211: { name: 'South Sudan', code: 'SS', flag: '🇸🇸' },
  34: { name: 'Spain', code: 'ES', flag: '🇪🇸' },
  94: { name: 'Sri Lanka', code: 'LK', flag: '🇱🇰' },
  249: { name: 'Sudan', code: 'SD', flag: '🇸🇩' },
  597: { name: 'Suriname', code: 'SR', flag: '🇸🇷' },
  268: { name: 'Swaziland', code: 'SZ', flag: '🇸🇿' },
  46: { name: 'Sweden', code: 'SE', flag: '🇸🇪' },
  41: { name: 'Switzerland', code: 'CH', flag: '🇨🇭' },
  963: { name: 'Syria', code: 'SY', flag: '🇸🇾' },
  886: { name: 'Taiwan', code: 'TW', flag: '🇹🇼' },
  992: { name: 'Tajikistan', code: 'TJ', flag: '🇹🇯' },
  255: { name: 'Tanzania', code: 'TZ', flag: '🇹🇿' },
  66: { name: 'Thailand', code: 'TH', flag: '🇹🇭' },
  228: { name: 'Togo', code: 'TG', flag: '🇹🇬' },
  690: { name: 'Tokelau', code: 'TK', flag: '🇹🇰' },
  676: { name: 'Tonga', code: 'TO', flag: '🇹🇴' },
  216: { name: 'Tunisia', code: 'TN', flag: '🇹🇳' },
  90: { name: 'Turkey', code: 'TR', flag: '🇹🇷' },
  993: { name: 'Turkmenistan', code: 'TM', flag: '🇹🇲' },
  688: { name: 'Tuvalu', code: 'TV', flag: '🇹🇻' },
  256: { name: 'Uganda', code: 'UG', flag: '🇺🇬' },
  380: { name: 'Ukraine', code: 'UA', flag: '🇺🇦' },
  971: { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪' },
  44: { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  // This declaration will fall back to state / province declaration if area code is defined.
  1: { name: 'United States, Canada', code: 'US/CA', flag: '🇺🇸/🇨🇦' },
  598: { name: 'Uruguay', code: 'UY', flag: '🇺🇾' },
  998: { name: 'Uzbekistan', code: 'UZ', flag: '🇺🇿' },
  678: { name: 'Vanuatu', code: 'VU', flag: '🇻🇺' },
  379: { name: 'Vatican', code: 'VA', flag: '🇻🇦' },
  58: { name: 'Venezuela', code: 'VE', flag: '🇻🇪' },
  84: { name: 'Vietnam', code: 'VN', flag: '🇻🇳' },
  681: { name: 'Wallis and Futuna', code: 'WF', flag: '🇼🇫' },
  967: { name: 'Yemen', code: 'YE', flag: '🇾🇪' },
  260: { name: 'Zambia', code: 'ZM', flag: '🇿🇲' },
  263: { name: 'Zimbabwe', code: 'ZW', flag: '🇿🇼' },
};