import { motion } from 'framer-motion';
import { Award, Users } from 'lucide-react';

const certificates = [
  {
    title: 'Complete Web Development Course',
    issuer: 'Udemy',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
  },
];

const activities = [
  {
    title: 'Design Team Member',
    organization: 'CEC Club, VIIT',
    description: 'Contributing to visual design and branding for college events.',
  },
];

const CertificatesSection = () => {
  return (
    <section id="certs" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 max-w-4xl mx-auto"
        >
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates & Activities</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>

            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, rotate: -2 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Polaroid style */}
                <div className="bg-chalk/5 p-3 pb-6 rounded-sm shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-sm"
                  />
                  <div className="mt-4 text-center">
                    <h4 className="font-doodle text-lg text-foreground">{cert.title}</h4>
                    <p className="font-doodle text-chalk/60 text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>

                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-chalk/10 rotate-3" />
              </motion.div>
            ))}
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-neon-purple" />
              <h3 className="text-xl font-bold">Activities</h3>
            </div>

            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 10 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 sketch-border hover:border-neon-purple/30 transition-colors"
              >
                <h4 className="text-lg font-bold text-foreground">{activity.title}</h4>
                <p className="text-neon-purple font-medium mt-1">{activity.organization}</p>
                <p className="text-muted-foreground text-sm mt-3">{activity.description}</p>
              </motion.div>
            ))}

            {/* Doodle decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="font-doodle text-chalk/30 text-center pt-8"
            >
              <svg width="100" height="50" viewBox="0 0 100 50" className="mx-auto">
                <path
                  d="M10 40 Q 50 10, 90 40"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 4"
                />
              </svg>
              <span>more to come...</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
