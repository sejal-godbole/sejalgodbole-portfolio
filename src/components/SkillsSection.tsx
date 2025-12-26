import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Container, 
  Terminal, 
  Users 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="w-5 h-5" />,
    skills: ['C++', 'Python', 'JavaScript', 'SQL'],
    color: 'text-blue-400',
    border: 'hover:border-blue-400/50',
  },
  {
    title: 'Frontend',
    icon: <Layout className="w-5 h-5" />,
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'Bootstrap', 'HTML5', 'CSS3', 'React Hook Form'],
    color: 'text-purple-400',
    border: 'hover:border-purple-400/50',
  },
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5" />,
    skills: ['Node.js', 'REST APIs', 'Server Actions', 'Zod', 'Google Gemini API', 'Clerk (Auth)'],
    color: 'text-green-400',
    border: 'hover:border-green-400/50',
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5" />,
    skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
    color: 'text-yellow-400',
    border: 'hover:border-yellow-400/50',
  },
  {
    title: 'DevOps & Tools',
    icon: <Container className="w-5 h-5" />,
    skills: ['Docker', 'AWS', 'Git', 'GitHub', 'VS Code'],
    color: 'text-orange-400',
    border: 'hover:border-orange-400/50',
  },
  {
    title: 'Core Concepts',
    icon: <Terminal className="w-5 h-5" />,
    skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
    color: 'text-red-400',
    border: 'hover:border-red-400/50',
  },
  {
    title: 'Soft Skills',
    icon: <Users className="w-5 h-5" />,
    skills: ['Collaboration', 'Leadership', 'Communication', 'Determination'],
    color: 'text-pink-400',
    border: 'hover:border-pink-400/50',
  }
];

const SkillsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header - Exactly matching ProjectsSection header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 max-w-4xl mx-auto"
        >
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Arsenal</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Grid Layout - Exactly matching ProjectsSection grid width and gap */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }} // Increased y to match project card entrance
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 ${category.border} hover:shadow-lg hover:shadow-${category.color.split('-')[1]}-500/10 hover:-translate-y-1`}>
                
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-white/5 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground/90">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md bg-white/5 text-foreground/70 border border-white/5 hover:bg-white/10 hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;