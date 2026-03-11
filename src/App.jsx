import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import { categories } from './data/products';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <main>
        {categories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
