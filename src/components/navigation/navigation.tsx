import React from "react";
import styles from "./navigation.module.scss";
import NavigationItem from "./components/navigation-item/navigation-item";
import NavigationButton from "./components/navigation-button/navigation-button";
import iconFB from "../../assets/images/icon_fb.svg";
import iconVK from "../../assets/images/icon_vk.svg";
import iconTW from "../../assets/images/icon_tw.svg";
import iconIG from "../../assets/images/icon_ig.svg";
import iconOK from "../../assets/images/icon_ok.svg";
const Navigation = () => {
  const navigationImages = [
    {
      src: iconVK,
      alt: "icon_vk",
    },
    {
      src: iconTW,
      alt: "icon_tw",
    },
    {
      src: iconIG,
      alt: "icon_ig",
    },
    {
      src: iconFB,
      alt: "icon_fb",
    },
    {
      src: iconOK,
      alt: "icon_tw",
    },
  ];
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__container}>
        <div className={styles.navigation__badges}>
          {navigationImages.map((item) => (
            <NavigationItem image={item} key={item.src} />
          ))}
        </div>
        <div>
          <NavigationButton>СТАТЬ ПАРТНЕРОМ</NavigationButton>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
