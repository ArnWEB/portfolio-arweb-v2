import { Briefcase } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: "Ernst & Young GDS",
      role: "Senior AI Analyst (AI & DATA)",
      period: "May 2025 - Current",
      location: "Kolkata",
      description: [
        "Built organization's first enterprise AI-driven compliance solution for stock and insurance holdings declaration",
        "Developed automated document processing pipeline for NSDL/CDSL files using Azure Document Intelligence with RapidOCR fallback",
        "Pre-trained and fine-tuned Qwen 4B SLM on cybersecurity domain corpus using NVIDIA NeMo",
        "Fine-tuned & deployed LLMs (LLaMA-3, Qwen, Azure OpenAI) via Neo4j knowledge graphs using QLoRA. Scaled 7K to 140K samples (20x augmentation)"
      ]
    },
    {
      company: "LTIMindtree",
      role: "Associate GenAI Engineer (Insurance)",
      period: "2021 - 2025",
      location: "Kolkata",
      description: [
        "Fine-tuned and deployed LLMs (Azure OpenAI, LLaMA-3) using domain-specific datasets",
        "Designed end-to-end AI pipelines in Python for data preprocessing, fine-tuning, inference, and evaluation",
        "Trained multimodal models and implemented document AI pipelines with Azure Document Intelligence + RapidOCR fallback",
        "Architected scalable cloud platforms with Azure Service Bus, OAuth2, and multi-tier microservices"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-20 bg-surface site-grid" id="architectures">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-primary font-heading text-xs font-bold uppercase tracking-widest">02 // CAREER</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-on-background tracking-tighter">Experience</h2>
          </div>
          <div className="max-w-md">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Professional journey building enterprise AI systems and leading compliance automation initiatives.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/30 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase className="text-primary" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-on-background">{exp.company}</h3>
                    <p className="text-sm text-on-surface-variant">{exp.location}</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary text-white whitespace-nowrap">{exp.period}</span>
              </div>
              <div className="text-primary font-bold mb-4">{exp.role}</div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="text-sm text-on-surface-variant flex gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <span className="text-primary">▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <ScrollIndicator targetId="documentation" />
      </div>
    </section>
  );
}