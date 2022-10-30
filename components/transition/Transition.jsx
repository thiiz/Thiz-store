import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={asPath}
        transition={{ duration: .5 }}
        className="main"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};
export default Transition;