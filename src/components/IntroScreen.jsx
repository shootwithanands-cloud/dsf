import { motion } from 'framer-motion';

const IntroScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden"
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] } 
      }}
    >
      {/* Background Particles/Bokeh Effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/5 blur-3xl"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Cinematic Shutter Blades (3D-like Overlay) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ rotate: 45, scale: 2 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[150vw] h-[150vw] flex items-center justify-center opacity-10"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[1px] bg-gold"
              style={{ transform: `rotate(${i * 45}deg)` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-gold text-xs uppercase tracking-[0.8em] mb-4 opacity-50">Studio Portfolio</span>
            <h1 className="text-5xl md:text-8xl font-editorial font-light text-white tracking-tight flex items-baseline gap-4">
              <span className="opacity-80">Shoot with</span>
              <span className="italic text-gold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Anand</span>
            </h1>
          </motion.div>
        </div>

        {/* Dynamic Scanning Line (Replacing the simple static line) */}
        <div className="relative w-64 h-[1px] bg-white/10 mt-8 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Progress Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 flex flex-col items-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-light">Calibrating Visuals</p>
          <div className="mt-2 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-gold/40"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Edge Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </motion.div>
  );
};

export default IntroScreen;

