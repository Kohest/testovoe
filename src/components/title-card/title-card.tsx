import React from "react";
import Navigation from "../navigation/navigation";
import styles from "./title-card.module.scss";
import TitleCardContent from "./components/title-card-content/title-card-content";
import DownButton from "../down-button/down-button";
const TitleCard = () => {
  return (
    <div className={styles.cardBody}>
      <Navigation />
      <TitleCardContent />
      <DownButton />
    </div>
  );
};

export default TitleCard;
