export const pageAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const titleAnimation = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const cardAnimation = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const fadeAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
export const projectAnimation = {
  hidden: { opacity: 0, scale: 1.3, transition: { duration: 0.3 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const slideAnimation = {
  hidden: { opacity: 0, x: 100, transition: { duration: 0.3 } },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};
export const skillTitleAnimation = {
  hidden: { opacity: 0, y: 200, transition: { duration: 0.3 } },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
