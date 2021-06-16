import React from "react";
import "./Introduction.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faUserMd,
  faBookReader,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={`${styles.introduction} container`}>
      <h1 className="text-dark">
        Exceptional Medical Help, <br /> From Home
      </h1>

      <p className={`${styles.paragraph} text-dark`}>
        Select and get treatments from bunch of experienced doctors from our
        hub.
      </p>

      <section className={styles.todo}>
        <div className={styles.todoStep}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faCalendarPlus} />
          </div>
          <p>Find the best doctor</p>
        </div>
        <div className={styles.todoStep}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faUserMd} />
          </div>
          <p>Make an appointment</p>
        </div>
        <div className={styles.todoStep}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faBookReader} />
          </div>
          <p>Patient & visitor guide</p>
        </div>
        <div className={styles.todoStep}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
          <p>Ask your questions</p>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
