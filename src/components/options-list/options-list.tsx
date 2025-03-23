import React from "react";
import styles from "./options-list.module.scss";
import OptionsMenu from "../options-menu/options-menu";
const OptionsList = () => {
  return (
    <div className={styles.optionsContainer}>
      <OptionsMenu />
    </div>
  );
};

export default OptionsList;
