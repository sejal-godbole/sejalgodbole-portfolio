import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import RoughHighlight from './RoughHighlight';
import { ArrowRight, MessageCircle } from 'lucide-react';
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="space-y-8">
            {/* Avatar */}
            <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: 0.3,
            type: 'spring',
            stiffness: 200
          }} className="relative w-28 h-28">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary animate-spin-slow" />
              <img src="https://github.com/sejal-godbole.png" alt="Sejal Godbole" className="w-24 h-24 rounded-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-primary/50" onError={e => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop';
            }} />
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="text-lg text-muted-foreground font-doodle">
                Hello there! 👋
              </motion.p>
              
              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="text-5xl md:text-7xl font-bold tracking-tight">
                Hi, I'm{' '}
                <RoughHighlight type="highlight" color="#00f2ff40" delay={1200}>
                  <span className="gradient-text">Sejal Godbole</span>
                </RoughHighlight>
              </motion.h1>
              
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="text-xl md:text-2xl text-muted-foreground">CSE-AI Student @ VIIT Pune| Full Stack Developer<span className="text-primary">CSE-AI Student</span> @ VIIT | Full Stack Developer
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7
          }} className="flex flex-wrap gap-4">
              <a href="#work" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:shadow-neon">
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <RoughHighlight type="circle" color="#00f2ff" delay={1500} strokeWidth={2}>
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-foreground rounded-full font-medium transition-all hover:text-primary">
                  <MessageCircle className="w-4 h-4" />
                  Contact Me
                </a>
              </RoughHighlight>
            </motion.div>

            {/* Doodle note */}
            <motion.p initial={{
            opacity: 0,
            rotate: -5
          }} animate={{
            opacity: 1,
            rotate: -2
          }} transition={{
            delay: 1
          }} className="font-doodle text-chalk/60 text-lg -rotate-2">
              ← building intelligent web solutions ✨
            </motion.p>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.3,
          duration: 1
        }} className="relative h-[500px] lg:h-[600px]">
            <Scene3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-28 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }} className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;