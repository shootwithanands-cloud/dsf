import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { cn } from '../utils/cn';

// Demo Images Generator
const getImages = (category, count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${category}-${i}`,
    url: `https://picsum.photos/seed/${category}${i}/800/1200`,
    thumb: `https://picsum.photos/seed/${category}${i}/400/600`,
  }));
};

const weddingImages = [
  { id: 'wedding-1', url: '/wedding-1.jpg', thumb: '/wedding-1.jpg' },
  { id: 'wedding-2', url: '/wedding-2.jpg', thumb: '/wedding-2.jpg' },
  { id: 'wedding-3', url: '/wedding-3.jpg', thumb: '/wedding-3.jpg' },
  { id: 'wedding-4', url: '/wedding-4.jpg', thumb: '/wedding-4.jpg' },
  { id: 'wedding-5', url: '/wedding-5.jpg', thumb: '/wedding-5.jpg' },
  { id: 'portrait-1', url: '/portrait-1.jpg', thumb: '/portrait-1.jpg' },
  { id: 'portrait-2', url: '/portrait-2.jpg', thumb: '/portrait-2.jpg' },
  { id: 'portrait-3', url: '/portrait-3.jpg', thumb: '/portrait-3.jpg' },
  { id: 'portrait-4', url: '/portrait-4.jpg', thumb: '/portrait-4.jpg' },
  { id: 'portrait-5', url: '/portrait-5.jpg', thumb: '/portrait-5.jpg' }
];

const fashionImages = [
  { id: 'fashion-1', url: 'https://i.ibb.co/N6QGfW51/DSC-0150.jpg', thumb: 'https://i.ibb.co/N6QGfW51/DSC-0150.jpg' },
  { id: 'fashion-2', url: 'https://i.ibb.co/n81hwkzr/DSC-0124.jpg', thumb: 'https://i.ibb.co/n81hwkzr/DSC-0124.jpg' },
  { id: 'fashion-3', url: 'https://i.ibb.co/yc6ry611/IMG-0333.jpg', thumb: 'https://i.ibb.co/yc6ry611/IMG-0333.jpg' },
  { id: 'fashion-4', url: 'https://i.ibb.co/PvDpP9kd/IMG-0340.jpg', thumb: 'https://i.ibb.co/PvDpP9kd/IMG-0340.jpg' },
  { id: 'fashion-5', url: 'https://i.ibb.co/qYK18CWm/IMG-0880.jpg', thumb: 'https://i.ibb.co/qYK18CWm/IMG-0880.jpg' },
  { id: 'fashion-6', url: 'https://i.ibb.co/nMMT2pXk/IMG-0882-JPEG-1.jpg', thumb: 'https://i.ibb.co/nMMT2pXk/IMG-0882-JPEG-1.jpg' },
  { id: 'fashion-7', url: 'https://i.ibb.co/TxgtnttL/IMG-0888-PG.jpg', thumb: 'https://i.ibb.co/TxgtnttL/IMG-0888-PG.jpg' },
  { id: 'fashion-8', url: 'https://i.ibb.co/zjJNdJy/JPGE.jpg', thumb: 'https://i.ibb.co/zjJNdJy/JPGE.jpg' }
];

const portraitImages = [
  { id: 'new-portrait-1', url: '/new-portrait-1.jpg', thumb: '/new-portrait-1.jpg' },
  { id: 'new-portrait-2', url: '/new-portrait-2.jpg', thumb: '/new-portrait-2.jpg' },
  { id: 'new-portrait-3', url: '/new-portrait-3.jpg', thumb: '/new-portrait-3.jpg' },
  { id: 'new-portrait-4', url: '/new-portrait-4.jpg', thumb: '/new-portrait-4.jpg' }
];

const natureImages = [
  { id: 'nature-1', url: '/nature-1.jpg', thumb: '/nature-1.jpg' },
  { id: 'nature-2', url: '/nature-2.jpg', thumb: '/nature-2.jpg' },
  { id: 'nature-3', url: '/nature-3.jpg', thumb: '/nature-3.jpg' },
  { id: 'nature-4', url: '/nature-4.jpg', thumb: '/nature-4.jpg' },
  { id: 'nature-5', url: '/nature-5.jpg', thumb: '/nature-5.jpg' },
  { id: 'nature-6', url: '/nature-6.jpg', thumb: '/nature-6.jpg' },
  { id: 'nature-7', url: '/nature-7.jpg', thumb: '/nature-7.jpg' },
  { id: 'nature-8', url: '/nature-8.jpg', thumb: '/nature-8.jpg' }
];

const wildlifeImages = [
  { id: 'wildlife-1', url: '/wildlife-1.jpg', thumb: '/wildlife-1.jpg' },
  { id: 'wildlife-2', url: '/wildlife-2.jpg', thumb: '/wildlife-2.jpg' },
  { id: 'wildlife-3', url: '/wildlife-3.jpg', thumb: '/wildlife-3.jpg' },
  { id: 'wildlife-4', url: '/wildlife-4.jpg', thumb: '/wildlife-4.jpg' },
  { id: 'wildlife-5', url: '/wildlife-5.jpg', thumb: '/wildlife-5.jpg' }
];

