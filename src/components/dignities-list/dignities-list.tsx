import React from "react";
import styles from "./dignities-list.module.scss";
import DignitiesListCard from "./components/dignities-list-card";
import LikeSvg from "/src/assets/images/like.svg";
import GeoSvg from "/src/assets/images/geo.svg";
import BellSvg from "/src/assets/images/bell.svg";
import SheetSvg from "/src/assets/images/sheet.svg";
const DignitiesList = () => {
  const dignities = [
    {
      image: LikeSvg,
      title: "ТОЛЬКО ЛУЧШЕЕ",
      subtitle: "Всегда актуальные акции у вас в телефоне",
    },
    {
      image: GeoSvg,
      title: "ВСЕ РЯДОМ",
      subtitle: "Находите ближайшие акции на карте рядом с вами",
    },
    {
      image: BellSvg,
      title: "УВЕДОМЛЕНИЯ",
      subtitle:
        "Подписывайтесь только на то, что вас интересует и всегда будьте в курсе новых акций.",
    },
    {
      image: SheetSvg,
      title: "КАТАЛОГ",
      subtitle:
        "Огромный каталог с информацией о магазинах, брендах и ТЦ всегда под рукой.",
    },
  ];
  return (
    <div className={styles.dignities}>
      <div className={styles.dignities__container}>
        {dignities.map((item) => (
          <DignitiesListCard
            key={item.image}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default DignitiesList;
