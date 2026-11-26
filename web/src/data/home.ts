export type Product = {
  slug: string
  name: string
  price: number
  mrp: number
  bg: string
  image: string
  tags: string[]
  category: string
  categoryLabel: string
  description: string
  colors: { name: string; hex: string }[]
  details: string[]
  shipping: string[]
}

export const navLinks = [
  { label: 'Discover', href: '/#categories' },
  { label: 'Shop All', href: '/#trending' },
  { label: 'New Drops', href: '/#trending' },
  { label: 'Gifts', href: '/#occasions' },
  { label: 'Contact', href: '/#footer' },
]

export const features = [
  { icon: '★', label: 'Unique & Rare Products' },
  { icon: '🚚', label: 'Fast & Reliable Shipping' },
  { icon: '🛡', label: 'Secure Payments' },
  { icon: '↺', label: 'Hassle-Free Returns' },
]

export const categories = [
  {
    title: 'Drinkware &\nTumblers',
    image: '/images/Produc_banner.webp',
    big: true,
  },
  {
    title: 'Cute\nGadgets',
    image: '/images/2.png',
    className: 'c1',
  },
  {
    title: 'Home\nDécor',
    image: '/images/3.png',
    className: 'c2',
  },
  {
    title: 'Tech\nAccessories',
    image: '/images/7.png',
    className: 'c3',
  },
  {
    title: 'Stationery\n& Gifts',
    image: '/images/6.png',
    className: 'c4',
  },
  {
    title: 'Lifestyle\nEssentials',
    image: '/images/5.png',
    className: 'c5',
  },
  {
    title: 'Toys &\nCollectibles',
    image: '/images/4.png',
    className: 'c6',
  },
]

export const chips = [
  'All',
  'New Arrivals',
  'Best Sellers',
  'Under ₹999',
  'Gifts',
  'Home & Living',
]

