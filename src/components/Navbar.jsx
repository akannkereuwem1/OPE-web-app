import { useCart } from "../context/CartContext";
import { BRAND } from "../data/brand";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { itemCount, setCartOpen } = useCart();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoName}>OINTMENT &amp; PERFUME</span>
        <span className={styles.logoSub}>Enterprises</span>
      </div>

      <button className={styles.cartBtn} onClick={() => setCartOpen(true)}>
        <span className={styles.cartIcon}>🛍</span>
        {itemCount > 0 ? (
          <span className={styles.cartCount}>{itemCount}</span>
        ) : (
          <span>Cart</span>
        )}
      </button>
    </nav>
  );
}
