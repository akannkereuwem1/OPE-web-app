# Assets

Drop product images and brand assets in this folder.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`

Then import them in `src/data/products.js` like so:

```js
import velvetNoir from "../assets/velvet-noir.jpg";
```

And add an `image` field to the product object. `ProductCard` will
automatically render it instead of the emoji placeholder.
