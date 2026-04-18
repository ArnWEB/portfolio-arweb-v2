import { Mail, Link2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-20 bg-surface-container-lowest site-grid" id="contact">
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
          />
          <span className="text-primary font-heading text-xs font-bold uppercase tracking-widest">06 // CONNECT</span>
          <motion.div 
            className="h-[1px] flex-1 bg-outline-variant/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:arnabkundu854@gmail.com"
            className="bg-surface p-8 rounded-lg border border-outline-variant/30 hover:border-primary/30 hover:shadow-lg transition-all group"
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="text-primary group-hover:text-white" size={28} />
              </motion.div>
              <div>
                <h3 className="font-heading font-bold text-lg text-on-background">Email</h3>
                <p className="text-sm text-on-surface-variant">Get in touch</p>
              </div>
            </motion.div>
            <p className="text-primary font-mono text-sm">arnabkundu854@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/arnweb/"
            target="_blank"
            rel="noreferrer"
            className="bg-surface p-8 rounded-lg border border-outline-variant/30 hover:border-primary/30 hover:shadow-lg transition-all group"
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Link2 className="text-primary group-hover:text-white" size={28} />
              </motion.div>
              <div>
                <h3 className="font-heading font-bold text-lg text-on-background">LinkedIn</h3>
                <p className="text-sm text-on-surface-variant">Professional network</p>
              </div>
            </motion.div>
            <p className="text-primary font-mono text-sm">linkedin.com/in/arnweb</p>
          </motion.a>

          <motion.div
            className="bg-surface p-8 rounded-lg border border-outline-variant/30"
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-4"
            >
              <motion.div 
                className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="text-primary" size={28} />
              </motion.div>
              <div>
                <h3 className="font-heading font-bold text-lg text-on-background">Location</h3>
                <p className="text-sm text-on-surface-variant">Base location</p>
              </div>
            </motion.div>
            <p className="text-primary font-mono text-sm">Kolkata, WB, India</p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 p-8 bg-surface-container rounded-lg border border-outline-variant/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-heading font-bold text-lg text-on-background mb-4">Availability</h3>
          <div className="flex flex-wrap gap-4">
            <motion.span 
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold"
              whileHover={{ scale: 1.1 }}
            >
              Open to Work
            </motion.span>
            <motion.span 
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold"
              whileHover={{ scale: 1.1 }}
            >
              Full-time opportunities
            </motion.span>
            <motion.span 
              className="px-4 py-2 bg-surface text-on-surface-variant rounded-full text-sm"
              whileHover={{ scale: 1.1 }}
            >
              Freelance AI/ML projects
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}