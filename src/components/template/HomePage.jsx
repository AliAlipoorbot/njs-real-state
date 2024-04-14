import CategoryCard from "../module/CategoryCard";
import styles from "./HomePage.module.css";

function HomePage() {

  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>Buying and Renting property</h1>
        </div>
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
