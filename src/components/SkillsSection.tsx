import { motion } from 'framer-motion';

const skills = [
  { name: 'C++', color: 'text-neon-blue' },
  { name: 'Python', color: 'text-primary' },
  { name: 'React', color: 'text-primary' },
  { name: 'Next.js', color: 'text-foreground' },
  { name: 'Node.js', color: 'text-green-400' },
  { name: 'SQL', color: 'text-neon-blue' },
  { name: 'Docker', color: 'text-neon-blue' },
  { name: 'JavaScript', color: 'text-neon-blue' },
  { name: 'TailwindCSS', color: 'text-primary' },
  { name: 'TensorFlow', color: 'text-orange-400' },
  { name: 'Git', color: 'text-red-400' },
  { name: 'MongoDB', color: 'text-green-400' },
];

const SkillsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 max-w-4xl mx-auto"
        >
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Floating Skills Cloud */}
        <div className="relative">
          {/* Marquee Container */}
          <div className="overflow-hidden py-8">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <div className="glass-card px-6 py-3 sketch-border hover:neon-border transition-all cursor-default">
                    <span className={`text-lg font-medium ${skill.color} group-hover:neon-text transition-all`}>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second row - reverse direction */}
          <div className="overflow-hidden py-8">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-rev-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <div className="glass-card px-6 py-3 sketch-border hover:neon-border transition-all cursor-default">
                    <span className={`text-lg font-medium ${skill.color} group-hover:neon-text transition-all`}>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Doodle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-doodle text-chalk/40 text-lg mt-8"
        >
          ...and always learning more! 📚
        </motion.p>
      </div>
    </section>
  );
};

export default SkillsSection;
