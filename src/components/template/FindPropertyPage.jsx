import styles from "./FindPropertyPage.module.css";
import Card from "../module/Card.jsx";
import Sidebar from "../module/Sidebar";

function FindPropertyPage({ data }) {
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {data.length ? null : <p className={styles.text}>No Properties!</p>}
        {data.map((property) => (
          <Card key={property._id} data={property} />
        ))}
      </div>
    </div>
  );
}

export default FindPropertyPage;
