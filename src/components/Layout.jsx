import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import FloatingSocials from './FloatingSocials';
import { motion } from 'framer-motion';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 relative">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30">
        <img src="/squirrel2.jpg" className="w-full h-full object-cover" alt="" />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollProgress />
        <Navbar />
        <FloatingSocials />
      
      <motion.main 
        className="flex-grow pt-0" // Removed pt-24 to allow full screen heroes
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>

      <Footer />
      </div>
    </div>
  );
};

export default Layout;
