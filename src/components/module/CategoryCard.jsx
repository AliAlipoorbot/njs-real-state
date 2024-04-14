import Link from "next/link";
import styles from "./CategoryCard.module.css";
import Image from "next/image";

function CategoryCard({ title, name }) {
  return (
    <div className={styles.card}>
      <Link href={`/find-property?category=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={name}
          width={240}
          height={144}
          priority={true}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
