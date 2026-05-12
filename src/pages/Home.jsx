import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import WorkGallery from '../components/WorkGallery';
import { Play } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const heroImages = [
  '/squirrel2.jpg',
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToGallery = (e) => {
    e.preventDefault();
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        ref={containerRef} 
        onMouseMove={handleMouseMove}
        className="relative h-screen w-full overflow-hidden bg-black cursor-none"
      >
        {heroImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentSlide === idx ? 1 : 0,
              scale: currentSlide === idx ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <motion.img 
              src={img} 
              alt="Hero" 
              className="w-full h-full object-cover" 
              style={{ x: translateX, y: translateY, scale: 1.1 }}
            />
          </motion.div>
        ))}

        <motion.div 
          style={{ 
            y, 
            opacity,
            rotateX, 
            rotateY,
            perspective: 1000,
            transformStyle: "preserve-3d"
          }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white pointer-events-none"
        >
          <div className="text-center px-6 pointer-events-auto">
            <motion.h1 
              className="font-editorial font-light leading-none mb-8"
              style={{ 
                fontSize: 'clamp(3.5rem, 10vw, 8rem)', 
                letterSpacing: '-0.02em',
                translateZ: 120
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="block text-white opacity-90 drop-shadow-2xl">Shoot with</span>
              <span className="block italic text-gold drop-shadow-[0_0_60px_rgba(212,175,55,0.4)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Anand
              </span>
            </motion.h1>

            <motion.p 
              style={{ translateZ: 60 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-[0.4em] uppercase"
            >
              Capturing Emotions Through Every Frame
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6" style={{ translateZ: 90 }}>
              <motion.a
                href="#gallery"
                onClick={scrollToGallery}
                whileHover={{ scale: 1.1, translateZ: 40 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-gold transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                Explore Portfolio
              </motion.a>
              <motion.button
                onClick={() => navigate('/diploma')}
                whileHover={{ scale: 1.1, translateZ: 40 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-white/10 backdrop-blur-md transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                Diploma
              </motion.button>
            </div>
          </div>
        </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gold"
                animate={{ top: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <span className="text-xs uppercase tracking-[0.3em] mt-4 text-white/50">Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Statistics */}
      <section className="py-24 bg-dark-gray dark:bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Awards Won', value: '42' },
              { label: 'Happy Clients', value: '500+' },
              { label: 'Photos Taken', value: '1M+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl md:text-6xl font-display font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <WorkGallery />

      {/* Video Reel Preview */}
      <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2070&auto=format&fit=crop" alt="Video Cover" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-24 h-24 rounded-full border border-gold flex items-center justify-center text-gold cursor-pointer group glass-card"
          >
            <Play size={32} className="ml-2 group-hover:fill-gold transition-colors" />
          </motion.div>
          <h2 className="text-3xl font-display uppercase tracking-widest text-white mt-8">Watch Showreel</h2>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Client Stories</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Working with Jonathan was an absolute dream. He captured our wedding with such cinematic beauty.", name: "Sarah & James", role: "Wedding Clients" },
              { text: "The attention to detail and lighting in his product photography elevated our brand to the next level.", name: "Michael Chen", role: "Creative Director" },
              { text: "Every portrait tells a story. His ability to make you feel comfortable while capturing pure emotion is rare.", name: "Emma Thompson", role: "Actress" }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-card p-8 text-center relative"
              >
                <div className="text-gold text-4xl mb-6">"</div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                  {testimonial.text}
                </p>
                <div>
                  <div className="font-bold font-display tracking-wider uppercase text-sm mb-1">{testimonial.name}</div>
                  <div className="text-xs text-gold uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
