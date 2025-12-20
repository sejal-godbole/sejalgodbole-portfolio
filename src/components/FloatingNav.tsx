import { motion } from 'framer-motion';
import { Home, User, Briefcase, Award, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Briefcase, label: 'Work', href: '#work' },
  { icon: Award, label: 'Certs', href: '#certs' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

const FloatingNav = () => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center gap-1 neon-border">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-primary/10"
          >
            <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-card text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-doodle text-chalk border border-white/10">
              {item.label}
            </span>
            {/* Sketch border on hover */}
            <svg
              className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              viewBox="0 0 60 40"
            >
              <rect
                x="2"
                y="2"
                width="56"
                height="36"
                rx="18"
                fill="none"
                stroke="hsl(var(--chalk-white))"
                strokeWidth="1"
                strokeDasharray="4 2"
                className="animate-dash"
              />
            </svg>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
