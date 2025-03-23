import React, { useEffect, useRef, useState } from "react";
import styles from "./partners-slider.module.scss";

const PartnersSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [startXPosition, setStartXPosition] = useState(0);

  const sliderItems = [
    "/src/assets/images/logos/logo_carlo.png",
    "/src/assets/images/logos/logo_adidas.png",
    "/src/assets/images/logos/logo_cym.png",
    "/src/assets/images/logos/logo_gum.png",
    "/src/assets/images/logos/logo_nike.png",
    "/src/assets/images/logos/logo_prada.png",
    "/src/assets/images/logos/logo_zara.png",
  ];

  const [items, setItems] = useState([
    ...sliderItems,
    ...sliderItems,
    ...sliderItems,
  ]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsScrolling(true);
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
      setStartXPosition(e.clientX - containerRef.current.offsetLeft);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsScrolling(true);
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
      setStartXPosition(e.touches[0].clientX - containerRef.current.offsetLeft);
    }
  };
  const handleScroll = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isScrolling && containerRef.current) {
      const x = e.clientX - containerRef.current.offsetLeft;
      const distance = startXPosition - x;
      containerRef.current.scrollLeft = scrollLeft + distance;
      if (
        containerRef.current.scrollLeft >=
        containerRef.current.scrollWidth / 3
      ) {
        setScrollLeft(0);
        setItems((prev) => [
          ...prev.slice(sliderItems.length),
          ...prev.slice(0, sliderItems.length),
        ]);
      } else if (containerRef.current.scrollLeft <= 0) {
        setScrollLeft(containerRef.current.scrollWidth / 2);
      }
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isScrolling && containerRef.current) {
      const x = e.touches[0].clientX - containerRef.current.offsetLeft;
      const distance = startXPosition - x;
      const maxScroll =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      containerRef.current.scrollLeft = scrollLeft + distance;
      if (containerRef.current.scrollLeft >= maxScroll) {
        setScrollLeft(0);
      } else if (containerRef.current.scrollLeft <= 0) {
        setScrollLeft(maxScroll);
      }
    }
  };
  const handleMouseUp = () => {
    setIsScrolling(false);
  };
  const handleScrollClick = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = 300;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (direction === "left") {
        console.log(container.scrollLeft);
        if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll;
        } else {
          container.scrollTo({
            left: container.scrollLeft - scrollAmount,
            behavior: "smooth",
          });
        }
      } else if (direction === "right") {
        console.log(container.scrollLeft);
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        } else {
          container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }
  };

  useEffect(() => {
    if (isScrolling) {
      window.addEventListener("mousemove", handleScroll);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleScroll);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isScrolling, startXPosition, handleMouseDown]);
  return (
    <div className={styles.partnersSlider}>
      <div
        className={styles.partnersSlider__arrow_left}
        onClick={() => {
          handleScrollClick("left");
        }}
      ></div>
      <div
        className={styles.partnersSlider__container}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.partnersSlider__item}>
            <img draggable={false} src={item} alt="logo" />
          </div>
        ))}
      </div>
      <div
        className={styles.partnersSlider__arrow_right}
        onClick={() => {
          handleScrollClick("right");
        }}
      ></div>
    </div>
  );
};

export default PartnersSlider;
