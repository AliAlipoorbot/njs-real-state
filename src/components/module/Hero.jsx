"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className={styles.h_wrapper}>
      <div className={`${styles.container} flexCenter innerWidth paddings`}>
        <div className={`${styles.description} flexColStart`}>
          <div className={styles.title}>
            <div className={styles.circle} />
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className={`${styles.span} flexColStart`}>
            <span className="secondaryText">
              Find a variety of properties that suit you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className={`${styles.search_bar} flexCenter`}>
            <HiLocationMarker size={25} color="var(--blue)" />
            <input type="text" />
            <button>Search</button>
          </div>
          <div className={`${styles.stats} flexCenter`}>
            <div className={`${styles.stat} flexColCenter`}>
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className={`${styles.stat} flexColCenter`}>
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className={`${styles.stat} flexColCenter`}>
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/images/r1.png" width={500} height={500} alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
