import { motion } from 'framer-motion';
import RoughHighlight from './RoughHighlight';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Terminal Card */}
          <div className="terminal relative">
            {/* Terminal dots */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            <div className="pt-8 space-y-6">
              <div className="flex items-start gap-2">
                <span className="text-primary font-mono">$</span>
                <span className="text-muted-foreground font-mono">whoami</span>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-chalk/80"
              >
                I am a <span className="text-primary">3rd Year CSE-AI student</span> with a passion 
                for building intelligent web solutions. I bridge the gap between{' '}
                <RoughHighlight type="underline" color="#00f2ff" delay={800}>
                  creative design
                </RoughHighlight>{' '}
                and{' '}
                <RoughHighlight type="underline" color="#00f2ff" delay={1000}>
                  complex backend logic
                </RoughHighlight>
                , crafting experiences that are both beautiful and functional.
              </motion.p>

              <div className="flex items-start gap-2">
                <span className="text-primary font-mono">$</span>
                <span className="text-muted-foreground font-mono">cat stats.json</span>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="glass-card px-6 py-4 inline-flex items-center gap-3">
                  <span className="text-muted-foreground font-mono text-sm">"cgpa":</span>
                  <span className="text-3xl font-bold text-primary neon-text">8.9</span>
                  <span className="text-muted-foreground font-mono text-sm">/10</span>
                </div>
                
                {/* Hand-drawn arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="font-doodle text-chalk/60 flex items-center gap-2"
                >
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-chalk/40">
                    <path
                      d="M2 10 Q 20 5, 35 10 M30 5 L35 10 L30 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span>pretty good, huh?</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-muted-foreground/50 font-mono text-sm"
              >
                <span className="text-primary">$</span>
                <span className="animate-pulse">_</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
