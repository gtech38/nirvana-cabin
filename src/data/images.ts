export interface CabinImage {
  id: string
  url: string
  caption: string
  category: 'exterior' | 'living' | 'kitchen' | 'bedroom' | 'bathroom' | 'outdoor' | 'gameroom'
}

// Photos are hosted in Google Drive (folder: 1K1DIJ3A_aWOwYtTiJ_ggd_dQrJDbmtMx).
// URLs use the Drive thumbnail endpoint — no API key required for publicly-shared files.
// sz=w1920 gives full-width resolution suitable for hero and gallery use.
const gd = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1920`

export const images: CabinImage[] = [
  // ── Exterior ──────────────────────────────────────────────────────────────
  { id: 'astro',        url: gd('134Eiie1Im3BKehGo85_9hIQrg8WhO-V-'), caption: 'Nirvana Cabin under a galaxy of stars',                category: 'exterior' },
  { id: 'exterior-n',  url: gd('1SmOmncG0VnKA3zyQy0iKADADQv-xExEt'), caption: 'Nirvana Cabin — exterior view',                        category: 'exterior' },
  { id: 'dsc4770',     url: gd('1C5Y5BNRss2z0hGx33f8VCvh4QZS2wnC7'), caption: 'Cabin nestled in the Ouachita forest',                 category: 'exterior' },
  { id: 'dsc4812',     url: gd('1j9mZ0Xl7MhKyyiLgqsOYu2CZivNDSXwy'), caption: 'Approaching Nirvana — long driveway through the pines', category: 'exterior' },
  { id: 'dsc5090',     url: gd('1Shi4Er-h0JWaJqzUz1URL1FZcX74Gd70'), caption: 'Big cabin, bigger views',                              category: 'exterior' },
  { id: 'dsc5553',     url: gd('1q2DuwnQgMDPsEkfnmp-y34d79LJZEje5'), caption: 'Nirvana at dusk',                                      category: 'exterior' },
  { id: 'dsc5556',     url: gd('1GHr6VL-CbFhVsupZkUn0AWICIIW_y8jv'), caption: 'The forest surrounds you from every angle',            category: 'exterior' },
  { id: 'dsc0411',     url: gd('1JJznN7_VIQsvUmcLmBrI-agyLaFI27DL'), caption: 'Nirvana — where nature meets luxury',                  category: 'exterior' },

  // ── Living ────────────────────────────────────────────────────────────────
  { id: 'living-view',    url: gd('19yEh1URLgZU7QTEBNmE0Bt85oG9c142F'), caption: 'Living room with floor-to-ceiling forest views',       category: 'living' },
  { id: 'windowwall',     url: gd('1VFLjrAL5Q0oV2mfS6R8ESYCpr9me1Jm5'), caption: 'The window wall — a living canvas of the forest',      category: 'living' },
  { id: 'fireplace',      url: gd('1r7kPF-o-6vjTfdu4lOFt8m9c4K6uPhzo'), caption: 'Stone fireplace in the great room',                    category: 'living' },
  { id: 'greathall-over', url: gd('1Z_7zNzxptWsvKJf7M-YfmVeKv-piIus5'), caption: 'Great hall overlook — open-plan living at its finest', category: 'living' },
  { id: 'greathall-bed',  url: gd('1Dg4GTp1K_73R7Nm2uaJmmJleuD7CQorO'), caption: 'Great hall with views to the bedroom wing',            category: 'living' },
  { id: 'dsc4974',        url: gd('1EB-g8F6kp1ewRgFva79pQF34wwofeyW1'), caption: 'Open, airy, endlessly inviting',                       category: 'living' },
  { id: 'dsc4975',        url: gd('1iBBeKfA2HUMn7VshA7HUj6lD8wQviHdW'), caption: 'Every seat in the house has a view',                   category: 'living' },
  { id: 'dsc5425',        url: gd('1a50DXPCUSaHQ2HMtTRk67hdzgbU9fG0v'), caption: 'Light-filled great room at golden hour',               category: 'living' },

  // ── Kitchen & Dining ──────────────────────────────────────────────────────
  { id: 'kitchen-view',   url: gd('1F3fnBzTYhzpj9yJb78MiO2TTdeFYw3NV'), caption: 'Chef\'s kitchen with panoramic mountain views',        category: 'kitchen' },
  { id: 'kitchen-gh',     url: gd('1oXMDI4MV_k0hSFYF1ZdCSL8fIOjhu_iA'), caption: 'Kitchen opening to the great hall',                    category: 'kitchen' },
  { id: 'gh-kitchen',     url: gd('1lN2JISlvvHgjzpN22qOHQjQ6trtf7mgL'), caption: 'Great hall kitchen — cook and connect',                category: 'kitchen' },
  { id: 'dining-views',   url: gd('1BuiR24QNUGi2U52tLJASXkAlbxfptVnp'), caption: 'Dining area with sweeping forest views',               category: 'kitchen' },
  { id: 'dining-kitchen', url: gd('1jsTpoRjOJibjPtO4931Ho2IyG1uReo4U'), caption: 'Dining and kitchen — where meals become memories',     category: 'kitchen' },
  { id: 'coffee-nook',    url: gd('1MirPM_rmfxxq33JWZjeeBr9YOYonrivH'), caption: 'Coffee nook with morning forest views',                category: 'kitchen' },
  { id: 'coffee-views',   url: gd('1NcL409C04RZXBvGVb9H0Zueq9fE-I3su'), caption: 'Morning coffee, served with a side of scenery',        category: 'kitchen' },
  { id: 'coffee-window',  url: gd('10hfF24Q4_KQicxTjvhSHD_yORdETcZE9'), caption: 'Coffee nook by the window wall',                       category: 'kitchen' },
  { id: 'dsc5418',        url: gd('1x16qTe7zFMX0RVR5Fggab4wlJv5aiOgf'), caption: 'Setting the table for unforgettable moments',          category: 'kitchen' },

  // ── Bedrooms ──────────────────────────────────────────────────────────────
  { id: 'master-bed',    url: gd('168Hj_QqtIg8uD3V_RnbMX4LH0awRf1qV'), caption: 'Master bedroom — King Bedroom 1',                      category: 'bedroom' },
  { id: 'master-across', url: gd('1w-jWtVD_Pk26mO-vpN3AqGABbmnXoxd6'), caption: 'King Bedroom 1 — waking up to the forest',             category: 'bedroom' },
  { id: 'bed1-bed',      url: gd('1kHH-zW6RTpsxvUAxELO7FblmLw81A9FX'), caption: 'King Bedroom 1 — layers of warmth',                    category: 'bedroom' },
  { id: 'bed1-view',     url: gd('1fCerFJ9UF6IXm7VQkspPnZwub_D5zwU_'), caption: 'Bedroom 1 — private balcony and forest views',         category: 'bedroom' },
  { id: 'bed2-view',     url: gd('1bw4_AM_su-bcz2IkUwf9VefHC4MVurRa'), caption: 'Bedroom 2 — wake up to views that take your breath away', category: 'bedroom' },
  { id: 'bed3-view',     url: gd('19J4RGMjRfQAgl6mUJD149NNjbA5-IicV'), caption: 'Bedroom 3 — forest views in every direction',          category: 'bedroom' },
  { id: 'bed5-door',     url: gd('1hV9KsJgiWAFfRkIEWIir3KQEAvGEiT8I'), caption: 'Bedroom 5 — a retreat within a retreat',               category: 'bedroom' },
  { id: 'bunk-bed1',     url: gd('1EcG_ZHJoJF4UOqqD0U5xTjoGlUg274C6'), caption: 'Bunk room — four queens, perfect for groups',          category: 'bedroom' },
  { id: 'bunk-bed2',     url: gd('1mQGD62HmZAALzZCeVuojJCYe6h-JAqrC'), caption: 'Bunk room — cozy vibes and scenic sights',             category: 'bedroom' },
  { id: 'bunks',         url: gd('1Myufsmfss6ADib9c06Eo4XjP5GMktSLT'), caption: 'Bunk room with picture-frame window',                  category: 'bedroom' },
  { id: 'dsc5392',       url: gd('1PjaVK4Z1KwUm8vu7VJBJJoCChF0FXsOq'), caption: 'Sleep, unwind, repeat',                                category: 'bedroom' },
  { id: 'dsc5400',       url: gd('15hc_CU3474xM9magX5AR_oEU9bI4ro4a'), caption: 'Soft light and restful spaces',                        category: 'bedroom' },
  { id: 'dsc5402',       url: gd('1d02zmXVM1aCn-6lubDmkWbZE8BsNeTGG'), caption: 'Dreams are sweeter in a space this cozy',              category: 'bedroom' },

  // ── Bathrooms ─────────────────────────────────────────────────────────────
  { id: 'bathroom1',    url: gd('14v5rIEDZsjsbxLXYJAfauw85VxGaB4P8'), caption: 'Ensuite bathroom — clean lines and natural light',      category: 'bathroom' },
  { id: 'master-shower',url: gd('1E0t1P2JO1OHGxZ_bvdahhSdrNsgMo6Db'), caption: 'Master ensuite — spa-quality shower',                  category: 'bathroom' },
  { id: 'sink-br1-5',   url: gd('1b88dIhStE74Zt9Th1vFtk0p2UHj4lHVM'), caption: 'Ensuite vanity — sleek sink, spotless mirror',         category: 'bathroom' },
  { id: 'bunk-shower',  url: gd('162jvju5ZM8jALFMA7JZRyr9QiIPOR19a'), caption: 'Bunk room ensuite shower',                             category: 'bathroom' },
  { id: 'half-bath',    url: gd('1yBRlw7V1FVz1b92KmtUXbiXNu-IqgVOK'), caption: 'Half bath off the game room',                          category: 'bathroom' },

  // ── Outdoor ───────────────────────────────────────────────────────────────
  { id: 'patio-fire-sunset', url: gd('1ky3_FBJG11vUDZP3kFyxz7eL6B9Q5PQT'), caption: 'Patio fireplace at golden hour',                  category: 'outdoor' },
  { id: 'patio-grill',       url: gd('184ZwTg5g4_6lG0TxShVXFSrg4gDEnlqm'), caption: 'Outdoor grill — BBQ by day, fire by night',        category: 'outdoor' },
  { id: 'master-patio-view', url: gd('1bFfMGFg-kcrFykbo2vxSDFifmSmat7zk'), caption: 'Master bedroom patio — private forest views',      category: 'outdoor' },
  { id: 'communal-seating',  url: gd('1JEnk9tx64IJHMmCV5JftS1CqPqnb9Yu1'), caption: 'Communal patio seating — gather and unwind',       category: 'outdoor' },
  { id: 'gazebo-day',        url: gd('1n3U9ukZXzQV4ZfjGWmzDj_cgzLEq-cIb'), caption: 'Private gazebo — the perfect perch for daydreams', category: 'outdoor' },
  { id: 'firepit-gazebo',    url: gd('1V13JSrNWE3NPFv6pvKKpXiYcMKYYfXUF'), caption: 'Back patio with gazebo and firepit',               category: 'outdoor' },
  { id: 'firepit-night',     url: gd('1mifTPb5KhJi1pdqS2Gs_q-_PhRF-NJgq'), caption: 'Gazebo and firepit glowing under the stars',       category: 'outdoor' },
]

// Named exports for hero/editorial use in pages
export const heroImage        = images.find(i => i.id === 'astro')!
export const hotTubImage      = images.find(i => i.id === 'master-patio-view')!
export const firepitImage     = images.find(i => i.id === 'patio-fire-sunset')!
export const livingImage      = images.find(i => i.id === 'living-view')!
export const exteriorImage    = images.find(i => i.id === 'exterior-n')!
export const gazeboNightImage = images.find(i => i.id === 'firepit-night')!
export const windowWallImage  = images.find(i => i.id === 'windowwall')!
export const arcadeImage      = images.find(i => i.id === 'greathall-bed')!

export const getByCategory = (cat: CabinImage['category']) =>
  images.filter(i => i.category === cat)
