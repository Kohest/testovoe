import React, { FC } from "react";
import styles from "./dignities-list-card.module.scss";
interface Props {
  image: string;
  title: string;
  subtitle: string;
}
const DignitiesListCard: FC<Props> = ({ image, subtitle, title }) => {
  return (
    <div className={styles.dignitiesListCard}>
      <img
        src={image}
        alt={title}
        className={styles.dignitiesListCard__image}
      />
      <span className={styles.dignitiesListCard__title}>{title}</span>
      <span className={styles.dignitiesListCard__subtitle}>{subtitle}</span>
    </div>
  );
};

export default DignitiesListCard;
