import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-gray dark:bg-[#050505] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-display font-bold tracking-wider mb-6">Shoot with <span className="text-gold">Anand</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Capturing moments, creating memories, and telling stories through the lens. Award-winning photography with a cinematic approach to life's most beautiful details.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all hover:scale-110">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all hover:scale-110">
                <Facebook size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-widest text-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              <li><NavLink to="/" className="text-gray-400 hover:text-gold transition-colors text-sm">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-400 hover:text-gold transition-colors text-sm">About Me</NavLink></li>
              <li><NavLink to="/diploma" className="text-gray-400 hover:text-gold transition-colors text-sm">Diplomas & Awards</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-gold transition-colors text-sm">Contact</NavLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-widest text-gray-200">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Wedding & Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Fashion & Portrait</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Nature & Wildlife</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Cinematic Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-widest text-gray-200">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-1" />
                <span>123 Photography Lane, Creative District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span>hello@shootwithanand.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shoot with Anand. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
