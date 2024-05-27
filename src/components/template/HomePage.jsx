import CategoryCard from "../module/CategoryCard";
import styles from "./HomePage.module.css";
import Hero from "../module/Hero";

function HomePage() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.white_gradient} />
        <Hero />
      </div>
      <div className={styles.categories}>
        <CategoryCard title="Villa" name="villa" />
        <CategoryCard title="Apartment" name="apartment" />
        <CategoryCard title="Office" name="office" />
        <CategoryCard title="Store" name="store" />
      </div>
    </div>
  );
}

export default HomePage;
