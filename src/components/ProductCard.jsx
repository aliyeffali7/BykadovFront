import { useState } from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className={styles.card}>
      <div className={styles.visual} style={{ background: product.bg }}>

        {/* Skeleton shown while image loads */}
        {!imgLoaded && !imgError && (
          <div className={styles.skeleton} />
        )}

        {/* Product image */}
        {!imgError && (
          <img
            src={product.image}
            alt={product.name}
            className={`${styles.img} ${imgLoaded ? styles.imgVisible : ''}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}

        {/* Dark overlay always on top of image */}
        <div className={styles.overlay} />

        {/* Fallback emoji when no image */}
        {imgError && (
          <div className={styles.iconFallback}>{product.icon}</div>
        )}

        {product.badge && (
          <span className={styles.badge}>{product.badge}</span>
        )}

        <button
          className={`${styles.heart} ${liked ? styles.heartActive : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label="Bəyən"
        >
          {liked ? '♥' : '♡'}
        </button>

        {product.type && (
          <span className={styles.type}>{product.type}</span>
        )}
        {product.category && (
          <span className={styles.catTag}>{product.category}</span>
        )}

        {/* Small emoji icon pinned bottom-center over the image */}
        {!imgError && imgLoaded && (
          <span className={styles.iconPill}>{product.icon}</span>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>
        {product.notes && (
          <p className={styles.notes}>{product.notes}</p>
        )}
        <div className={styles.footer}>
          <span className={styles.price}>
            <span className={styles.currency}>₼</span>
            {product.price}
          </span>
          <button
            className={`${styles.addBtn} ${added ? styles.addedBtn : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓ Əlavə edildi' : '+ Səbətə at'}
          </button>
        </div>
      </div>
    </div>
  );
}
