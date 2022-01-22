export const pageVariant = {
  hidden: {
    opacity: 0,
    y: '100%',
  },
  visible: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: '-100%',
  },
};
