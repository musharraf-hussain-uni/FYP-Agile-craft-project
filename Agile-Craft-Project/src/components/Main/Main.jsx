import React, { Fragment } from "react";
import heroImg from "../../images/web-dev.svg";

import heroBg from "../../images/hero-bg.svg";
import styles from "./main.module.css";

const Main = () => {
  return (
    <Fragment className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Bespoke software solutions for your unique business needs...
          </h1>
          <p className={styles.paragraph}>
            We are a team of highly motivated and skilled developers dedicated
            to delivering only the best software.
          </p>
          <button className={styles.button}>Learn More </button>
        </div>
        <div className={styles.imgContainer}>
          <img src={heroImg} alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.heroContainer}>
        <img src={heroBg} alt="" className={styles.bgImg} />
      </div>
    </Fragment>
  );
};

export default Main;
