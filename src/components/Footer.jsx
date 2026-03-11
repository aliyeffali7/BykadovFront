import styles from './Footer.module.css';
import { categories } from '../data/products';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>✦</span>
              <span className={styles.logoText}>BYKADOV</span>
            </div>
            <p className={styles.tagline}>
              Lüks. Estetika. Sizin üçün.
            </p>
            <p className={styles.desc}>
              Premium aksessuarlar, parfümlər, tattoo sənəti<br />
              və gym avadanlıqları — hamısı bir yerdə.
            </p>
          </div>

          <div className={styles.nav}>
            <h4 className={styles.navTitle}>Kateqoriyalar</h4>
            <ul className={styles.navList}>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button onClick={() => scrollTo(cat.id)} className={styles.navLink}>
                    <span>{cat.icon}</span>
                    <span>{cat.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.navTitle}>Əlaqə</h4>
            <div className={styles.contactList}>
              <a href="https://instagram.com" className={styles.contactItem} target="_blank" rel="noreferrer">
                <span className={styles.contactIcon}>📸</span>
                <span>@bykadov</span>
              </a>
              <a href="https://t.me/bykadov" className={styles.contactItem} target="_blank" rel="noreferrer">
                <span className={styles.contactIcon}>✈️</span>
                <span>Telegram</span>
              </a>
              <a href="https://wa.me/994" className={styles.contactItem} target="_blank" rel="noreferrer">
                <span className={styles.contactIcon}>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2024 BYKADOV. Bütün hüquqlar qorunur.
          </p>
          <div className={styles.bottomLinks}>
            <span className={styles.goldDot}>✦</span>
            <span>Premium Store</span>
            <span className={styles.goldDot}>✦</span>
            <span>Azerbaijan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
