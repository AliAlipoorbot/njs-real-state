import AdminCard from "../module/AdminCard";
import styles from "./AdminPage.module.css";

function AdminPage({ properties }) {
  return (
    <div>
      {properties.length ? null : <p className={styles.text}>No Property</p>}
      {properties.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))}/>
      ))}
    </div>
  );
}

export default AdminPage;
