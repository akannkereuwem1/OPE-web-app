import { BRAND } from "../data/brand";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToProducts = () =>
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.content}>
        <p className={`eyebrow ${styles.eyebrow}`}>{BRAND.tagline}</p>

        <h1 className={styles.title}>
          {BRAND.heroHeadline[0]}
          <br />
          <em>{BRAND.heroHeadline[1]}</em>
        </h1>

        <p className={styles.subtitle}>{BRAND.heroSubtitle}</p>

        <button className={styles.cta} onClick={scrollToProducts}>
          Explore Collection
        </button>
      </div>
    </section>
  );
}