export const products: Product[] = [
  {
    slug: 'ripple-insulated-tumbler-600-ml',
    name: 'Ripple Insulated Tumbler (600 ml)',
    price: 899,
    mrp: 1199,
    bg: 'c-purple',
    image: '/images/download.webp',
    tags: ['All', 'Best Sellers', 'Under ₹999'],
    category: 'Drinkware',
    categoryLabel: 'Drinkware · Ripple Tumbler',
    description:
      'Keep drinks cold or hot for hours in a rippled insulated tumbler with a metal straw and easy-grip handle.',
    colors: [
      { name: 'Purple', hex: '#7b5ea7' },
      { name: 'Silver', hex: '#d9d9d9' },
    ],
    details: [
      '600 ml double-wall insulated tumbler',
      'Includes lid and stainless steel straw',
      'Hand wash recommended',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'mushroom-night-lamp',
    name: 'Mushroom Night Lamp (USB Rechargeable)',
    price: 1299,
    mrp: 1699,
    bg: 'c-amber',
    image: '/images/download_1.webp',
    tags: ['All', 'New Arrivals', 'Home & Living', 'Gifts'],
    category: 'Home Décor',
    categoryLabel: 'Home Décor · Night Lamp',
    description:
      'A soft glowing mushroom lamp that makes any bedside, desk or kids room feel a little more magical.',
    colors: [
      { name: 'Red', hex: '#e11d24' },
      { name: 'Cream', hex: '#f5e6c8' },
    ],
    details: [
      'USB rechargeable silicone night lamp',
      'Touch-friendly soft glow',
      'Ideal for bedrooms and gifting',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'crystal-heart-lamp',
    name: 'Crystal Heart Lamp (Color Changing)',
    price: 1499,
    mrp: 1999,
    bg: 'c-pink',
    image: '/images/download_3.webp',
    tags: ['All', 'Best Sellers', 'Gifts', 'Home & Living'],
    category: 'Home Décor',
    categoryLabel: 'Home Décor · Crystal Lamp',
    description:
      'A faceted crystal heart lamp with warm color-changing light — made for reading corners and rare gifts.',
    colors: [
      { name: 'Pink', hex: '#ff6b9d' },
      { name: 'Gold', hex: '#d4a574' },
    ],
    details: [
      'Color-changing LED crystal heart',
      'Stable metal base',
      'Perfect anniversary or festive gift',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'dino-night-light',
    name: 'Dino Night Light (Silicone Touch)',
    price: 1199,
    mrp: 1499,
    bg: 'c-lime',
    image: '/images/download_4.webp',
    tags: ['All', 'New Arrivals', 'Gifts'],
    category: 'Toys',
    categoryLabel: 'Toys · Night Light',
    description:
      'A squishy silicone dino night light with a soft glow — cute enough for kids, rare enough for collectors.',
    colors: [
      { name: 'Lime', hex: '#8bc34a' },
      { name: 'White', hex: '#ffffff' },
    ],
    details: [
      'Soft silicone touch night light',
      'USB rechargeable',
      'Child-friendly glow mode',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'cute-cat-ear-headphones',
    name: 'Cute Cat Ear Headphones (Bluetooth)',
    price: 1999,
    mrp: 2499,
    bg: 'c-rose',
    image: '/images/download_8.webp',
    tags: ['All', 'Best Sellers', 'Gifts'],
    category: 'Gadgets',
    categoryLabel: 'Gadgets · Cat Ear Headphones',
    description:
      'Wireless cat-ear headphones with plush cushions and playful style for music, calls and gifting.',
    colors: [
      { name: 'Pink', hex: '#f7a8c4' },
      { name: 'White', hex: '#ffffff' },
    ],
    details: [
      'Bluetooth wireless headphones',
      'Soft over-ear cushions',
      'Built-in mic for calls',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'kawaii-water-bottle',
    name: 'Kawaii Water Bottle (1 Litre)',
    price: 749,
    mrp: 999,
    bg: 'c-blue',
    image: '/images/download_7.webp',
    tags: ['All', 'Under ₹999', 'New Arrivals'],
    category: 'Drinkware',
    categoryLabel: 'Drinkware · Water Bottle',
    description:
      'A bright kawaii water bottle with daisy print — easy to carry and hard to ignore.',
    colors: [
      { name: 'Pink', hex: '#ff5fa2' },
      { name: 'White', hex: '#ffffff' },
    ],
    details: [
      '1 litre everyday bottle',
      'Loop handle lid',
      'BPA-free material',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'infinity-cube-fidget',
    name: 'Infinity Cube Fidget (Anti-Stress)',
    price: 399,
    mrp: 599,
    bg: 'c-coral',
    image: '/images/download_6.webp',
    tags: ['All', 'Under ₹999', 'Best Sellers'],
    category: 'Gadgets',
    categoryLabel: 'Gadgets · Fidget Cube',
    description:
      'Flip, fold and reset — a pocket-sized infinity cube for desk breaks and restless hands.',
    colors: [
      { name: 'Blue', hex: '#4f8cff' },
      { name: 'White', hex: '#f2f2f2' },
    ],
    details: [
      'Smooth folding fidget cube',
      'Durable plastic build',
      'Quiet desk-friendly motion',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'star-led-night-lamp',
    name: 'Star LED Night Lamp (Warm White)',
    price: 899,
    mrp: 1299,
    bg: 'c-yellow',
    image: '/images/download_2.webp',
    tags: ['All', 'Under ₹999', 'Home & Living'],
    category: 'Home Décor',
    categoryLabel: 'Home Décor · Star Lamp',
    description:
      'A warm copper star lamp filled with tiny lights — soft ambience for shelves and nightstands.',
    colors: [
      { name: 'Copper', hex: '#c47a3a' },
      { name: 'Warm White', hex: '#ffe9b0' },
    ],
    details: [
      'LED fairy-light star lamp',
      'Warm white glow',
      'Tabletop decorative piece',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'astronaut-galaxy-lamp',
    name: 'Astronaut Galaxy Lamp (Star Projector)',
    price: 1699,
    mrp: 2299,
    bg: 'c-navy',
    image: '/images/download_12.webp',
    tags: ['All', 'Best Sellers', 'Gifts', 'Home & Living'],
    category: 'Home Décor',
    categoryLabel: 'Home Décor · Galaxy Lamp',
    description:
      'A collectible astronaut lamp with starry vibes — desk décor that feels fresh from another universe.',
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Gold', hex: '#d4af37' },
    ],
    details: [
      'Astronaut figurine lamp',
      'Warm ambient glow',
      'Great gift for curious minds',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'popcorn-bowl',
    name: 'Popcorn Bowl (Microwave Safe)',
    price: 599,
    mrp: 799,
    bg: 'c-cream',
    image: '/images/download_11.webp',
    tags: ['All', 'Under ₹999', 'Home & Living'],
    category: 'Lifestyle',
    categoryLabel: 'Lifestyle · Bowl',
    description:
      'A bold red serving bowl ready for movie nights, snacks and tabletop colour.',
    colors: [
      { name: 'Red', hex: '#e11d24' },
      { name: 'White', hex: '#ffffff' },
    ],
    details: [
      'Microwave-safe serving bowl',
      'Everyday snack size',
      'Easy to clean',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'retro-mini-speaker-bluetooth',
    name: 'Retro Mini Speaker (Bluetooth)',
    price: 2299,
    mrp: 2899,
    bg: 'c-green',
    image: '/images/download_9.webp',
    tags: ['All', 'New Arrivals', 'Gifts'],
    category: 'Gadgets',
    categoryLabel: 'Gadgets · Retro Mini Speaker',
    description:
      'A compact Bluetooth speaker with rich sound and a retro finish that looks as good as it plays.',
    colors: [
      { name: 'Pink', hex: '#f4a7c1' },
      { name: 'White', hex: '#ffffff' },
    ],
    details: [
      'Bluetooth wireless connectivity',
      'Retro mini speaker design',
      'Portable desk and travel size',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
  {
    slug: 'moon-ring-lamp',
    name: 'Moon Ring Lamp (USB Powered)',
    price: 1499,
    mrp: 1999,
    bg: 'c-sand',
    image: '/images/download_10.webp',
    tags: ['All', 'Home & Living', 'Gifts'],
    category: 'Home Décor',
    categoryLabel: 'Home Décor · Moon Lamp',
    description:
      'A glowing moon-ring lamp on a matte black base — warm ambient light for late nights and soft corners.',
    colors: [
      { name: 'Amber', hex: '#e0a45a' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    details: [
      'USB powered moon ring lamp',
      'Warm amber glow',
      'Stable black base',
    ],
    shipping: [
      'Dispatched in 1–2 business days',
      'Free shipping on orders above ₹999',
      'Easy 7-day returns on unused items',
    ],
  },
]

export const occasions = [
  {
    tag: '🎂 Celebrate',
    title: 'Birthday',
    text: 'Surprises that make the day',
    bg: '#ffd6e0',
    image: '/images/download_1.webp',
  },
  {
    tag: '💞 Together',
    title: 'Anniversary',
    text: 'Rare pieces for lasting love',
    bg: '#ffb3d1',
    image: '/images/download_3.webp',
  },
  {
    tag: '🪔 Festive',
    title: 'Diwali & Festivals',
    text: 'Lights, sweets and gifting, Indian style',
    bg: '#ffd3a1',
    image: '/images/download_2.webp',
  },
  {
    tag: '🧧 China & Asia',
    title: 'Lunar New Year',
    text: 'Good fortune wrapped in every box',
    bg: '#ffe89a',
    image: '/images/4.png',
  },
  {
    tag: '🌕 Moon Gifts',
    title: 'Mid-Autumn Festival',
    text: 'Moon-inspired lamps and sweet treats',
    bg: '#c9d6ec',
    image: '/images/5.png',
  },
  {
    tag: '🛍 Global',
    title: "Singles' Day 11.11",
    text: 'Treat yourself, from anywhere in the world',
    bg: '#e0d2f5',
    image: '/images/2.png',
  },
]

export const testimonials = [
  {
    stars: '★★★★★',
    quote:
      'I ordered the Astronaut Galaxy Lamp as a surprise for my brother. The packaging was adorable and the lamp is even better in person. Easily my favourite find this year.',
    initials: 'AS',
    name: 'Aanya Sharma',
    city: 'Chandigarh',
    bought: 'Astronaut Lamp',
  },
  {
    stars: '★★★★★',
    quote:
      'Found the Infinity Cube Fidget here after searching everywhere. Fast delivery, great quality, and the Mystery Box is genuinely fun. My desk looks like a little universe now.',
    initials: 'RK',
    name: 'Rohan Kapoor',
    city: 'Ludhiana',
    bought: 'Mystery Box',
  },
  {
    stars: '★★★★☆',
    quote:
      'Gifting from this store always gets a reaction. Everything feels thoughtfully picked, not mass-produced. The Heart Crystal Lamp now lives in my reading corner.',
    initials: 'MP',
    name: 'Meera Pandey',
    city: 'Patiala',
    bought: 'Crystal Heart Lamp',
  },
]

export const trustItems = [
  { icon: '🚚', title: 'Free Shipping', sub: 'On Orders Above ₹999' },
  { icon: '↺', title: 'Easy Returns', sub: 'Hassle-Free Process' },
  { icon: '🛡', title: 'Secure Payment', sub: '100% Safe & Encrypted' },
  { icon: '🎧', title: 'Support', sub: "We're Here to Help" },
]

export const footerLinks = [
  {
    title: 'Explore',
    links: ['The Rare Universe', 'Shop All', 'Fresh Discoveries', 'The Gift Galaxy'],
  },
  {
    title: 'Support',
    links: ['Shipping & Delivery', 'Returns & Refunds', 'Track an Order', 'Contact & FAQs'],
  },
  {
    title: 'The Important Bits',
    links: ['Our Story', 'Privacy Policy', 'Terms & Conditions', 'My Account'],
  },
]

export function formatInr(n: number) {
  return '₹' + n.toLocaleString('en-IN')
}

export function discountPct(price: number, mrp: number) {
  return Math.round((1 - price / mrp) * 100)
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(slug: string, count = 4) {
  const current = getProductBySlug(slug)
  const others = products.filter((product) => product.slug !== slug)
  const sameCategory = others.filter((product) => product.category === current?.category)
  const rest = others.filter((product) => product.category !== current?.category)
  return [...sameCategory, ...rest].slice(0, count)
}
