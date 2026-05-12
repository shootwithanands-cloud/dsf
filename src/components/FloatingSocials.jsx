import { Instagram, Twitter, Facebook, Dribbble } from 'lucide-react';

const FloatingSocials = () => {
  return (
    <div className="fixed right-6 bottom-1/2 transform translate-y-1/2 z-40 hidden lg:flex flex-col space-y-6">
      <a href="#" className="text-gray-400 hover:text-gold transition-colors hover:-translate-x-1 duration-300">
        <Instagram size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-gold transition-colors hover:-translate-x-1 duration-300">
        <Twitter size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-gold transition-colors hover:-translate-x-1 duration-300">
        <Facebook size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-gold transition-colors hover:-translate-x-1 duration-300">
        <Dribbble size={20} />
      </a>
      <div className="w-[1px] h-16 bg-gray-700 mx-auto mt-4"></div>
      <div className="writing-vertical-rl text-xs tracking-[0.3em] uppercase text-gray-400 mx-auto" style={{ writingMode: 'vertical-rl' }}>
        Follow Me
      </div>
    </div>
  );
};

export default FloatingSocials;
