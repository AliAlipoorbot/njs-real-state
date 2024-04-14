import styles from "./DashboardPage.module.css";

function DashboardPage({ user }) {
  return (
    <div className={styles.container}>
      <h3>Welcome!</h3>
      <p>{user?.email}</p>
      <div className={styles.createdAt}>
        <p>Register Date:</p>
        <span className={styles.date}>
          {new Date(user.createdAt).toLocaleDateString("en-US")}
        </span>
      </div>
    </div>
  );
}

export default DashboardPage;
