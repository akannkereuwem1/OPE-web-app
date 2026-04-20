# Ointment & Perfume Enterprises — Storefront

A lightweight React storefront for Ointment & Perfume Enterprises. Built with Vite + React, using CSS Modules for scoped styling.

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## Project Structure

```
ointment-perfume/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/            ← Drop product images here
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.module.css
│   │   ├── Hero.jsx
│   │   ├── Hero.module.css
│   │   ├── ProductGrid.jsx
│   │   ├── ProductGrid.module.css
│   │   ├── ProductCard.jsx
│   │   ├── ProductCard.module.css
│   │   ├── CartSidebar.jsx
│   │   ├── CartSidebar.module.css
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── context/
│   │   └── CartContext.jsx    ← Global cart state (React Context)
│   ├── data/
│   │   ├── products.js        ← Add / edit products here
│   │   └── brand.js           ← Brand name, WhatsApp number, hero copy
│   ├── utils/
│   │   └── format.js          ← Currency formatter (₦)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              ← Global styles & CSS variables
├── index.html
├── vite.config.js
└── package.json
```

---

## Common Customisations

### Add or edit products
Open `src/data/products.js` and edit the `PRODUCTS` array.

To use a real product image instead of an emoji:
1. Drop your image into `src/assets/` (e.g. `velvet-noir.jpg`)
2. Import it at the top of `products.js`:
   ```js
   import velvetNoir from "../assets/velvet-noir.jpg";
   ```
3. Add an `image` field to the product object:
   ```js
   { id: 1, name: "Velvet Noir", image: velvetNoir, ... }
   ```
   `ProductCard` will automatically render the image instead of the emoji.

### Change brand details
Open `src/data/brand.js` — update the name, WhatsApp number, tagline, and hero copy from one place.

### Update brand colours
Open `src/index.css` and edit the `:root` CSS variables:
```css
:root {
  --pink:  #fc93ad;
  --light: #fefdfb;
  --black: #1f1f1f;
}
```
Every component inherits from these — no hunting through individual files.

### WhatsApp order message
The order message is assembled in `src/components/CartSidebar.jsx` inside `orderViaWhatsApp()`. Edit the template string there to change the wording.

---

## Stack
- [Vite](https://vitejs.dev/) — build tool & dev server
- [React 18](https://react.dev/) — UI
- [CSS Modules](https://github.com/css-modules/css-modules) — scoped component styles
- No UI library dependencies — easy to extend or swap styling approach
