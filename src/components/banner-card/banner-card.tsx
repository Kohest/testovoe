import React from "react";
import styles from "./banner-card.module.scss";
const BannerCard = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <div className={styles.banner__text}>
          <div className={styles.banner__title}>НАШИ АКЦИИ</div>
          <div className={styles.banner__subtitle}>
            Каждый день в Москве проходят распродажи. В акциях и скидках
            дня могут принимать участие любые группы товаров. Особенно популярны
            распродажи одежды и обуви, распродажи мебели, распродажи сумок.
          </div>
        </div>
        <div className={styles.banner__images}>
          <div className={styles.banner__imageContainer}>
            <div className={styles.banner__image1}></div>
            <div className={styles.banner__image2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
