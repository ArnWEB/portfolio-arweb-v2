import { Database, Brain, Server } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import { motion } from 'framer-motion';

export default function Pipeline() {
  const steps = [
    { icon: Database, title: "Data Ingestion", desc: "Raw documents processed via Azure Document Intelligence with RapidOCR fallback for reliable extraction." },
    { icon: Brain, title: "LLM Fine-tuning", desc: "Domain-specific training using QLoRA on Neo4j knowledge graphs, scaling datasets by 20x." },
    { icon: Server, title: "Deployment", desc: "Fine-tuned models deployed via FastAPI with Kubernetes auto-scaling for production-grade inference." },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-20 bg-surface-container-lowest border-y border-outline-variant/20 site-grid" id="pipeline">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-heading text-xs font-bold uppercase tracking-widest">03 // ARCHITECTURE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-on-background tracking-tighter">The AI Pipeline</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2 z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <motion.div 
                className="w-16 h-16 bg-white shadow-md rounded-sm border border-outline-variant/30 flex items-center justify-center mb-6"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <step.icon className="text-primary text-3xl" size={28} />
              </motion.div>
              <h4 className="font-heading font-bold text-lg mb-4 text-on-background">{step.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-[280px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <ScrollIndicator targetId="neural-labs" />
      </div>
    </section>
  );
}