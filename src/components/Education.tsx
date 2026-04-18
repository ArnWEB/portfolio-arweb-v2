import { GraduationCap, Award } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    { degree: "Masters of Computer Application", school: "Future Institute of Engineering & Management", year: "2020-2022", type: "post-graduation" },
    { degree: "Bachelor of Computer Science", school: "Ramakrishna Mission Residential College", year: "2017-2020", type: "graduation" },
    { degree: "Higher Secondary (Class XII)", school: "Jodhpur Park Boys", year: "2017", type: "school" },
    { degree: "Secondary (Class X)", school: "Jodhpur Park Boys", year: "2015", type: "school" }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-20 bg-surface-container-lowest site-grid" id="documentation">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="h-[1px] flex-1 bg-outline-variant/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
          <span className="text-primary font-heading text-xs font-bold uppercase tracking-widest">04 // EDUCATION</span>
          <motion.div 
            className="h-[1px] flex-1 bg-outline-variant/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "right" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-surface p-6 rounded-lg border border-outline-variant/30 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                rotateX: 5,
                boxShadow: "0 20px 40px rgba(0, 104, 89, 0.15)"
              }}
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${edu.type === 'post-graduation' ? 'bg-primary/10' : edu.type === 'graduation' ? 'bg-tertiary/10' : 'bg-surface-container'}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {edu.type === 'post-graduation' || edu.type === 'graduation' ? (
                    <GraduationCap className="text-primary" size={20} />
                  ) : (
                    <Award className="text-on-surface-variant" size={20} />
                  )}
                </motion.div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${edu.type === 'post-graduation' ? 'bg-primary text-white' : edu.type === 'graduation' ? 'bg-tertiary text-white' : 'bg-surface-container text-on-surface-variant'}`}>
                  {edu.year}
                </span>
              </div>
              <h3 className="font-heading font-bold text-on-background mb-2">{edu.degree}</h3>
              <p className="text-sm text-on-surface-variant">{edu.school}</p>
            </motion.div>
          ))}
        </div>
        
        <ScrollIndicator targetId="neural-labs" />
      </div>
    </section>
  );
}