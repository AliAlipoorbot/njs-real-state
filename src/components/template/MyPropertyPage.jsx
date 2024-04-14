import DashboardCard from "../module/DashboardCard";
import styles from "./MyPropertyPage.module.css";

function MyPropertyPage({ properties }) {
  console.log(properties);
  return (
    <div>
      {properties.length ? null : <p className={styles.text}>No property!</p>}
      {properties.map((p) => (
        <DashboardCard key={p._id} data={JSON.parse(JSON.stringify(p))} />
      ))}
    </div>
  );
}

export default MyPropertyPage;
