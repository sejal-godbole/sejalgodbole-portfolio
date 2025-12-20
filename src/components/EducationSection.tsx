import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    degree: 'B.Tech CSE (AI)',
    institution: 'Vishwakarma Institute of Information Technology',
    year: '2023 - 2027',
    score: '8.9 CGPA',
    color: 'text-primary',
  },
  {
    icon: School,
    degree: 'HSC (12th)',
    institution: 'Shivaji Junior Science College',
    year: '2022',
    score: '86.18%',
    color: 'text-neon-purple',
  },
  {
    icon: BookOpen,
    degree: 'SSC (10th)',
    institution: 'Platinum Jubilee School',
    year: '2020',
    score: '92.80%',
    color: 'text-neon-blue',
  },
];

const EducationSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 max-w-4xl mx-auto"
        >
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Doodle timeline line */}
          <svg
            className="absolute left-8 top-0 h-full w-4 overflow-visible"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
          >
            <path
              d="M5 0 Q 2 25, 8 50 Q 3 75, 5 100"
              stroke="hsl(var(--chalk-white))"
              strokeWidth="2"
              strokeDasharray="8 4"
              fill="none"
              className="opacity-30"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`absolute left-0 w-16 h-16 rounded-2xl glass-card flex items-center justify-center ${item.color} neon-border`}
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="glass-card p-6 ml-4 sketch-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                      <p className="text-muted-foreground mt-1">{item.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-doodle text-chalk/60 text-sm">{item.year}</span>
                      <div className={`text-lg font-bold ${item.color} mt-1`}>{item.score}</div>
                    </div>
                  </div>
                </motion.div>

                {/* Doodle annotation */}
                {index === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute -right-4 -top-2 font-doodle text-chalk/40 text-sm rotate-12"
                  >
                    ★ current
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
