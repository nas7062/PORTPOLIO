import { Routes as RouterRoutes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './App';
import Work from './pages/Work';

const page = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.35 } },
};

export default function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <RouterRoutes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </RouterRoutes>
      </motion.div>
    </AnimatePresence>
  );
}
