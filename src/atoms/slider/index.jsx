import "./index.scss";
import React from "react";
import UseGetWith from "../../hook/useGetWith";
import { motion } from "framer-motion";
import { FcNext, FcPrevious } from "react-icons/fc";

export const Slideshow = ({ data, type, delay }) => {
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
    if (width < 600 && type === "video") {
      return "320px";
    } else if (width > 600 && type === "video") {
      return "640px";
    } else if (width < 600 && type === "image") {
      return "180px";
    } else if (width > 600 && type === "image") {
      return "360px";
    }
  };
  const getHeight = () => {
    if (width < 600 && type === "video") {
      return "180px";
    } else if (width > 600 && type === "video") {
      return "360px";
    } else if (width < 600 && type === "image") {
      return "180px";
    } else if (width > 600 && type === "image") {
      return "360px";
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
            <div className="slide " key={index}>
              {type === "video" ? (
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
              ) : (
                <>
                  <img
                    className=" object-cover"
                    height={SizeWidth ? `180px` : "360px"}
                    width={SizeWidth ? `180px` : "360px"}
                    src={items.url}
                  ></img>
                </>
              )}
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
