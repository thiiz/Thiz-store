import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion 
      initial="hidden"
      key={asPath} // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
    >
      {children}
    </motion.main>
  );
};
export default Transition;