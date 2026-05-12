import { motion } from 'framer-motion';

const skills = [
  { name: 'Cinematic Photography', level: 83 },
  { name: 'Photo Editing (Lightroom/Photoshop)', level: 69 },
  { name: 'Lighting & Composition', level: 90 },
  { name: 'Art Direction', level: 85 },
];

const timeline = [
  { year: '2015', title: 'Started Journey', description: 'Bought first DSLR camera and began exploring street photography.' },
  { year: '2018', title: 'First Exhibition', description: 'Showcased "Urban Shadows" at the National Arts Gallery.' },
  { year: '2020', title: 'Award Winning', description: 'Won the International Photography Award for Nature category.' },
  { year: '2023', title: 'Studio LENS', description: 'Opened a premium photography studio focusing on cinematic portraits.' },
];

const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img 
                src="/about-photo.jpg" 
                alt="Shoot with Anand" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-gold rounded-full z-0 opacity-50 hidden md:block" />
            <div className="absolute top-10 -left-10 w-24 h-24 bg-gold rounded-full z-0 opacity-20 blur-xl hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Deepanshu <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Anand</span>
            </h1>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light">
              <p>
                To me, this art isn't just a profession; it's a way of looking at the most beautiful moments of life.
              </p>
              <p>
                I am an 18-year-old artist with 6 months of hands-on experience in capturing frames. I capture stories - real moments, natural emotions, and timeless visuals.
              </p>
              <p>
                With a growing understanding of light, composition, and detail, I focus on highlighting the true essence of every subject. Whether it's portraits, events, fashion, or lifestyle, my goal is to create authentic and meaningful visuals.
              </p>
              <p>
                I have completed my 10th and 12th grade education from the science stream, which has helped me develop a structured, creative, and detail-oriented approach to my work.
              </p>
            </div>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Signature_Placeholder.svg" alt="Signature" className="w-48 mt-12 opacity-50 dark:invert" />
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-32">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-12 text-center uppercase tracking-widest"
          >
            Expertise
          </motion.h3>
          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm uppercase tracking-widest">
                  <span>{skill.name}</span>
                  <span className="text-gold">{skill.level}%</span>
                </div>
                <div className="h-[2px] w-full bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gold"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-16 text-center uppercase tracking-widest"
          >
            My Journey
          </motion.h3>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-gray-800" />
            
            <div className="space-y-24">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-5/12" />
                  <div className="z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-black border border-gold shrink-0 relative">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <span className="text-gold font-display text-2xl font-bold mb-2 block">{item.year}</span>
                    <h4 className="text-xl uppercase tracking-wider mb-2">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
