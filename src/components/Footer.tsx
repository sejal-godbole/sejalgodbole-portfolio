import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          {/* Logo/Name */}
          <div className="text-2xl font-bold gradient-text">SG</div>
          
          {/* Credit */}
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Designed & Built with{' '}
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />{' '}
            by Sejal Godbole
          </p>
          
          {/* Year */}
          <p className="font-doodle text-chalk/40 text-sm">
            © {new Date().getFullYear()} • Made with curiosity
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
