import React from "react";
import styles from "./title-card-content.module.scss";
import TitleCardCaption from "../title-card-caption/title-card-caption";
const TitleCardContent = () => {
  return (
    <div className={styles.cardContent}>
      <TitleCardCaption />
      <div className={styles.cardContent__image} />
    </div>
  );
};

export default TitleCardContent;
