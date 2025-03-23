import React, { useEffect, useRef, useState } from "react";
import styles from "./options-menu.module.scss";
import MenuHeaderItem from "./components/menu-header-item/menu-header-item";
import { motion, AnimatePresence } from "framer-motion";

const OptionsMenu = () => {
  const [active, setActive] = React.useState(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [deltaX, setDeltaX] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const getScrollWidth = () => {
    return window.innerWidth < 1260 ? 163.5 : 243;
  };

  const [scrollWidth, setScrollWidth] = useState(getScrollWidth());
  const [lastScrollPosition, setLastScrollPosition] = useState(scrollWidth);

  const menuItem = [
    {
      id: 1,
      title: "ПРОФИЛЬ",
      image: "/src/assets/images/phone2_actions.jpg",
      text: "Вы всегда получите полную информацию об акции: подробное описание, бренд, магазины и торговые центры где походит акция. Также доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции.",
    },
    {
      id: 2,
      title: "ПОДПИСКИ",
      image: "/src/assets/images/phone2_subsribtions.jpg",
      text: "Подписывайтесь только на то, что вас интересует и всегда будьте в курсе новых акций.",
    },
    {
      id: 3,
      title: "ИЗБРАННОЕ",
      image: "/src/assets/images/phone2_favorites.jpg",
      text: "Вы всегда получите полную информацию об акции: подробное описание, бренд, магазины и торговые центры где походит акция. Также доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции.",
    },
    {
      id: 4,
      title: "МОЯ ЛЕНТА",
      image: "/src/assets/images/phone2_list.jpg",
      text: "Огромный каталог с информацией о магазинах, брендах и ТЦ всегда под рукой.",
    },
    {
      id: 5,
      title: "КАРТА",
      image: "/src/assets/images/phone2_map.jpg",
      text: "Каждый день в Москве проходят распродажи. В акциях и скидках дня могут принимать участие любые группы товаров. Особенно популярны распродажи одежды и обуви, распродажи мебели, распродажи сумок.",
    },
  ];

  const withoutActive = menuItem.filter((item) => item.id !== active);
  const activeItem = menuItem.find((item) => item.id === active);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft = scrollWidth;
      }
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const sortedMenu = [
    withoutActive[0],
    activeItem,
    ...withoutActive.slice(1),
  ].filter(Boolean);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setLastScrollPosition(containerRef.current.scrollLeft);
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setLastScrollPosition(containerRef.current.scrollLeft);
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (!containerRef.current || startX === null) return;

    let newScrollPosition = lastScrollPosition;
    if (deltaX > 100) {
      setActive((prev) => (prev > 1 ? prev - 1 : prev));
      newScrollPosition -= scrollWidth;
    } else if (deltaX < -100) {
      setActive((prev) => (prev < menuItem.length ? prev + 1 : prev));
      newScrollPosition += scrollWidth;
    }

    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    setLastScrollPosition(newScrollPosition);
    setStartX(null);
    setDeltaX(0);
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    if (!containerRef.current || touchStartX === null) return;

    let newScrollPosition = lastScrollPosition;
    if (deltaX > 100) {
      setActive((prev) => (prev > 1 ? prev - 1 : prev));
      newScrollPosition -= scrollWidth;
    } else if (deltaX < -100) {
      setActive((prev) => (prev < menuItem.length ? prev + 1 : prev));
      newScrollPosition += scrollWidth;
    }

    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    setLastScrollPosition(newScrollPosition);
    setTouchStartX(null);
    setDeltaX(0);
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || startX === null || !containerRef.current) return;
    let newDeltaX = e.clientX - startX;
    newDeltaX = Math.max(-scrollWidth, Math.min(scrollWidth, newDeltaX));
    console.log(newDeltaX);
    setDeltaX(newDeltaX);

    containerRef.current.scrollTo({ left: lastScrollPosition - newDeltaX });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || touchStartX === null || !containerRef.current) return;
    let newDeltaX = e.touches[0].clientX - touchStartX;
    newDeltaX = Math.max(-scrollWidth, Math.min(scrollWidth, newDeltaX));
    setDeltaX(newDeltaX);

    containerRef.current.scrollTo({ left: lastScrollPosition - newDeltaX });
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, deltaX, handleMouseDown, handleTouchStart]);

  const scrollToActiveItem = (id: number) => {
    if (!containerRef.current) return;
    const newScrollPosition = (id - 1) * scrollWidth;
    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    setLastScrollPosition(newScrollPosition);
  };

  const handleResize = () => {
    setScrollWidth(getScrollWidth());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.menu}>
      <div className={styles.menu__phoneContainer}>
        <div
          className={styles.menu__phone}
          ref={scrollTriggerRef}
          onMouseDown={(e) => handleMouseDown(e)}
          onTouchStart={(e) => handleTouchStart(e)}
        >
          <div className={styles.menu__imageArea}>
            <div className={styles.menu__images} ref={containerRef}>
              {menuItem.map((item) => (
                <img
                  key={item!.id || 0}
                  draggable={false}
                  src={item!.image}
                  alt={item!.title}
                  className={
                    item!.id === active
                      ? styles.menu__image_active
                      : styles.menu__image
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        <div className={styles.menu__header}>
          {sortedMenu.map((item) => (
            <motion.div
              className={styles.menu__headerItem}
              key={item!.id}
              layoutId={`header-${item!.id}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <MenuHeaderItem
                id={item!.id}
                text={item!.text}
                setActive={(id) => {
                  setActive(id);
                  scrollToActiveItem(item!.id);
                }}
                isActive={active === item!.id}
                title={item!.title}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default OptionsMenu;