const streetImages = [
  { id: 'street-1', url: '/street-1.jpg', thumb: '/street-1.jpg' },
  { id: 'street-2', url: '/street-2.jpg', thumb: '/street-2.jpg' },
  { id: 'street-3', url: '/street-3.jpg', thumb: '/street-3.jpg' },
  { id: 'street-4', url: '/street-4.jpg', thumb: '/street-4.jpg' }
];

const travelImages = [
  { id: 'travel-1', url: '/travel-1.jpg', thumb: '/travel-1.jpg' },
  { id: 'travel-2', url: '/travel-2.jpg', thumb: '/travel-2.jpg' },
  { id: 'travel-3', url: '/travel-3.jpg', thumb: '/travel-3.jpg' },
  { id: 'travel-4', url: '/travel-4.jpg', thumb: '/travel-4.jpg' },
  { id: 'travel-5', url: '/travel-5.jpg', thumb: '/travel-5.jpg' }
];

const eventsImages = [
  { id: 'event-1', url: '/event-1.jpg', thumb: '/event-1.jpg' },
  { id: 'event-2', url: '/event-2.jpg', thumb: '/event-2.jpg' },
  { id: 'event-3', url: '/event-3.jpg', thumb: '/event-3.jpg' },
  { id: 'event-4', url: '/event-4.jpg', thumb: '/event-4.jpg' }
];

const productImages = [
  { id: 'product-1', url: '/new-product-1.jpg', thumb: '/new-product-1.jpg' },
  { id: 'product-2', url: '/new-product-2.jpg', thumb: '/new-product-2.jpg' },
  { id: 'product-3', url: '/new-product-3.jpg', thumb: '/new-product-3.jpg' },
  { id: 'product-4', url: '/new-product-4.jpg', thumb: '/new-product-4.jpg' }
];

const cinematicImages = [
  { id: 'cinematic-1', url: '/cinematic-1.jpg', thumb: '/cinematic-1.jpg' },
  { id: 'cinematic-2', url: '/cinematic-2.jpg', thumb: '/cinematic-2.jpg' }
];

const categories = [
  { id: 'wedding', name: 'Female', images: weddingImages, coverIndex: 6 },
  { id: 'portrait', name: 'Portrait', images: portraitImages },
  { id: 'fashion', name: 'Male', images: fashionImages },
  { id: 'nature', name: 'Wildlife', images: natureImages },
  { id: 'wildlife', name: 'Child', images: wildlifeImages },
  { id: 'street', name: 'Photo Walks', images: streetImages },
  { id: 'travel', name: 'Lightrates', images: travelImages },
  { id: 'events', name: 'Food', images: eventsImages },
  { id: 'product', name: 'Fruit & Vegetable', images: productImages },
  { id: 'cinematic', name: 'Macro', images: cinematicImages },
];

const WorkGallery = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openCategory = (cat) => {
    setActiveCategory(cat);
  };

  const closeCategory = () => {
    setActiveCategory(null);
  };

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % activeCategory.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + activeCategory.images.length) % activeCategory.images.length);
  };

  return (
    <section className="py-24 bg-white dark:bg-black relative" id="gallery">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-4">My Work</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-3d">Categories</h3>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 perspective-container">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 15, 
                rotateX: -5,
                translateZ: 50,
                transition: { duration: 0.4 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => openCategory(cat)}
              className="category-card-3d glow-card shimmer-3d relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/40 transition-colors duration-500 z-10" />
              <img 
                src={cat.images[cat.coverIndex || 0].thumb} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-end justify-end p-5">
                <h4 className="text-xl font-display text-white font-semibold tracking-wide drop-shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h4>
                <div className="w-0 h-[2px] bg-gradient-to-r from-gold to-yellow-300 mt-2 group-hover:w-full transition-all duration-500 delay-100 rounded-full" />
                <p className="text-xs text-white/60 mt-1 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{cat.images.length} shots</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Category View */}
      <AnimatePresence>
        {activeCategory && !isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] bg-white dark:bg-black overflow-y-auto"
          >
            <div className="sticky top-0 z-20 flex justify-between items-center p-6 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
              <h2 className="text-3xl font-display uppercase tracking-widest">{activeCategory.name}</h2>
              <button 
                onClick={closeCategory}
                className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 md:p-12">
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {activeCategory.images.map((img, idx) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => openLightbox(idx)}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 z-10 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white font-medium tracking-widest uppercase text-sm transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">View</span>
                    </div>
                    <img 
                      src={img.thumb} 
                      alt="" 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors z-50"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>
            
            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors z-50"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>

            <motion.img
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={activeCategory.images[activeImageIndex].url}
              alt=""
              className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 tracking-widest text-sm font-medium">
              {activeImageIndex + 1} / {activeCategory.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkGallery;
