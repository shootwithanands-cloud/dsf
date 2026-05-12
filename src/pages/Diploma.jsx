import { motion } from 'framer-motion';

const Diploma = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 md:px-12">
        {/* Editorial Hero */}
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.5em] text-gold mb-6"
          >
            Recognition
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-editorial font-light leading-none mb-8"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.02em' }}
          >
            <span className="italic text-gold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Diploma</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="h-[1px] bg-gold mx-auto mb-16"
          />

          {/* Diploma Image Section */}
          <motion.div
            initial={{ opacity: 0, rotateX: 20, scale: 0.95 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: "2000px" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: -5, translateZ: 50, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative group p-6 glass-ultra rounded-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]"
            >
              <div className="relative overflow-hidden aspect-[1.414/1] bg-black/40 rounded-lg transform-3d" style={{ translateZ: "20px" }}>
                <img 
                  src="/diploma-main.png" 
                  alt="Official Diploma" 
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                
                {/* Ornamental Gold Accents (3D Layered) */}
                <div className="absolute inset-4 border border-gold/20 pointer-events-none" style={{ translateZ: "10px" }} />
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40" style={{ translateZ: "30px" }} />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/40" style={{ translateZ: "30px" }} />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/40" style={{ translateZ: "30px" }} />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/40" style={{ translateZ: "30px" }} />
              </div>
              
              <div className="mt-10 text-center" style={{ translateZ: "40px" }}>
                <p className="text-[10px] uppercase tracking-[0.6em] text-white/40 font-medium">Official Certification • Shoots & Shoots Academy</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Declaration Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mt-16 p-8 glass-ultra rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
            <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "I hereby declare that every visual in this portfolio has been captured by me. Every frame is an authentic emotion and the result of my creative hard work."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Diploma;
