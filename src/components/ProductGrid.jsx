import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid() {
  return (
    <section className={styles.section} id="products">
      <div className={styles.header}>
        <p className="eyebrow">Our Collection</p>
        <h2 className={styles.title}>Signature Fragrances</h2>
      </div>

      <div className={styles.grid}>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
