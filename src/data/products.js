/**
 * Product catalogue for Ointment & Perfume Enterprises.
 *
 * To add a product: copy one of the objects below and fill in the fields.
 * To use real images: replace the `emoji` field with an `image` field
 * pointing to a path in /src/assets/ or a remote URL.
 *
 * Fields:
 *   id        — unique number
 *   name      — product name
 *   size      — e.g. "50ml", "100ml"
 *   price     — price in Naira (number, no formatting)
 *   category  — shown as a badge on the card
 *   emoji     — placeholder visual (swap for `image` when ready)
 *   description — short product description
 */

export const PRODUCTS = [
  {
    id: 1,
    name: "Velvet Noir",
    size: "50ml",
    price: 15000,
    category: "Oriental",
    image: "/istockphoto-2149954181-612x612.webp",
    description: "A rich, sensual blend of dark musk and velvet rose petals.",
  },
  {
    id: 2,
    name: "Rose Elixir",
    size: "100ml",
    price: 22000,
    category: "Floral",
    image: "/istockphoto-2172836783-612x612.webp",
    description: "Delicate Bulgarian roses with a warm sandalwood base note.",
  },
  {
    id: 3,
    name: "Midnight Oud",
    size: "50ml",
    price: 18500,
    category: "Woody",
    image: "/photo-1523293182086-7651a899d37f.avif",
    description: "Rare Arabian oud intertwined with smoky amber and cedar.",
  },
  {
    id: 4,
    name: "Pink Bloom",
    size: "30ml",
    price: 12000,
    category: "Fresh",
    image: "/photo-1458538977777-0549b2370168.avif",
    description: "Light peony and fresh bergamot — everyday elegance bottled.",
  },
  {
    id: 5,
    name: "Amber Muse",
    size: "100ml",
    price: 25000,
    category: "Oriental",
    image: "/photo-1541643600914-78b084683601.avif",
    description: "Warm amber resin with Madagascar vanilla and white musk.",
  },
  {
    id: 6,
    name: "White Petals",
    size: "50ml",
    price: 16000,
    category: "Floral",
    image: "/premium_photo-1670445045282-36648e89af6b.avif",
    description: "Pure white jasmine and lily resting on a clean skin musk.",
  },
];
