import React from "react";
import styles from "./title-card-caption.module.scss";
const TitleCardCaption = () => {
  return (
    <div className={styles.titleCardCaption}>
      <div className={styles.titleCardCaption__badge}>
        <span>ТОЛЬКО ЛУЧШИЕ АКЦИИ</span>
      </div>
      <div className={styles.titleCardCaption__content}>
        <img
          className={styles.titleCardCaption__title}
          src="/src/assets/images/shopguide.svg"
        />
        <div className={styles.titleCardCaption__subtitle}>загрузить</div>
        <div className={styles.titleCardCaption__buttons}>
          <button className={styles.titleCardCaption__button}>
            <img
              src="/src/assets/images/download_ios.svg"
              alt="download on iphone"
            />
          </button>
          <button className={styles.titleCardCaption__button}>
            <img
              src="/src/assets/images/download_android.svg"
              alt="download on android"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleCardCaption;
