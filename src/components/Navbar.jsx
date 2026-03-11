import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { categories } from '../data/products';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => scrollTo('hero')}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoText}>BYKADOV</span>
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button onClick={() => scrollTo(cat.id)} className={styles.link}>
                <span className={styles.linkIcon}>{cat.icon}</span>
                {cat.title}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.barX1 : styles.bar} />
          <span className={menuOpen ? styles.barX2 : styles.bar} />
          <span className={menuOpen ? styles.barX3 : styles.bar} />
        </button>
      </div>
    </nav>
  );
}
