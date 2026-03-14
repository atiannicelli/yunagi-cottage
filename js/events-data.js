// Events happening near Bailey Island each weekend (May - September 2026)
// This data will be displayed on the schedule page to help friends pick weekends

const WEEKEND_EVENTS = {
  1: [ // May 1-3
    "Brunswick Farmers Market opens (Tues/Fri through Nov)"
  ],
  2: [], // May 8-10
  3: [], // May 15-17
  4: [ // May 22-24
    "🇺🇸 Memorial Day Weekend"
  ],
  5: [], // May 29-31
  
  6: [ // June 5-7
    "Hairspray @ Maine State Music Theatre (June 3-20), Brunswick"
  ],
  7: [ // June 12-14
    "Hairspray @ MSMT (continues)",
    "Dancing Queen: Songs of ABBA concert @ MSMT, June 14 & 15"
  ],
  8: [ // June 19-21
    "Hairspray @ MSMT (final weekend)"
  ],
  9: [ // June 26-28
    "1776 @ Maine State Music Theatre (June 24 - July 11), Brunswick"
  ],
  
  10: [ // July 3-5
    "🎆 July 4th Weekend",
    "1776 @ MSMT (continues)",
    "Johnny Cash's America concert @ MSMT, July 5 & 6"
  ],
  11: [ // July 10-12
    "1776 @ MSMT (final weekend)",
    "Maine International Film Festival (July 10-19), Waterville"
  ],
  12: [ // July 17-19
    "Frozen @ Maine State Music Theatre (July 15 - Aug 1), Brunswick",
    "Yarmouth Clam Festival (July 18-20) - FREE!",
    "Maine Film Festival (continues), Waterville"
  ],
  13: [ // July 24-26
    "Frozen @ MSMT (continues)",
    "Billy Joel Tribute concert @ MSMT, July 26 & 27"
  ],
  14: [ // July 31 - Aug 2
    "Frozen @ MSMT (final weekend)",
    "Maine Lobster Festival (July 29 - Aug 2), Rockland"
  ],
  
  15: [ // Aug 7-9
    "Come From Away @ Maine State Music Theatre (Aug 5-22), Brunswick",
    "Guster On The Ocean Festival (Aug 7-9), Portland"
  ],
  16: [ // Aug 14-16
    "Come From Away @ MSMT (continues)",
    "Topsham Fair (Aug 11-16) - Classic Maine Fair!"
  ],
  17: [ // Aug 21-23
    "Come From Away @ MSMT (final weekend)"
  ],
  18: [], // Aug 28-30
  
  19: [ // Sept 4-6
    "🇺🇸 Labor Day Weekend"
  ],
  20: [], // Sept 11-13
  21: [], // Sept 18-20
  22: [ // Sept 25-27
    "Common Ground Fair (Sept 25-27), Unity - 50th Anniversary!"
  ]
};

// Helper function to get events for a weekend
function getEventsForWeekend(weekendId) {
  return WEEKEND_EVENTS[weekendId] || [];
}
