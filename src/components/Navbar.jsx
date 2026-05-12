import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Music } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Diploma', path: '/diploma' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Logic for actual audio playing would go here
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-3 glass shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/5" : "py-6 bg-transparent"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-display font-bold tracking-wider">
            Shoot with <span className="text-gold">Anand</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) => cn(
                  "text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold relative group",
                  isActive ? "text-gold" : "text-black dark:text-white"
                )}
              >
                {({ isActive }) => (
                  <>
                    {link.title}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-gray-300 dark:border-gray-700 pl-6">
              <button onClick={toggleMusic} className="hover:text-gold transition-colors">
                <Music size={18} className={isPlaying ? "text-gold animate-pulse" : ""} />
              </button>
              <button onClick={toggleTheme} className="hover:text-gold transition-colors">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black dark:text-white hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-8 right-6 md:right-12 hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => cn(
                      "text-3xl md:text-5xl font-display uppercase tracking-widest hover:text-gold transition-colors",
                      isActive ? "text-gold" : "text-black dark:text-white"
                    )}
                  >
                    {link.title}
                  </NavLink>
                </motion.div>
              ))}
              
              <div className="flex space-x-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 w-full justify-center">
                <button onClick={toggleMusic} className="hover:text-gold transition-colors">
                  <Music size={24} className={isPlaying ? "text-gold" : ""} />
                </button>
                <button onClick={toggleTheme} className="hover:text-gold transition-colors">
                  {isDark ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
