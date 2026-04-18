import { ArrowUpRight, Cloud, Brain } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import { motion } from 'framer-motion';

export default function FeaturedWork() {
  const projects = [
    {
      tags: ["LLM", "Qwen"],
      title: "Enterprise Compliance AI",
      desc: "Built organization's first enterprise AI-driven compliance solution for stock and insurance holdings declaration, meeting regulatory requirements.",
      stats: [
        { label: "Data Scale", value: "140K Points" },
        { label: "Augmentation", value: "20x" }
      ]
    },
    {
      tags: ["DOC AI"],
      title: "Document Intelligence",
      desc: "Automated document processing pipeline for NSDL/CDSL files with Azure Document Intelligence + RapidOCR fallback.",
      accuracy: "99.5%"
    },
    {
      tags: ["RAG"],
      title: "RAG Pipeline",
      desc: "Neo4j knowledge graph-based RAG system scaling 7K samples to 140K structured points for domain adaptation.",
      icon: Cloud
    },
    {
      tags: ["Fine-tuning"],
      title: "LLM Fine-tuning",
      desc: "Fine-tuned and deployed LLMs (LLaMA-3, Qwen, Azure OpenAI) using QLoRA for domain-specific tasks.",
      tech: ["QLoRA", "NeMo"],
      icon: Brain
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-20 bg-surface site-grid" id="systems">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-primary font-heading text-xs font-bold uppercase tracking-widest">01 // PROTOTYPES</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-on-background tracking-tighter">Featured Work</h2>
          </div>
          <div className="max-w-md">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              A curated selection of enterprise AI systems deployed in production-grade environments, 
              leveraging LLM pipelines and compliance automation.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-surface-container-low p-8 rounded-lg border border-outline-variant/30 hover:border-primary/30 transition-colors ${index === 0 ? 'lg:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={`text-[10px] px-2 py-0.5 rounded font-bold ${i === 0 ? 'bg-primary/10 text-primary' : 'bg-surface-container-high text-on-surface-variant'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-on-background">{project.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6">{project.desc}</p>
              
              {'stats' in project && (
                <div className="flex gap-8">
                  {project.stats?.map((stat, i) => (
                    <div key={i}>
                      <p className="text-xs text-primary font-bold uppercase tracking-tighter">{stat.label}</p>
                      <p className="text-xl font-heading font-bold text-on-background">{stat.value}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {'accuracy' in project && (
                <div>
                  <p className="text-xs text-on-surface-variant mb-2 font-mono">EXTRACTION_ACCURACY: {project.accuracy}</p>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: project.accuracy }}></div>
                  </div>
                </div>
              )}
              
              {'icon' in project && project.icon && (
                <project.icon className="text-tertiary mb-4" size={24} />
              )}
              
              {'tech' in project && (
                <div className="flex gap-2">
                  {project.tech?.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-primary px-2 py-1 bg-primary/5 rounded border border-primary/20">{t}</span>
                  ))}
                </div>
              )}
              
              {'stats' in project && (
                <ArrowUpRight className="ml-auto text-4xl text-primary/20" size={36} />
              )}
            </motion.div>
          ))}
        </div>
        
        <ScrollIndicator targetId="architectures" />
      </div>
    </section>
  );
}