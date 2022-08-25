import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  const variants = {
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      },
    },
    out: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      },
    },
    in: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
  };
  return (
    <div className='background'>
      <div className="effect-2">
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            key={asPath}
            variants={variants}
            initial="in"
            animate="inactive"
            exit="out"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Transition;