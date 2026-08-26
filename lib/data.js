export const img = (seed, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Real menu photos, sourced from the ProFit Meals (Indore) site — Unsplash photo ids.
// Usage: photo(meal.photoId, width)
export const photo = (id, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const contact = {
  phone: '+91 92430 03566',
  phoneHref: 'tel:+919243003566',
  whatsappHref: 'https://wa.me/919243003566',
  instagramHandle: '@profit.meals',
  instagramHref: 'https://www.instagram.com/profit.meals',
  facebookHref: 'https://www.facebook.com/ProfitMeals',
  twitterHandle: '@ProfitMeals',
  twitterHref: 'https://x.com/ProfitMeals',
  email: 'support@profitmeals.in',
  emailHref: 'mailto:support@profitmeals.in',
  website: 'www.profitmeals.in',
  websiteHref: 'https://www.profitmeals.in',
  address: '91/1 Sindhi Colony, Near Sapna Sangeeta, Indore',
  serviceArea: 'Indore — Vijay Nagar, Palasia, Sudama Nagar, Rau & MR-10',
};

export const meals = [
  // Non-vegetarian — 64g protein per box, lab-verified
  {
    slug: 'classic-grilled-chicken', name: 'Classic Grilled Chicken',
    desc: 'Lean grilled chicken meal — clean protein, zero fuss.',
    photoId: 'photo-1532550907401-a500c9a57435',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 245, protein: 64, fat: 5, fiber: 0, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'garlic-herb-grilled-chicken', name: 'Garlic Herb Grilled Chicken',
    desc: 'Garlic herb flavored grilled chicken with aromatic seasoning.',
    photoId: 'photo-1604908176997-125f25cc6f3d',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 255, protein: 64, fat: 5, fiber: 0.5, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'spicy-chilli-chicken-low-oil', name: 'Spicy Chilli Chicken (Low Oil)',
    desc: 'Low oil spicy chilli chicken — bold flavour, light on calories.',
    photoId: 'photo-1603360946369-dc9bb6258143',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 260, protein: 64, fat: 6, fiber: 0.5, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'lean-chicken-keema', name: 'Lean Chicken Keema',
    desc: 'Lean minced chicken meal packed with spices and clean protein.',
    photoId: 'photo-1545247181-516773cae754',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 260, protein: 64, fat: 7, fiber: 0.5, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'peri-peri-grilled-chicken', name: 'Peri-Peri Grilled Chicken',
    desc: 'Peri-peri seasoned grilled chicken with a fiery kick.',
    photoId: 'photo-1567188040759-fb8a883dc6d8',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 245, protein: 64, fat: 5, fiber: 0, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'high-protein-chilli-chicken-with-paneer', name: 'High-Protein Chilli Chicken with Paneer',
    desc: 'Double-protein powerhouse — chilli chicken meets paneer.',
    photoId: 'photo-1565557623262-b51c2513a641',
    price: '₹230', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 300, protein: 64, fat: 10, fiber: 0.9, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'tandoori-style-chicken-tikka', name: 'Tandoori Style Chicken Tikka',
    desc: 'Tandoori style chicken tikka — smoky, spiced, char-grilled.',
    photoId: 'photo-1599487488170-d11ec9c172f0',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 265, protein: 64, fat: 6, fiber: 0.6, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'boiled-garlic-chicken-clean-protein', name: 'Boiled Garlic Chicken (Clean Protein)',
    desc: 'Clean protein garlic chicken — the purest macro meal.',
    photoId: 'photo-1490645935967-10de6ba17061',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 240, protein: 64, fat: 4, fiber: 0.9, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'italian-herb-grilled-chicken', name: 'Italian Herb Grilled Chicken',
    desc: 'Italian herb grilled chicken with a hint of chilli flakes.',
    photoId: 'photo-1467003909585-2f8a72700288',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 255, protein: 64, fat: 6, fiber: 0.6, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'signature-spiced-protein-chicken', name: 'Signature Spiced Protein Chicken',
    desc: "ProFit's signature recipe — spiced to perfection.",
    photoId: 'photo-1574484284002-952d92456975',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 260, protein: 64, fat: 6, fiber: 0.6, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'garlic-protein-chilli-chicken', name: 'Garlic Protein Chilli Chicken',
    desc: 'Garlic-forward chilli chicken built for your macros.',
    photoId: 'photo-1518492104633-130d0cc84637',
    price: '₹210', diet: 'Non Vegetarian', tags: ['High Protein', 'Lab-Verified'], goals: ['High Protein'],
    kcal: 248, protein: 64, fat: 5, fiber: 0.2, portion: '', allergens: [], ingredients: [],
  },

  // Pure vegetarian
  {
    slug: 'veggie-sandwich', name: 'Veggie Sandwich',
    desc: 'Fresh veggie sandwich with light seasoning & flavors.',
    photoId: 'photo-1553909489-cd47e0907980',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'cheese-garlic-paneer', name: 'Cheese & Garlic Paneer',
    desc: 'Creamy garlic paneer tossed in rich cheesy flavors.',
    photoId: 'photo-1631292784640-2b24be784d5d',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'paneer-continental', name: 'Paneer Continental',
    desc: 'Herb-flavored continental paneer with mild spices.',
    photoId: 'photo-1565557623262-b51c2513a641',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'garlic-mushroom', name: 'Garlic Mushroom',
    desc: 'Garlic sautéed mushrooms with rich herb seasoning.',
    photoId: 'photo-1504674900247-0877df9cc836',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'red-white-sauce-pasta', name: 'Red & White Sauce Pasta',
    desc: 'Creamy pasta in a rich red & white sauce blend.',
    photoId: 'photo-1555949258-eb67b1ef0ceb',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'paneer-tandoori-tikka', name: 'Paneer Tandoori Tikka',
    desc: 'Smoky tandoori paneer grilled with Indian spices.',
    photoId: 'photo-1567188040759-fb8a883dc6d8',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'tuvar-masoor-pulse-mix', name: 'Tuvar & Masoor Pulse Mix',
    desc: 'Protein-rich mix of nutritious tuvar & masoor dal.',
    photoId: 'photo-1547592166-23ac45744acd',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'chilly-soya-with-capsicum-onion', name: 'Chilly Soya with Capsicum & Onion',
    desc: 'Spicy soya tossed with capsicum & onion flavors.',
    photoId: 'photo-1512621776951-a57141f2eefd',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'peri-peri-paneer', name: 'Peri-Peri Paneer',
    desc: 'Spicy peri-peri paneer packed with bold flavors.',
    photoId: 'photo-1599021419847-d8a7a6aba5b4',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'palak-paneer', name: 'Palak Paneer',
    desc: 'Soft paneer cooked in creamy fresh spinach gravy.',
    photoId: 'photo-1585937421612-70a008356fbe',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'brown-bread-sandwich', name: 'Brown Bread Sandwich',
    desc: 'Healthy brown bread sandwich with fresh veggie filling.',
    photoId: 'photo-1484723091739-30a097e8f929',
    price: '₹210', diet: 'Pure Vegetarian', tags: ['Pure Vegetarian'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },

  // Egg based — 4 eggs per tray, 24g protein
  {
    slug: 'cleanfuel-egg-pods', name: 'CleanFuel Egg Pods',
    desc: 'Four perfectly cooked egg pods — clean energy, high protein.',
    photoId: 'photo-1482049016688-2d3e1b311543',
    price: '₹200', diet: 'Egg Based', tags: ['High Protein', '4-Egg Tray'], goals: ['High Protein'],
    kcal: 280, protein: 24, fat: 20, fiber: null, portion: '4-egg tray', allergens: [], ingredients: [],
  },
  {
    slug: 'spicelift-egg-scramble', name: 'SpiceLift Egg Scramble',
    desc: 'Spiced egg scramble to kickstart your metabolism.',
    photoId: 'photo-1525351484163-7529414344d8',
    price: '₹200', diet: 'Egg Based', tags: ['High Protein', '4-Egg Tray'], goals: ['High Protein'],
    kcal: 280, protein: 24, fat: 20, fiber: null, portion: '4-egg tray', allergens: [], ingredients: [],
  },
  {
    slug: 'leancloud-egg-whites', name: 'LeanCloud Egg Whites',
    desc: 'Pure egg whites — zero yolk, maximum lean protein.',
    photoId: 'photo-1607532941433-304659e8198a',
    price: '₹200', diet: 'Egg Based', tags: ['High Protein', '4-Egg Tray'], goals: ['High Protein'],
    kcal: 280, protein: 24, fat: 20, fiber: null, portion: '4-egg tray', allergens: [], ingredients: [],
  },
  {
    slug: 'golden-core-omelette', name: 'Golden Core Omelette',
    desc: 'Fluffy whole-egg omelette with herbs and seasoning.',
    photoId: 'photo-1504674900247-0877df9cc836',
    price: '₹200', diet: 'Egg Based', tags: ['High Protein', '4-Egg Tray'], goals: ['High Protein'],
    kcal: 280, protein: 24, fat: 20, fiber: null, portion: '4-egg tray', allergens: [], ingredients: [],
  },
  {
    slug: 'freshfuel-egg-toss', name: 'FreshFuel Egg Toss',
    desc: 'Light egg toss with fresh veggies and minimal oil.',
    photoId: 'photo-1448043552756-e747b7a2b2b8',
    price: '₹200', diet: 'Egg Based', tags: ['High Protein', '4-Egg Tray'], goals: ['High Protein'],
    kcal: 280, protein: 24, fat: 20, fiber: null, portion: '4-egg tray', allergens: [], ingredients: [],
  },
  {
    slug: 'energygrain-egg-bowl', name: 'EnergyGrain Egg Bowl',
    desc: 'Eggs over a wholesome grain bowl for sustained energy.',
    photoId: 'photo-1512621776951-a57141f2eefd',
    price: '₹200', diet: 'Egg Based', tags: ['High Protein', '4-Egg Tray'], goals: ['High Protein'],
    kcal: 280, protein: 24, fat: 20, fiber: null, portion: '4-egg tray', allergens: [], ingredients: [],
  },
  {
    slug: 'heritage-protein-egg-curry', name: 'Heritage Protein Egg Curry',
    desc: 'Traditional egg curry — homestyle, hearty, high-protein.',
    photoId: 'photo-1601050690597-df0568f70950',
    price: '₹200', diet: 'Egg Based', tags: ['High Protein', '4-Egg Tray'], goals: ['High Protein'],
    kcal: 280, protein: 24, fat: 20, fiber: null, portion: '4-egg tray', allergens: [], ingredients: [],
  },

  // Juices & smoothies
  {
    slug: 'abc-vitality-elixir', name: 'ABC Vitality Elixir',
    desc: 'Beetroot, apple & carrot blend to boost energy and blood flow.',
    photoId: 'photo-1610970881699-44a5587cabec',
    price: '₹129', diet: 'Juices', tags: ['Natural Ingredients'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'coconut-pure-electrolyte', name: 'Coconut Pure Electrolyte',
    desc: 'Natural coconut hydration rich in essential electrolytes.',
    photoId: 'photo-1544145945-f90425340c7e',
    price: '₹129', diet: 'Juices', tags: ['Natural Ingredients'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'date-fuel-smoothie', name: 'Date Fuel Smoothie',
    desc: 'Dates blended for quick energy and natural sweetness.',
    photoId: 'photo-1502741338009-cac2772e18bc',
    price: '₹129', diet: 'Juices', tags: ['Natural Ingredients'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'watermelon-refresh-elixir', name: 'Watermelon Refresh Elixir',
    desc: 'Cooling watermelon drink for instant hydration and recovery.',
    photoId: 'photo-1683531658992-b78c311900a3',
    price: '₹129', diet: 'Juices', tags: ['Natural Ingredients'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'ultimate-detox-infusion', name: 'Ultimate Detox Infusion',
    desc: 'Cleansing blend to support digestion and daily detox.',
    photoId: 'photo-1622597467836-f3285f2131b8',
    price: '₹129', diet: 'Juices', tags: ['Natural Ingredients'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'botanical-rose-iced-tea', name: 'Botanical Rose Iced Tea',
    desc: 'Light rose-infused iced tea with a refreshing floral note.',
    photoId: 'photo-1556679343-c7306c1976bc',
    price: '₹119', diet: 'Juices', tags: ['Natural Ingredients'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
  {
    slug: 'berry-antiox-cooler', name: 'Berry Antiox Cooler',
    desc: 'Mixed berries loaded with antioxidants for immunity support.',
    photoId: 'photo-1570696516188-ade861b84a49',
    price: '₹139', diet: 'Juices', tags: ['Natural Ingredients'], goals: [],
    kcal: null, protein: null, fat: null, fiber: null, portion: '', allergens: [], ingredients: [],
  },
];

export const categories = [
  'All', 'Non Vegetarian', 'Pure Vegetarian', 'Egg Based', 'Juices', 'High Protein',
];

export const goals = [
  {
    title: 'Non Vegetarian', filter: 'Non Vegetarian',
    blurb: 'Chicken & lean meat meals · 64g protein per box.',
    photoId: 'photo-1532550907401-a500c9a57435',
  },
  {
    title: 'Pure Vegetarian', filter: 'Pure Vegetarian',
    blurb: 'Paneer, soya, dals & fresh veg bowls.',
    photoId: 'photo-1565557623262-b51c2513a641',
  },
  {
    title: 'Egg Based', filter: 'Egg Based',
    blurb: '4-egg trays · 24g protein per box.',
    photoId: 'photo-1482049016688-2d3e1b311543',
  },
  {
    title: 'Juices & Smoothies', filter: 'Juices',
    blurb: 'Fresh juices & smoothies made with natural ingredients for energy, recovery and wellness.',
    photoId: 'photo-1610970881699-44a5587cabec',
  },
];

export const plans = [
  {
    slug: 'nonveg', name: 'Non Vegetarian', popular: false,
    blurb: 'Chicken & lean meat meals · 64g protein per box, lab-verified.',
    meals: 26, recipes: 11,
    pricing: { box6: 210, box26: 200, total6: 1260, total26: 5200 },
    benefits: [
      '64g protein per box, lab-verified',
      '11 chicken & lean-meat recipes',
      'Cooked fresh, dispatched daily',
      'Carry forward missed meals up to 2 weeks',
      'No deliveries on Sundays or holidays',
      'Same-day cancel · 3 hrs prior notice',
    ],
  },
  {
    slug: 'veg', name: 'Pure Vegetarian', popular: false,
    blurb: 'Paneer, soya, mushroom & pulse-mix bowls on rotation.',
    meals: 26, recipes: 11,
    pricing: { box6: 210, box26: 200, total6: 1260, total26: 5200 },
    benefits: [
      'Paneer, soya, mushroom, pulse mixes',
      '11 vegetarian recipes on rotation',
      'Cooked fresh, dispatched daily',
      'Carry forward missed meals up to 2 weeks',
      'No deliveries on Sundays or holidays',
      'Same-day cancel · 3 hrs prior notice',
    ],
  },
  {
    slug: 'egg', name: 'Egg Based', popular: false,
    blurb: '4-egg trays · 24g protein per box.',
    meals: 26, recipes: 7,
    pricing: { box6: 200, box26: 190, total6: 1200, total26: 4940 },
    benefits: [
      '4 eggs per tray · 24g protein',
      '7 egg-based recipes on rotation',
      'Cooked fresh, dispatched daily',
      'Carry forward missed meals up to 2 weeks',
      'No deliveries on Sundays or holidays',
      'Same-day cancel · 3 hrs prior notice',
    ],
  },
];

export const testimonials = [
  {
    quote: 'Six months in. I went from 78 to 84 kg with visible abs the whole way. The protein hits are real — I weighed the food.',
    name: 'Rohan Mehta', tag: 'Powerlifter, Vijay Nagar',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    quote: "I run a clinic and have zero time to cook. ProfitMeals is the only thing that's kept my macros on track three years running.",
    name: 'Dr. Anjali Rao', tag: 'Sports Nutritionist',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
  },
  {
    quote: "Cut 11 kg in four months without ever feeling like I was on a diet. The veg lunches actually taste like food I'd order out.",
    name: 'Kabir Iyer', tag: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&q=80',
  },
];

export const faqs = [
  { q: 'Are meals freshly prepared?', a: 'Every meal is cooked the morning it ships. Nothing is frozen and nothing sits longer than 18 hours from kitchen to door. Meals arrive in compostable, microwave-safe trays.' },
  { q: 'What ingredients do you refuse to use?', a: "No thickeners or stabilizers, no artificial flavour enhancers or colours, and no palm oil or chemically processed margarine. If a label looks like a chemistry set, it doesn't make it into our kitchen." },
  { q: 'What defines your food philosophy?', a: 'Clean, honest ingredients first. The menu is plant-forward, fresh, and thoughtfully sourced, and when we sweeten something we reach for jaggery, dates or honey — never refined sugar or artificial syrups.' },
  { q: 'How do you cook in your kitchen?', a: 'Everything is made from scratch — no shortcuts, no pre-made bases. We import Italian San Marzano tomatoes for our sauces because they bring real depth and balance, and we cook in small batches so quality stays consistent.' },
  { q: 'What should I expect on my plate?', a: 'Homestyle, clean and minimally processed food. Portions are balanced — not drowned in cream, butter or oil — so each dish lets its actual ingredients carry the flavour.' },
  { q: 'How does the subscription work?', a: 'Pick a plan, pick your meals on Sunday, and we deliver fresh trays daily Monday through Saturday. Pause, skip or cancel anytime — no lock-in, no cancellation fees.' },
  { q: 'Which areas in Indore do you deliver to?', a: 'Right now we deliver across Indore — Vijay Nagar, Palasia, Sudama Nagar, Rau and MR-10. We hit your address between 7am–10am for breakfast and 11am–2pm for lunch + dinner together.' },
  { q: "What if a meal doesn't show up or arrives cold?", a: "We refund or recook, no questions asked. Just tap 'Report meal' in the app within four hours and we'll credit your account or have a fresh tray on its way." },
];

export const zones = [
  { zone: 'Vijay Nagar, Palasia, Sudama Nagar, Rau & MR-10', slots: 'Breakfast 7–10am · Lunch & dinner 11am–2pm' },
];

export const marqueeItems = [
  'Fuel Your Goals', 'Cooked This Morning', '30–60g Protein', 'Veg & Non-Veg', 'Delivered Fresh', 'No Lock-In',
];

export const howItWorks = [
  ['Choose Your Plan', 'Weekly or monthly, 1 or 2 meals a day, veg or non-veg. Switch any time without penalty.'],
  ['Select Your Meals', 'Browse the rotating menu every Sunday. Filter by goal, swap macros, save favorites.'],
  ['Eat Fresh Daily', 'We cook the morning of, and your trays land in your two-hour window. No prep, no cleanup.'],
];

export const heroImage = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80&auto=format&fit=crop';
