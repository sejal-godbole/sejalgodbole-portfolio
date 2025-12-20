import { motion } from 'framer-motion';
import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const socialCards = [
  {
    name: 'GitHub',
    username: 'sejal-godbole',
    link: 'https://github.com/sejal-godbole',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    icon: Github,
    glowColor: 'hover:shadow-neon-purple',
    borderColor: 'hover:border-neon-purple/50',
  },
  {
    name: 'LinkedIn',
    username: 'sejal-godbole',
    link: 'https://www.linkedin.com/in/sejal-godbole',
    image: 'https://images.unsplash.com/photo-1611944212129-2999044e2bbf?auto=format&fit=crop&w=800&q=80',
    icon: Linkedin,
    glowColor: 'hover:shadow-neon-blue',
    borderColor: 'hover:border-neon-blue/50',
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 max-w-4xl mx-auto"
        >
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <motion.a
                href="tel:+919322341569"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91-9322341569</span>
              </motion.a>
              <motion.a
                href="mailto:sejalgodbole02@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>sejalgodbole02@gmail.com</span>
              </motion.a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-glass/30 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted-foreground"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-glass/30 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-glass/30 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-neon transition-shadow"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold mb-8 font-doodle text-chalk/80">
              Or find me on...
            </h3>

            <div className="space-y-6" style={{ perspective: '1000px' }}>
              {socialCards.map((card, index) => (
                <motion.a
                  key={card.name}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, rotateY: -15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`block relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 ${card.glowColor} ${card.borderColor} holographic`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl glass flex items-center justify-center">
                      <card.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">{card.name} Profile</h4>
                      <p className="text-muted-foreground font-doodle">@{card.username}</p>
                    </div>
                  </div>

                  {/* Holographic shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.a>
              ))}
            </div>

            {/* Doodle note */}
            <motion.p
              initial={{ opacity: 0, rotate: 3 }}
              whileInView={{ opacity: 1, rotate: 2 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="font-doodle text-chalk/40 text-center pt-8"
            >
              let's connect and build something awesome! ✨
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
