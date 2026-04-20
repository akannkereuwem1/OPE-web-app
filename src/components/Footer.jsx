import { BRAND } from "../data/brand";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.brand}>{BRAND.name}</p>
      <p className={styles.tagline}>For inquiries, reach us on WhatsApp</p>
      <a
        href={`https://wa.me/${BRAND.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className={styles.waLink}
      >
        +234 802 301 1172
      </a>
      <p className={styles.copy}>
        © {year} {BRAND.name}. All rights reserved.
      </p>
    </footer>
  );
}
