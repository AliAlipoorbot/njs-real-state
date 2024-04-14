import { icons } from "@/constants/icons";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./Card.module.css";
import Link from "next/link";
import { sp } from "@/utils/separatedNumber";

function Card({ data: { title, price, location, category, _id } }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)}$</span>
      <Link href={`/find-property/${_id}`}>
        Details
        <BiRightArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
