import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { MouseEvent } from 'react';

const projects = [
  {
    title: 'AI Career Coach',
    description: 'An intelligent career guidance platform powered by Gemini API with personalized recommendations.',
    tech: ['Next.js', 'Gemini API', 'Clerk', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    github: 'https://github.com/sejal-godbole/AIVION',
  },
  {
    title: 'AI Component Generator',
    description: 'Generate React components instantly using natural language with Gemini Flash 2.5.',
    tech: ['Gemini Flash 2.5', 'Sandpack', 'React', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop',
    github: 'https://github.com/sejal-godbole/takumi',
  },
  {
    title: 'AI Shredder++',
    description: 'Automated document redaction using OCR and Named Entity Recognition.',
    tech: ['Python', 'OCR', 'NER', 'Flask'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    github: 'https://github.com/sejal-godbole/AI-Shredder',
  },
  {
    title: 'Potato Leaf Disease',
    description: 'CNN-based classification system for detecting potato plant diseases.',
    tech: ['CNN', 'TensorFlow', 'Python', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=600&h=400&fit=crop',
    github: 'https://github.com/sejal-godbole/Potato-Leaf-Disease-Classification',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group"
    >
      <div className="glass-card overflow-hidden transition-all duration-300 group-hover:neon-border">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4" style={{ transform: 'translateZ(50px)' }}>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono text-primary/80 bg-primary/10 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href={project.github}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="font-doodle">View Code</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-doodle">Live Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sketch corners */}
      <svg className="absolute -top-2 -left-2 w-6 h-6 text-chalk/30" viewBox="0 0 24 24">
        <path d="M2 12 L2 2 L12 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <svg className="absolute -bottom-2 -right-2 w-6 h-6 text-chalk/30" viewBox="0 0 24 24">
        <path d="M22 12 L22 22 L12 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 max-w-4xl mx-auto"
        >
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Doodle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-doodle text-chalk/40 text-lg mt-12"
        >
          more coming soon... 🚀
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
