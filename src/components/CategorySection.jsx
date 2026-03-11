import { useEffect, useRef, useState } from 'react';
import styles from './CategorySection.module.css';
import ProductCard from './ProductCard';

export default function CategorySection({ category }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [coverLoaded, setCoverLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={category.id}
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
    >
      {/* Category cover banner */}
      <div className={styles.cover}>
        <div className={styles.coverBg} style={{ background: category.gradient }} />
        {category.coverImage && (
          <img
            src={category.coverImage}
            alt={category.title}
            className={`${styles.coverImg} ${coverLoaded ? styles.coverImgVisible : ''}`}
            onLoad={() => setCoverLoaded(true)}
            loading="lazy"
          />
        )}
        <div className={styles.coverOverlay} />
        <div className={styles.coverContent}>
          <span className={styles.coverIcon}>{category.icon}</span>
          <div>
            <p className={styles.coverSubtitle}>{category.subtitle}</p>
            <h2 className={styles.coverTitle}>{category.title}</h2>
            <p className={styles.coverDesc}>{category.description}</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.dividerLine}>
              <div className={styles.dividerDot} />
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {category.products.map((product, i) => (
            <div
              key={product.id}
              className={styles.cardWrap}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <ProductCard product={product} accentColor={category.accentColor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
