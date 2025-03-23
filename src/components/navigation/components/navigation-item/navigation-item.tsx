import React, { FC } from "react";
import styles from "./navigation-item.module.scss";
interface Props {
  image: {
    src: string;
    alt: string;
  };
}
const NavigationItem: FC<Props> = ({ image }) => {
  return (
    <div className={styles.navigationItem}>
      <div className={styles.navigationItem__content}>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
};

export default NavigationItem;
