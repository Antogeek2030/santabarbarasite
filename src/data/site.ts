// Edit this file to change business details, services, areas, and blog posts.

export const SITE = {
  name: 'Leak Detection Santa Barbara CA',
  short: 'Santa Barbara Leak Detection',
  url: 'https://leakdetectionsantabarbaraca.com',
  // TODO: replace with your real phone number and email
  phone: '(805) 555-0142',
  phoneHref: '+18055550142',
  email: 'info@leakdetectionsantabarbaraca.com',
  street: '135 E Haley St',
  city: 'Santa Barbara',
  region: 'CA',
  zip: '93101',
  country: 'US',
  lat: 34.4203,
  lng: -119.6934,
  hours: 'Mon–Sat 7am–7pm · Emergency calls 24/7',
};

export const FULL_ADDRESS = `${SITE.street}, ${SITE.city}, ${SITE.region} ${SITE.zip}`;
export const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(FULL_ADDRESS)}&z=16&output=embed`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`;
export const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(FULL_ADDRESS)}`;

export interface Service {
  slug: string;
  title: string;
  short: string;
  intro: string;
  signs: string[];
  process: string[];
  why: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'water-leak-detection',
    title: 'Water Leak Detection',
    short: 'Find hidden leaks in walls, ceilings, and under floors without tearing anything open.',
    intro:
      'A high water bill or a damp spot you cannot explain usually means a leak is hiding somewhere you cannot see. We use non-invasive electronic and acoustic tools to trace it to the exact spot, so any repair is small and targeted.',
    signs: [
      'A water bill that climbs with no change in habits',
      'Musty smells or stains on walls and ceilings',
      'Sound of running water when everything is off',
      'Low water pressure in one or more fixtures',
    ],
    process: [
      'We check your meter and pressure to confirm a leak exists.',
      'Acoustic and thermal tools narrow down the location.',
      'We mark the exact spot and explain what we found.',
      'You get a clear written report with repair options.',
    ],
    why: 'Santa Barbara has many older homes with aging copper and galvanized lines. Finding a small leak early avoids mold, rot, and costly wall demolition.',
  },
  {
    slug: 'slab-leak-detection',
    title: 'Slab Leak Detection',
    short: 'Pinpoint leaks in pipes beneath your concrete foundation before they damage the structure.',
    intro:
      'Pipes under a concrete slab can leak for months before anyone notices. Our pinpointing equipment locates the leak through the concrete, so any access opening is as small as possible.',
    signs: [
      'Warm or hot spots on the floor',
      'Sudden spike in water or gas bills',
      'Cracks in walls or flooring that are new',
      'Sound of water running under the floor',
    ],
    process: [
      'We isolate the line that is losing water.',
      'Listening and tracing equipment locates the leak under the slab.',
      'We mark the spot on the floor and photograph the findings.',
      'You receive repair options, from spot repair to rerouting.',
    ],
    why: 'Slab leaks can wash away soil under a foundation. Quick, accurate detection protects both your home and your budget.',
  },
  {
    slug: 'emergency-leak-detection',
    title: 'Emergency Leak Detection',
    short: 'Fast response when water is flowing where it should not be. Available around the clock.',
    intro:
      'When water is coming through a ceiling or a pipe has burst, every minute counts. We respond quickly, help you shut off the source, and locate the cause so a plumber can fix it right the first time.',
    signs: [
      'Water dripping through a ceiling or light fixture',
      'A wet spot spreading across a floor or wall',
      'A meter spinning with all fixtures off',
      'Sudden loss of water pressure',
    ],
    process: [
      'Call us and we walk you through shutting off the water.',
      'A technician arrives and confirms the source of the leak.',
      'We document the damage for your insurance claim.',
      'We coordinate with your plumber or restoration company.',
    ],
    why: 'Fast action limits water damage and mold growth. Our written reports also make insurance claims much easier.',
  },
  {
    slug: 'pool-and-irrigation-leak-detection',
    title: 'Pool & Irrigation Leak Detection',
    short: 'Track down leaks in pools, spas, sprinkler lines, and outdoor plumbing.',
    intro:
      'Outdoor leaks waste thousands of gallons and are easy to miss. We test pool shells, plumbing lines, and irrigation systems to find exactly where water is escaping.',
    signs: [
      'Pool level drops faster than normal evaporation',
      'Soggy patches or unusually green spots in the yard',
      'Sprinkler zones with weak spray',
      'Higher summer water bills than usual',
    ],
    process: [
      'We run pressure tests on each line or zone.',
      'Dye and listening tests pinpoint the break.',
      'We map the affected area and explain the cause.',
      'You get repair recommendations that fit your system.',
    ],
    why: 'Water is precious on the Central Coast. Fixing outdoor leaks quickly saves money and protects landscaping.',
  },
  {
    slug: 'leak-inspection-and-reports',
    title: 'Leak Inspection & Reports',
    short: 'Clear written reports for home sales, insurance claims, or plain peace of mind.',
    intro:
      'Buying, selling, or filing a claim? Our inspection checks visible plumbing, fixtures, and moisture levels, then documents everything in a report that is easy to read and easy to share.',
    signs: [
      'You are buying or selling a home',
      'An insurer requests proof of the cause of damage',
      'You want a baseline after a past leak repair',
      'You notice recurring damp areas',
    ],
    process: [
      'We inspect fixtures, supply lines, and moisture-prone areas.',
      'Moisture meters and thermal imaging check hidden areas.',
      'Photos and readings are recorded on site.',
      'A written report arrives within a day.',
    ],
    why: 'A documented inspection gives buyers, sellers, and insurers the facts, with no surprises later.',
  },
];

export const AREAS = [
  { name: 'Santa Barbara', note: 'Our home base. Downtown, the Mesa, the Riviera, and every neighborhood in between.' },
  { name: 'Montecito', note: 'Estates and older homes with extensive plumbing and irrigation.' },
  { name: 'Goleta', note: 'Including Old Town, Noleta, and Hollister Ranch area homes.' },
  { name: 'Hope Ranch', note: 'Large properties with pools and long irrigation runs.' },
  { name: 'Summerland', note: 'Coastal homes and small commercial properties.' },
  { name: 'Carpinteria', note: 'Beach-area homes and condos.' },
  { name: 'Isla Vista', note: 'Apartments and rental properties near UCSB.' },
  { name: 'Santa Ynez Valley', note: 'Ask us about availability. We often travel for larger jobs.' },
];

export interface PostBlock {
  h?: string;
  p?: string;
  ul?: string[];
}
export interface Post {
  slug: string;
  title: string;
  tag: string;
  description: string;
  date: string; // YYYY-MM-DD
  body: PostBlock[];
}

export const POSTS: Post[] = [
  {
    slug: 'signs-you-have-a-hidden-water-leak',
    title: '5 Signs You Have a Hidden Water Leak in Santa Barbara',
    tag: 'Warning signs',
    description:
      'Hidden leaks rarely announce themselves. Here are five common signs to watch for in your Santa Barbara home.',
    date: '2026-09-05',
    body: [
      { p: 'Most leaks do not start with a dramatic burst. They start small, inside walls or under floors, and grow for weeks or months. Catching the signs early can save you thousands.' },
      { h: '1. A higher water bill', p: 'If your bill jumps and your habits have not changed, water is going somewhere. Compare the last several bills to spot a trend.' },
      { h: '2. A moving water meter', p: 'Turn off all water in the house and check your meter. If the dial or the small triangle keeps moving, there is a leak.' },
      { h: '3. Stains, bubbling paint, or musty smells', p: 'Discolored patches, paint that bubbles, or a damp smell in a closed room all point to moisture behind the surface.' },
      { h: '4. Sounds of running water', p: 'Hearing a hiss or trickle when nothing is on is a strong hint of a pressurized line leaking.' },
      { h: '5. Warm spots on the floor', p: 'Warm patches can mean a hot water line is leaking under a slab. Call a professional right away.' },
      { p: 'If you notice any of these, a leak detection visit can confirm the problem without damaging your walls or floors.' },
    ],
  },
  {
    slug: 'what-is-slab-leak-and-how-is-it-found',
    title: 'What Is a Slab Leak and How Is It Found?',
    tag: 'Explainer',
    description:
      'A slab leak is a leak in pipes beneath your foundation. Learn what causes them and how they are located without major demolition.',
    date: '2026-08-20',
    body: [
      { p: 'A slab leak is a leak in a water line that runs under or inside the concrete foundation of your home. Because you cannot see the pipes, these leaks are easy to miss.' },
      { h: 'Common causes', ul: ['Aging or corroded copper pipes', 'Shifting soil or small earth movement', 'High water pressure over many years', 'Poor original installation'] },
      { h: 'How we locate it', p: 'We isolate the line, then use listening devices and tracing tools to find the exact point where water escapes. That means the repair team opens a small area of floor, not a large one.' },
      { h: 'What happens next', p: 'Depending on the pipe condition, the fix may be a spot repair, a reroute through the attic or walls, or a repipe. We will explain the options in plain language.' },
    ],
  },
  {
    slug: 'leak-detection-vs-plumber-who-to-call',
    title: 'Leak Detection or Plumber: Who Should You Call First?',
    tag: 'Homeowner guide',
    description:
      'Not sure whether you need a leak detection specialist or a plumber? Here is how to decide and save time and money.',
    date: '2026-07-28',
    body: [
      { p: 'These two services work together, but they solve different problems. Knowing which to call first can save you an unnecessary demolition bill.' },
      { h: 'Call a plumber first when', ul: ['You know exactly where the leak is', 'A fixture or valve is visibly failing', 'You need a pipe replaced or repaired'] },
      { h: 'Call leak detection first when', ul: ['You suspect a leak but cannot see it', 'The bill is high with no visible cause', 'Damage appears in walls, ceilings, or floors', 'You need a report for insurance'] },
      { p: 'A precise location means the plumber only opens what needs to be opened. Many customers find that detection pays for itself in avoided repair work.' },
    ],
  },
];
