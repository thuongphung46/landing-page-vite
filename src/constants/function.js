
export const createCardVariants = (x, y) => ({
    offscreen: {
      x: x,
      y: y,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        delay: 0.5,
        duration: 0.8
      }
    }
  });

export const createCardVariants2 = (x, y) => ({
    offscreen: {
      x: x,
      y: y,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        delayChildren: 0.5,
        duration: 0.4
      }
    }
  });