"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "./Header.module.css";
import { useSession } from "next-auth/react";

function Header() {
  const { data } = useSession();

  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/find-property">Find a Property</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className={styles.login_dashboard}>
          <Link href="/dashboard">
            <span>Your Profile</span>
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <span>Login</span>
            <FiLogIn />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
