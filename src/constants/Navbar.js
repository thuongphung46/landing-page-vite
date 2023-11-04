export const list_button =[
    {
        title:"Trang chủ",
        link:"#",
    },
    {
        title:"Giới thiệu",
        link:"hero",
    },
    {
        title:"Sản phẩm",
        link:"courses",
    },
    {
        title:"Đánh giá",
        link:"achievement",
    },
    {
        title:"Chuyên gia",
        link:"sliderIntroduce",
    },
    {
        title:"Phản hồi",
        link:"feedback",
    }
 ]

 export const listItemsVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
};

export const buttonVariants = {
    hover: { scale: 1.1 },
};

export const variant_nav = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  


export const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

// animation trượt từ dưới lên
 export  const cardVariants = {
    offscreen: {
      y: 50
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1
      }
    }
  };

  export  const cardVariantsMore = {
    offscreen: {
      y: 100
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1
      }
    }
  };

  export  const cardVariantsMoreLeft = {
    offscreen: {
      y: 100
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1
      }
    }
  };
  export  const cardVariantsMoreRight = {
    offscreen: {
      x: 100
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1
      }
    }
  };