import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };
  return (
      <AnimatePresence initial={false} mode='wait'>
        <motion.main
          key={asPath} // Set the initial state to variants.hidden
          transition={config}
          initial={{ scale: .8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          className="main" // Set the transition to linear
        >
          {children}
        </motion.main>
      </AnimatePresence>
  );
};
export default Transition;