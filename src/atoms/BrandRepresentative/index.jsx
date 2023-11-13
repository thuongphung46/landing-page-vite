import "./index.scss";
import React from "react";
import UseGetWith from "../../hook/useGetWith";
import { motion } from "framer-motion";
import { FcNext, FcPrevious } from "react-icons/fc";

export const SlideBrandRepresentative = ({ data, delay }) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const { width } = UseGetWith();
  const SizeWidth = width < 1424;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const goToPrevious = () => {
    resetTimeout();
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    resetTimeout();
    setIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(goToNext, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  const getWith = () => {
    if (SizeWidth) {
      return "320px";
    } else {
      return "540px";
    }
  };
  const getHeight = () => {
    if (SizeWidth) {
      return "320px";
    } else {
      return "580px";
    }
  };

  return (
    <>
      <div
        className="slideshow"
        style={{
          height: getHeight(),
          width: getWith(),
        }}
      >
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {data.map((items, index) => (
            <div
              className="slide "
              style={{
                height: getHeight(),
                width: getWith(),
              }}
              key={index}
            >
              <motion.img
                className="object-cover rounded "
                key={index}
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "linear", delay: 0.8 }}
                style={{
                  height: "100%",
                }}
                src={items.url}
              ></motion.img>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-[48px]">
        <FcPrevious
          style={{
            fontSize: "24px",
          }}
          onClick={goToPrevious}
        />
        <div className="slideshowDots">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot ${index === idx ? "active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
        {/* Next Button */}
        <FcNext
          style={{
            fontSize: "24px",
          }}
          onClick={goToNext}
        />
      </div>
    </>
  );
};
