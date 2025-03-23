import React, { FC } from "react";
import styles from "./navigation-button.module.scss";
interface Props {
  children?: React.ReactNode;
}
const NavigationButton: FC<Props> = ({ children }) => {
  return <button className={styles.navigationButton}>{children}</button>;
};

export default NavigationButton;
