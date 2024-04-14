import styles from "./DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { BiHomeCircle } from "react-icons/bi";
import { VscDiffAdded } from "react-icons/vsc";
import { MdPostAdd } from "react-icons/md";
import LogoutButton from "../module/LogoutButton";

async function DashboardSidebar({ children, role, email }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" && "Admin"}
        <p>{email?.split("@")[0]}</p>
        <span></span>
        <Link href="/dashboard">
          <CgProfile />
          My Profile
        </Link>
        <Link href="/dashboard/my-property">
          <BiHomeCircle />
          My Property
        </Link>
        <Link href="/dashboard/add-property">
          <VscDiffAdded />
          Add Property
        </Link>
        {role === "ADMIN" && (
          <Link href="/admin">
            <MdPostAdd />
            Confirming
          </Link>
        )}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
