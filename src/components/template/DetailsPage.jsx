import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";

import styles from "./DetailsPage.module.css";
import { icons } from "@/constants/icons";
import { sp } from "@/utils/separatedNumber";
import ShareButton from "../module/ShareButton";

function DetailsPage({
  data: {
    amenities,
    rules,
    realState,
    phone,
    category,
    description,
    price,
    constructionDate,
    title,
    location,
  },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>{realState}</p>
          <span>
            <AiOutlinePhone />
            {phone}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[category]}
            {category}
          </p>
          <p>{sp(price)}$</p>
          <p>
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString("en-US")}
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <h3 className={styles.title}>Description</h3>
        <p>{description}</p>
        <h3 className={styles.title}>Amenities</h3>
        {amenities.length ? (
          <ul>
            {amenities.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p>No Amenities Registered!</p>
        )}
        <h3 className={styles.title}>Rules</h3>
        {rules.length ? (
          <ul>
            {rules.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p>No Rules Registered!</p>
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
