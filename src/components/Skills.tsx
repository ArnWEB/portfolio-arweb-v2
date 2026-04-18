import { Cpu, Database, Cloud, Shield, Code, Blocks } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    { title: "LLM Systems", icon: Cpu, skills: ["LLaMA-3", "Qwen", "Azure OpenAI", "QLoRA", "RAG", "LangChain", "LangGraph", "Agentic AI", "NeMo"] },
    { title: "Knowledge & Data", icon: Database, skills: ["Neo4j", "Knowledge Graphs", "QLoRA Training", "Data Curation", "Vector DB"] },
    { title: "Cloud & DevOps", icon: Cloud, skills: ["Docker", "Kubernetes", "Azure", "AWS EKS", "AKS", "Terraform", "CI/CD"] },
    { title: "Security", icon: Shield, skills: ["OAuth2", "Azure AD", "Azure Service Bus", "Compliance Systems"] },
    { title: "Languages", icon: Code, skills: ["Python", "Java", "TypeScript", "PowerShell"] },
    { title: "Frameworks", icon: Blocks, skills: ["FastAPI", "Angular", "React", "LangChain", "LangGraph"] }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-20 bg-surface site-grid" id="neural-labs">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-heading text-xs font-bold uppercase tracking-widest">05 // EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-on-background tracking-tighter">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/30 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                rotateY: 5,
                boxShadow: "0 15px 30px rgba(0, 104, 89, 0.12)"
              }}
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="text-primary"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon size={24} />
                </motion.div>
                <h3 className="font-heading font-bold text-lg text-on-background">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="text-xs font-mono px-3 py-1 bg-primary/5 text-primary rounded border border-primary/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <ScrollIndicator targetId="contact" />
      </div>
    </section>
  );
}