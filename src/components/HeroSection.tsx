import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import RoughHighlight from './RoughHighlight';
import { ArrowRight, MessageCircle, Terminal, FileText } from 'lucide-react'; // Added FileText

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Headline Group */}
            <div className="space-y-4 relative">
               <Terminal className="absolute -top-10 -left-10 w-32 h-32 text-primary/5 hidden lg:block rotate-12" />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-primary font-mono tracking-wider"
              >
                Hello there! 👋 I am
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
              >
                <RoughHighlight type="highlight" color="#00f2ff40" delay={1200} >
                  <span className="gradient-text relative z-10">Sejal Godbole</span>
                </RoughHighlight>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-3xl text-muted-foreground flex flex-col md:flex-row gap-2 justify-center lg:justify-start items-center"
              >
                <span className="font-semibold text-foreground">Full Stack Developer</span>
                <span className="hidden md:block text-primary">•</span>
                <span className="text-primary/80">CSE-AI at VIIT</span>
              </motion.div>
            </div>

            {/* Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              {/* Primary: View Work */}
              <a
                href="#work"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg transition-all hover:shadow-[0_0_30px_-5px_rgba(0,242,255,0.6)] hover:-translate-y-1"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Secondary: Resume (Added this) */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-lg border-2 border-white/10 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>

              {/* Tertiary: Contact */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-lg border-2 border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Contact
              </a>
            </motion.div>

             {/* Doodle note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="font-doodle text-chalk/50 text-lg mt-6 rotate-2 hidden lg:block"
            >
              Crafting intelligent web solutions with code & creativity ✨
            </motion.p>
          </motion.div>

          {/* --- RIGHT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="absolute inset-0 z-0 opacity-60 scale-110 pointer-events-none mix-blend-screen">
                 <Scene3D /> 
            </div>

            <div className="relative z-10 w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 blur-2xl opacity-40 animate-spin-slow pointer-events-none" />
              
              <div className="w-full h-full p-3 glass-card rounded-[35px] border-2 border-primary/30 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none z-20 mix-blend-overlay"></div>
                 <div className="w-full h-full rounded-[28px] overflow-hidden relative">
                  <img
                    src="/sejal_portfolio.jpeg"
                    alt="Sejal Godbole"
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 filter saturate-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&crop=faces&q=80';
                    }}
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] z-10 pointer-events-none rounded-[28px]"></div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;