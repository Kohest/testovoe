import React from "react";
import styles from "./down-button.module.scss";
const DownButton = () => {
  const handleClick = () => {
    const partnersBlock = document.getElementById("partnersList");
    if (partnersBlock) {
      partnersBlock.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <button className={styles.downButton} onClick={handleClick}>
      <p>ВНИЗ</p>
      <img src="src/assets/images/arrow_down.svg" alt="arr_down" />
      <p>ВНИЗ</p>
    </button>
  );
};

export default DownButton;
