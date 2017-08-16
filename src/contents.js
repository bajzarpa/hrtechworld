/*global require*/

const benefits = [
  'Cold-pressed poke thundercats brooklyn chillwave chartreuse',
  'Craft beer 3 wolf moon tbh hoodie',
  'YOLO synth hammock',
  'Distillery aesthetic VHS affogato gentrify bespoke',
  'Chia readymade schlitz brunch yuccie echo park'
];

export const selectorItems = [
  { name: 'Single attandee', icon: require('./images/single-icon.png'), active: true },
  { name: 'Group tickets', icon: require('./images/group-icon.png') },
  { name: 'Investors', icon: require('./images/investors-icon.png') },
  { name: 'Startups', icon: require('./images/startup-icon.png') },
];

export const timelineOptions = [
  { name: 'Early bird', sold: true },
  { name: 'Summer saver', hilight: true, icon: require('./images/until-aug.png') },
  { name: 'Regular' },
  { name: 'Late' },
  { name: 'Onsite registration' }
];

export const textboxText = "Fashion axe keytar truffaut migas Farm-to-table PBR&B. Drinking vinegar sustainable helvetica sartorial. Dreatmcatcher live-edge lo-fi, chartreuse echo park pinterest distillery glossier plaid fingerstache. Fashion axe keytar truffaut migas Farm-to-table PBR&B. Drinking vinegar sustainable helvetica ";

export const packageOptions = [
  {
    id: "sums",
    name: "Summer saver",
    price: 1595,
    until: "August 31.",
    description: "Save €300",
    benefits
  }, {
    id: "exponly",
    name: "Expo only",
    popular: true,
    price: 300,
    until: "October",
    benefits
  }, {
    id: "govermental",
    name: "PUBLIC & GOVERNMENTAL SECTOR",
    price: 1295,
    description: "Save €300 fromt the Summer Saver",
    until: "October",
    benefits
  }, {
    id: "standardco",
    name: "STANDARD CONFERENCE & EXPO",
    price: 1695,
    description: "Do you have a promo code?",
    promo: true,
    placeholder: "Type it here & then pick DAY01/DAY02 OR BOTH",
    benefits
  }
];

export const partnersContent = new Array(5).fill({ image: require('./images/logo-workday.png'), url: '#' });