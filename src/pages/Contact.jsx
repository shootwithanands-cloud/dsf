import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-gold mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter"
          >
            Let's Create <br /> Something Beautiful
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background blur decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none" />
            
            <form className="relative z-10 space-y-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-lg focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black uppercase tracking-widest text-sm font-medium flex items-center justify-center space-x-2 hover:bg-gold dark:hover:bg-gold transition-colors group"
                type="button"
              >
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Map and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col space-y-12"
          >


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Location</h4>
                <p className="font-medium text-lg">123 Photography Lane, Creative District, NY 10001</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Contact Details</h4>
                <p className="font-medium text-lg mb-1">hello@shootwithanand.com</p>
                <p className="font-medium text-lg">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
              <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Social Networks</h4>
              <div className="flex space-x-6">
                {[
                  { name: 'Instagram', url: 'https://www.instagram.com/shoot_with_anand?igsh=MTBtY2w2bTByMmF5bg==' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/deepanshu-anand-386990408?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                  { name: 'Behance', url: '#' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#d4af37' }}
                    className="text-sm uppercase tracking-widest font-medium transition-colors"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
