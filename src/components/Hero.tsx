import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const rotateX = useTransform(scrollY, [0, 300], [0, 10]);
  const opacity = useTransform(scrollY, [0, 250], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-12 md:pt-0 overflow-hidden bg-white site-grid" id="home">
      <div className="absolute inset-0 technical-grid opacity-50 md:opacity-100 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 technical-grid-fine opacity-30 md:opacity-100 z-0 pointer-events-none"></div>
      
      <motion.div 
        className="relative z-30 container mx-auto px-4 md:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 items-center w-full"
        style={{ y, rotateX, opacity }}
      >
        <motion.div 
          className="max-w-xl order-2 lg:order-1 pb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">Available for Work</span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-3 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            AI Engineer & <span className="text-primary">Developer</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm md:text-base lg:text-lg text-on-surface-variant max-w-lg mb-4 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Building AI solutions with LLM fine-tuning, RAG systems, and custom AI pipelines. Turning ideas into working prototypes.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2 md:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button 
              onClick={() => scrollToSection('systems')} 
              className="kinetic-gradient text-white px-4 md:px-6 py-2 md:py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('architectures')} 
              className="bg-surface-container hover:bg-surface-container-high text-on-background px-4 md:px-6 py-2 md:py-3 text-xs font-bold uppercase tracking-widest transition-all border border-outline-variant/30 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Experience
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <motion.div
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="none"
              poster="/me-placeholder.jpg"
              className="h-[40vh] sm:h-[50vh] md:h-[50vh] lg:h-[60vh] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,104,89,0.15)]"
            >
              <source src="/me.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.button 
        onClick={() => scrollToSection('systems')}
        className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 z-30 group cursor-pointer hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2 md:gap-3"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-on-surface-variant text-[10px] uppercase tracking-widest group-hover:text-primary transition-colors">Scroll</span>
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
            <ChevronDown className="text-primary group-hover:text-white" size={16} />
          </div>
        </motion.div>
      </motion.button>
    </section>
  );
}