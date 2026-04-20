import { useState } from "react";
import { useCart } from "../context/CartContext";
import { fmt } from "../utils/format";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <div className={styles.card}>
      {/* Visual */}
      <div className={styles.visual}>
        {product.image ? (
          <img src={product.image} alt={product.name} className={styles.image} />
        ) : (
          <span className={styles.emoji}>{product.emoji}</span>
        )}
        <span className={styles.badge}>{product.category}</span>
      </div>

      {/* Info */}
      <div className={styles.body}>
        <p className={styles.size}>{product.size}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{fmt(product.price)}</span>
          <button
            className={`${styles.addBtn} ${justAdded ? styles.added : ""}`}
            onClick={handleAdd}
          >
            {justAdded ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
