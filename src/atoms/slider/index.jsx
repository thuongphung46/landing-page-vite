import "./index.scss";
import React from "react";
import { Data } from "../../data/IntroduceURLData";
import UseGetWith from "../../hook/useGetWith";
import { motion } from "framer-motion";
import { FcNext, FcPrevious } from "react-icons/fc";

const delay = 25000;

export const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const { width } = UseGetWith();
  const SizeWidth = width < 1024;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const goToPrevious = () => {
    resetTimeout();
    setIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    resetTimeout();
    setIndex((prevIndex) =>
      prevIndex === Data.length - 1 ? 0 : prevIndex + 1
    );
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(goToNext, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div
        className="slideshow"
        style={{
          width: SizeWidth ? `320px` : "640px",
          height: SizeWidth ? `180px` : "360px",
        }}
      >
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {Data.map((items, index) => (
            <div className="slide" key={index}>
              <motion.iframe
                key={index}
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "linear", delay: 0.8 }}
                width={SizeWidth ? `320` : "640px"}
                height={SizeWidth ? `180` : "360px"}
                allow="autoplay"
                src={items.url}
              ></motion.iframe>
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
          {Data.map((_, idx) => (
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
