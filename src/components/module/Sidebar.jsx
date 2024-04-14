import Link from "next/link";
import { HiFilter } from "react-icons/hi";

import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        Categories
      </p>
      <div className={styles.link}>
        <Link href="/find-property">All</Link>
        <Link
          href={{ pathname: "/find-property", query: { category: "villa" } }}
        >
          <RiHome3Line />
          Villa
        </Link>
        <Link
          href={{ pathname: "/find-property", query: { category: "office" } }}
        >
          <GiOfficeChair />
          Office
        </Link>
        <Link
          href={{ pathname: "/find-property", query: { category: "store" } }}
        >
          <BiStore />
          Store
        </Link>
        <Link
          href={{
            pathname: "/find-property",
            query: { category: "apartment" },
          }}
        >
          <MdApartment />
          Apartment
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
