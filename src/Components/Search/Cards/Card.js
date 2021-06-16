import React from "react";
import img from "../../../images/doctor.png";
import styles from "./Card.module.css";

const Card = ({ doctor }) => {
  const { name, specialty, title } = doctor;

  const toUpperCase = (specialty) => {
    const specialtySplit = specialty.split("")[0];
    const upCaseSpecialty = specialtySplit.toUpperCase();
    const withoutFirstLetter = specialty
      .split("")
      .filter((firstLetter) => firstLetter !== specialtySplit);
    return [upCaseSpecialty, ...withoutFirstLetter].join("");
  };

  const upCaseSpecialty = toUpperCase(specialty);

  return (
    <div className={`${styles.card} shadow text-dark bg-light`}>
      <img src={img} className={`${styles.img} mb-2`} alt="" />

      <h4>{name}</h4>
      <small className="d-block">{title}</small>

      <h5 className="text-danger py-2">{upCaseSpecialty}</h5>

      <div>
        <h6>500+ Patients</h6>
        <p>Square Hospital Limited, Baridhara</p>
      </div>
    </div>
  );
};

export default Card;
