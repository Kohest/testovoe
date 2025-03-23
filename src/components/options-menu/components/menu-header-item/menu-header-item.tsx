import React, { FC } from "react";
import { motion } from "framer-motion";
import styles from "./menu-header-item.module.scss";

interface Props {
  title: string;
  text: string;
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  id: number;
}

const MenuHeaderItem: FC<Props> = ({
  text,
  title,
  isActive,
  id,
  setActive,
}) => {
  return (
    <>
      <div
        className={styles.menuHeaderItem__container}
        onClick={() => {
          setActive(id);
        }}
      >
        <span
          className={
            isActive
              ? styles.menuHeaderItem__title_active
              : styles.menuHeaderItem__title
          }
        >
          {title}
        </span>
        {isActive && <span className={styles.menuHeaderItem__indicator} />}
      </div>
      <motion.div
        className={
          isActive
            ? styles.menuHeaderItem__text_active
            : styles.menuHeaderItem__text
        }
        initial={{ opacity: 0 }}
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p>{text}</p>
      </motion.div>
    </>
  );
};

export default MenuHeaderItem;
