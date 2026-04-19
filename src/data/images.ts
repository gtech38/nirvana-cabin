export interface CabinImage {
  id: string;
  url: string;
  alt: string; // Room/Space label for accessibility
  caption: string; // Marketing caption
  category:
    | "exterior"
    | "living"
    | "kitchen"
    | "bedroom"
    | "bathroom"
    | "outdoor"
    | "gameroom";
}

// Photos served from /public/photos/ as Vite static assets.
// Filename convention: Picture-N.jpg where N is the row number from the spreadsheet.
const lp = (n: number) => `/photos/Picture-${n}.jpg`;

export const images: CabinImage[] = [
  {
    id: "1",
    url: lp(1),
    alt: "Entryway of cabin from Driveway entrance",
    caption:
      "Cozy cabin vibes under a galaxy of stars - your perfect night escape awaits!",
    category: "exterior",
  },
  {
    id: "2",
    url: lp(2),
    alt: "Second deck patio view",
    caption: "When the view does all the talking.",
    category: "outdoor",
  },
  {
    id: "3",
    url: lp(3),
    alt: "Great Hall from upstairs",
    caption: "Living, dining and dreaming - all under one breathtaking roof.",
    category: "living",
  },
  {
    id: "4",
    url: lp(4),
    alt: "Kitchen/Dining from stairs",
    caption: "Kitchen to table, with a side of scenery.",
    category: "kitchen",
  },
  {
    id: "5",
    url: lp(5),
    alt: "Main North deck from Gameroom",
    caption:
      "Outdoor living done right; TV for the game, grill for the feast, and couches for the squad.",
    category: "outdoor",
  },
  {
    id: "6",
    url: lp(6),
    alt: "Firepit view from front door",
    caption:
      "Golden hour by the fire pit - where the sunsets and s'mores steal the show!",
    category: "outdoor",
  },
  {
    id: "7",
    url: lp(7),
    alt: "Living room and ShuffleBoard from stairs",
    caption: "Where comfort meets class and warmth meets style.",
    category: "living",
  },
  {
    id: "8",
    url: lp(8),
    alt: "Great Hall from Fireplace",
    caption: "From the comfort of the couch to the warmth of the kitchen.",
    category: "living",
  },
  {
    id: "9",
    url: lp(9),
    alt: "Great Hall from bedroom corridor",
    caption: "An open design for connection and comfort.",
    category: "living",
  },
  {
    id: "10",
    url: lp(10),
    alt: "Great Hall from Gameroom",
    caption: "Open, airy and endlessly inviting - welcome to your living room.",
    category: "living",
  },
  {
    id: "11",
    url: lp(11),
    alt: "Living Room Fireplace",
    caption: "Round, radiant, and ready to cozy up your space.",
    category: "living",
  },
  {
    id: "12",
    url: lp(12),
    alt: "Shuffleboard from Living Room couches",
    caption: "Game on! Shuffleboard with a view - who's in?",
    category: "living",
  },
  {
    id: "13",
    url: lp(13),
    alt: "Great Room view from Shuffleboard/Gameroom corner",
    caption: "Because every great family room needs a side of shuffle.",
    category: "living",
  },
  {
    id: "14",
    url: lp(14),
    alt: "Coffee Nook from Island counter",
    caption:
      "Sunlit mornings served here - breakfast with a view you'll never forget.",
    category: "kitchen",
  },
  {
    id: "15",
    url: lp(15),
    alt: "Dining placesetting closeup",
    caption:
      "Dining in style - where every meal feels like a special occasion.",
    category: "kitchen",
  },
  {
    id: "16",
    url: lp(16),
    alt: "Kitchen/dining deck view from Foyer",
    caption: "Cook. Eat. Gaze. Repeat.",
    category: "kitchen",
  },
  {
    id: "17",
    url: lp(17),
    alt: "Coffee Nook from Kitchen",
    caption:
      "Where cozy meets scenic - gather 'round the table, steps away from family room comfort.",
    category: "kitchen",
  },
  {
    id: "18",
    url: lp(18),
    alt: "Great Hall/island/dining/deck from entry",
    caption:
      "Open spaces, endless memories - where meals, movies and moments come together.",
    category: "living",
  },
  {
    id: "19",
    url: lp(19),
    alt: "Great Hall from island sink",
    caption: "Open-plan living that's equal parts style and function.",
    category: "living",
  },
  {
    id: "20",
    url: lp(20),
    alt: "Dining table from front door",
    caption: "Setting the table for unforgettable moments.",
    category: "kitchen",
  },
  {
    id: "21",
    url: lp(21),
    alt: "Coffee Station from Nook",
    caption:
      "Morning magic starts here - coffee, calm vibes, and a perfect breakfast nook.",
    category: "kitchen",
  },
  {
    id: "22",
    url: lp(22),
    alt: "Bedroom 3 view of Terrace",
    caption: "A retreat within a retreat - bedroom bliss with a balcony kiss.",
    category: "bedroom",
  },
  {
    id: "23",
    url: lp(23),
    alt: "Bedroom 1 from entrance",
    caption: "Sleep, unwind, repeat - with a view that never quits.",
    category: "bedroom",
  },
  {
    id: "24",
    url: lp(24),
    alt: "Bedroom 3 bed/accent wall, dual window Terrace view",
    caption: "Wake up to views that take your breath away.",
    category: "bedroom",
  },
  {
    id: "25",
    url: lp(25),
    alt: "Terrace Deck Lounge from Bedroom 3 windows",
    caption: "Sipping on serenity as the sun says goodnight.",
    category: "outdoor",
  },
  {
    id: "26",
    url: lp(26),
    alt: "Terrace Deck High Bar Chairs",
    caption: "Where conversations pause, and the sunset speaks.",
    category: "outdoor",
  },
  {
    id: "27",
    url: lp(27),
    alt: "Terrace Deck Lounge from deck door",
    caption: "Your front-row seat to nature's masterpiece.",
    category: "outdoor",
  },
  {
    id: "28",
    url: lp(28),
    alt: "Bedroom 3 Bathroom",
    caption: "Clean lines, fresh vibes, and a whole bunch of self-care.",
    category: "bathroom",
  },
  {
    id: "29",
    url: lp(29),
    alt: "Bedroom 1 bed, natural wood walls",
    caption: "Layers of warmth and a whole lot of charm.",
    category: "bedroom",
  },
  {
    id: "30",
    url: lp(30),
    alt: "Bedroom 3 bed, accent wall, nite stands",
    caption: "Dreams are sweeter in a space this cozy.",
    category: "bedroom",
  },
  {
    id: "31",
    url: lp(31),
    alt: "Bedroom 2 Bath Vanity",
    caption: "Sleek sink, spotless mirror, and endless style.",
    category: "bathroom",
  },
  {
    id: "32",
    url: lp(32),
    alt: "Bedroom 2 from entrance",
    caption: "Wake up, step out and breathe in the view.",
    category: "bedroom",
  },
  {
    id: "33",
    url: lp(33),
    alt: "Bedroom 1 balcony bistro set",
    caption: "Bistro charm meets forest magic - your perfect retreat.",
    category: "outdoor",
  },
  {
    id: "34",
    url: lp(34),
    alt: "Bedroom 2 balcony bistro set",
    caption:
      "The perfect recipe for a peaceful evening - tea, a book, and good company.",
    category: "outdoor",
  },
  {
    id: "35",
    url: lp(35),
    alt: "Bedroom 2 balcony view",
    caption: "Nature's masterpiece, served fresh from a private balcony.",
    category: "outdoor",
  },
  {
    id: "36",
    url: lp(36),
    alt: "Bedroom 2 balcony bistro set",
    caption: "Sipping serenity one view at a time.",
    category: "outdoor",
  },
  {
    id: "37",
    url: lp(37),
    alt: "Powder room downstairs by Gameroom",
    caption: "Where morning routines turn into rituals.",
    category: "bathroom",
  },
  {
    id: "38",
    url: lp(38),
    alt: "Bedroom 5 balcony bistro set",
    caption: "A table for two, with nature as a backdrop.",
    category: "outdoor",
  },
  {
    id: "39",
    url: lp(39),
    alt: "Bedroom 1 Bathroom Vanity",
    caption: "Reflection perfection - where mornings start fresh.",
    category: "bathroom",
  },
  {
    id: "40",
    url: lp(40),
    alt: "Bedroom 1 from entrance",
    caption:
      "Catch sunsets from bed or binge your favorite shows - why not both?",
    category: "bedroom",
  },
  {
    id: "41",
    url: lp(41),
    alt: "View of Main Deck and Terrace from Hot tub at sunset",
    caption: "Just you, the forest, and a moment to breathe.",
    category: "outdoor",
  },
  {
    id: "42",
    url: lp(42),
    alt: "View on Main Deck from Hot tub Sunset views",
    caption: "Nature paints the sky as the forest whispers goodnight.",
    category: "outdoor",
  },
  {
    id: "43",
    url: lp(43),
    alt: "Firepit from Entrance, sunrise, forest background",
    caption:
      "Your nature retreat awaits - breathe in the forest views and daylight serenity.",
    category: "outdoor",
  },
  {
    id: "44",
    url: lp(44),
    alt: "Gazebo from entryway with forest pine background",
    caption: "The perfect perch for daydreams and deep breaths.",
    category: "exterior",
  },
  {
    id: "45",
    url: lp(45),
    alt: "Gameroom overlooking north deck/swing",
    caption: "Game on! The ultimate hangout spot awaits.",
    category: "gameroom",
  },
  {
    id: "46",
    url: lp(46),
    alt: "Gameroom Arcade with 5000 classic arcade games",
    caption: "Two players, one mission; reclaim the high score!",
    category: "gameroom",
  },
  {
    id: "47",
    url: lp(47),
    alt: "Gameroom from Window to Main Deck",
    caption: "Your VIP pass to all the fun - welcome to the game room.",
    category: "gameroom",
  },
  {
    id: "48",
    url: lp(48),
    alt: "Main Deck Swing with Infinity View",
    caption: "A seat that moves you, in every sense of the word.",
    category: "outdoor",
  },
  {
    id: "49",
    url: lp(49),
    alt: "Bunkroom Leftside beds",
    caption: "Cozy vibes, scenic sights, and the best sleepover ever.",
    category: "bedroom",
  },
  {
    id: "50",
    url: lp(50),
    alt: "Bunkroom Rightside beds",
    caption: "Stacked beds, endless views and memories waiting to be made.",
    category: "bedroom",
  },
  {
    id: "51",
    url: lp(51),
    alt: "Main deck fireplace",
    caption: "BBQ by day, movie night by firelight - this porch has it all.",
    category: "outdoor",
  },
  {
    id: "52",
    url: lp(52),
    alt: "Bunkroom All beds",
    caption: "Nature views paired with cozy bunks - perfection for everyone.",
    category: "bedroom",
  },
  {
    id: "53",
    url: lp(53),
    alt: "Bunkroom Bathroom",
    caption: "A bathroom that makes a splash in both style and function.",
    category: "bathroom",
  },
  {
    id: "54",
    url: lp(54),
    alt: "Main deck Fireplace seating",
    caption: "Cozy flames meet golden rays.",
    category: "outdoor",
  },
  {
    id: "55",
    url: lp(55),
    alt: "Main deck Dinner 6 seating",
    caption: "Dining al fresco with a side of fresh air.",
    category: "outdoor",
  },
  {
    id: "56",
    url: lp(56),
    alt: "Main deck Fireplace at Night",
    caption:
      "Relaxation station: fire crackling, TV glowing, and you unwinding.",
    category: "outdoor",
  },
  {
    id: "57",
    url: lp(57),
    alt: "Gazebo from driveway at dusk",
    caption: "A walkway that feels like a fairytale, ending in a gazebo dream.",
    category: "exterior",
  },
  {
    id: "58",
    url: lp(58),
    alt: "Cabin Entryway from main road",
    caption: "Nestled in the heart of the forest, where nature meets luxury.",
    category: "exterior",
  },
  {
    id: "59",
    url: lp(59),
    alt: "Cabin Entryway from firepit",
    caption: "Flickering flames and endless conversations - firepit therapy.",
    category: "exterior",
  },
  {
    id: "60",
    url: lp(60),
    alt: "Cabin entryway and firepit from driveway entrance",
    caption: "Big windows for daydreaming, a firepit for storytelling.",
    category: "exterior",
  },
  {
    id: "61",
    url: lp(61),
    alt: "Front of cabin, EV charger, and gazebo from driveway",
    caption: "Unplug from the world, but charge up for the road.",
    category: "exterior",
  },
  {
    id: "62",
    url: lp(62),
    alt: "Cabin maindeck from driveway exit",
    caption: "From the windows to the gazebo, every angle is a postcard.",
    category: "exterior",
  },
  {
    id: "63",
    url: lp(63),
    alt: "Cabin Main deck and Gazebo from driveway",
    caption: "A gazebo that's made from memories, laughter and peace.",
    category: "exterior",
  },
  {
    id: "64",
    url: lp(64),
    alt: "Front of cabin from main road",
    caption: "Big cabin, bigger views, and the biggest dose of tranquility.",
    category: "exterior",
  },
  {
    id: "65",
    url: lp(65),
    alt: "Gazebo from driveway",
    caption: "The gazebo's glow turns the night into a fairytale.",
    category: "exterior",
  },
  {
    id: "66",
    url: lp(66),
    alt: "Gazebo from Main deck walkway",
    caption: "A shining centerpiece in the heart of the night.",
    category: "exterior",
  },
];

// Named exports for hero/editorial use in HomePage
export const heroImage = images.find((i) => i.id === "58")!; // Cabin Entryway from main road
export const hotTubImage = images.find((i) => i.id === "41")!; // Hot tub / deck at sunset
export const firepitImage = images.find((i) => i.id === "61")!; // Firepit view from front door
export const livingImage = images.find((i) => i.id === "27")!; // Living room and ShuffleBoard
export const exteriorImage = images.find((i) => i.id === "62")!; // Cabin maindeck from driveway
export const gazeboNightImage = images.find((i) => i.id === "57")!; // Gazebo from driveway at dusk
export const windowWallImage = images.find((i) => i.id === "31")!; // Great Hall from Fireplace
export const arcadeImage = images.find((i) => i.id === "49")!; // Gameroom Arcade

export const getByCategory = (cat: CabinImage["category"]) =>
  images.filter((i) => i.category === cat);
