import styles from './Hero.module.css';
import { categories } from '../data/products';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.grid} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Premium Katalog
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine1}>BYKADOV</span>
          <span className={styles.titleLine2}>
            Lüks. Estetika.{' '}
            <em>Sizin üçün.</em>
          </span>
        </h1>

        <p className={styles.subtitle}>
          Tattoo sənətindən parfümlərə, aksessuarlardan gym avadanlığına —<br />
          hər şey bir yerdə. <span className={styles.goldText}>Premium keyfiyyət.</span>
        </p>

        <div className={styles.ctas}>
          <button className={styles.ctaPrimary} onClick={() => scrollTo('tattoo')}>
            Kataloqa Bax
            <span className={styles.ctaArrow}>→</span>
          </button>
          <button className={styles.ctaSecondary} onClick={() => scrollTo('perfumes')}>
            Parfümler
          </button>
        </div>

        <div className={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={styles.catChip}
              onClick={() => scrollTo(cat.id)}
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Aşağı diyirla</span>
      </div>
    </section>
  );
}
