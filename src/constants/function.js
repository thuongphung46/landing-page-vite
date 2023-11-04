export const createCardVariants = (x, y) => ({
    offscreen: {
      x: x,
      y: y
    },
    onscreen: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 2
      }
    }
  });