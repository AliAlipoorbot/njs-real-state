"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";

function Header() {
  const { data } = useSession();

  return (
    <section className={styles.h_wrapper}>
      <header className={`${styles.header} flexCenter paddings innerWidth`}>
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={100} height={40} />
        </Link>
        <div className="flexCenter">
          <Link href="/find-property">Find a Property</Link>
          {data ? (
            <div className={styles.button}>
              <Link href="/dashboard">Your Profile</Link>
            </div>
          ) : (
            <div className={styles.button}>
              <Link href="/signin">Login</Link>
            </div>
          )}
        </div>
      </header>
    </section>
  );
}

export default Header;
