import React from "react";

import { FaCloudDownloadAlt } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>Hello, It's Me </p>
        <p className={styles.description}>
          <h1>Fazle Hussain</h1><br />
          And I'm a Front-End Developer
        </p>
        <a href="mailto:fazlehussain28@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="Fazle Resume.pdf" download="Resume.pdf" className={styles.cvBtn}>
        <FaCloudDownloadAlt />    CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/asdf.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};