import { Bot, Database, Cloud, Shield } from 'lucide-react';

export default function ExperimentalLab() {
  const experiments = [
    { icon: Bot, title: "LLM_Systems", desc: "LangChain, LangGraph, Agentic AI" },
    { icon: Database, title: "Knowledge_Graph", desc: "Neo4j, QLoRA training" },
    { icon: Cloud, title: "Cloud_DevOps", desc: "Azure, AWS EKS, Kubernetes" },
    { icon: Shield, title: "Security", desc: "OAuth2, Azure AD, Compliance" },
  ];

  return (
    <section className="py-24 px-8 lg:px-20 bg-surface" id="neural-labs">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
          <span className="text-primary font-heading text-xs font-bold uppercase tracking-widest">03 // TECH_STACK</span>
          <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {experiments.map((exp, index) => (
            <div key={index} className="aspect-square bg-surface-container-low group relative overflow-hidden flex flex-col items-center justify-center p-6 border border-outline-variant/30 hover:border-primary transition-colors cursor-pointer">
              <exp.icon className="text-4xl text-outline group-hover:text-primary transition-all group-hover:-translate-y-2" size={36} />
              <p className="mt-4 font-heading font-bold text-xs uppercase text-on-background">{exp.title}</p>
              <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-mono text-on-surface-variant uppercase tracking-tighter">{exp.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}