import React from "react";
import styles from "./partners-list.module.scss";
import PartnersSlider from "./components/partners-slider/partners-slider";
const PartnersList = () => {
  return (
    <div className={styles.partners} id="partnersList">
      <div className={styles.partners__title}>НАШИ ПАРТНЕРЫ</div>
      <PartnersSlider />
      <div className={styles.partners__footer}>
        <div className={styles.partners__text}>
          <p>Хочешь стать партнером?</p>
          <p>Напишите нам и про ваши акции узнают все</p>
        </div>
        <button className={styles.partners__button}>СТАТЬ ПАРТНЕРОМ</button>
      </div>
    </div>
  );
};

export default PartnersList;
