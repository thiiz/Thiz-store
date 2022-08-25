import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  const variants = {
    inactive: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      },
    },
    in: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
  };
  return (
    <div className='background'>
      <div className="effect">
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