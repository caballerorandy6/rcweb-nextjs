export const linkVariants = {
  hover: {
    scale: 1.3,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};

export const hoverInfinitySpringVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export const navigationVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", mass: 1.2, damping: 10, delay: 0.5 },
  },
  exit: {
    x: "100vw",
    transition: { type: "spring", mass: 1.2, damping: 10, delay: 0.5 },
  },
};

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export const springInfinityVariants = {
  scale: [1, 1.2, 1],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "reverse",
  },
};
