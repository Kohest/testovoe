import React from "react";
import styles from "./footer.module.scss";
import contactSvg from "../../assets/images/contact.svg";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__left}>
          <p className={styles.footer__title}>2016 © shopguide </p>
          <div className={styles.footer__links}>
            <a href="#">Политка конфиденциальности</a>
            <a href="#">Правила пользования</a>
          </div>
        </div>
        <button className={styles.footer__button}>
          <img src={contactSvg} />
          Связаться с нами
        </button>
      </div>
    </div>
  );
};

export default Footer;
