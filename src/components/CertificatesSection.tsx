import { motion } from 'framer-motion';
import { Award, Users } from 'lucide-react';
import * as React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

const certificates = [
  {
    title: 'Complete Web Development Course',
    issuer: 'Udemy',
    year: '2025',
    image: 'webd.png',
  },
  {
    title: 'AWS Academy Graduate - Generative AI Foundations - Training Badge',
    issuer: 'Amazon Web Services',
    year: '2025',
    image: '/aws.png',
  },
  {
    title: 'Certificate of Completion: CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    image: 'cisco.png',
  },
  {
    title: 'Certificate of Completion: Six Sigma: Green Belt',
    issuer: 'linkedIn Learning',
    year: '2025',
    image: 'sixsigma.png',
  },
  {
    title: 'Certificate of Completion: 15 days of Power BI',
    issuer: 'Udemy',
    year: '2024',
    image: 'powerbi.png',
  }
];

const activities = [
  {
    title: 'Design Team Member',
    organization: 'CEC Club, VIIT',
    description: 'Contributing to visual design and branding for college events.',
    image: 'cec.png',
  },
  {
    title: 'Smart India Hackathon 2025 – Internal Round - Participation Certificate',
    organization: 'Government of India',
    description: 'Participated in the internal round of SIH 2025 with innovative solutions.',
    image: 'sih.png',
  },
  {
    title: 'Innohack 2025 - Participation Certificate',
    organization: 'VIIT',
    description: 'Engaged in problem-solving and innovation during the Innohack event.',
    image: 'innohack.png',
  },
  {
    title: 'Publication: eal-Time Upper Body Pose Correction and Feedback System Using MediaPipe (2025)',
    organization: 'C2I6 Conference, Bangalore',
    description: 'Presented at the 2025 6th International Conference on Communication, Computing & Industry 6.0 (C2I6)',
    image: 'c2i6.png',
  }
];

type SelectedItem = {
  title: string;
  subtitle?: string;
  image: string;
  description?: string;
};

const CertificatesSection = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<SelectedItem | null>(null);

  function handleView(item: SelectedItem) {
    setSelected(item);
    setOpen(true);
  }

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
                    <button
                      onClick={() => handleView(cert)}
                      className="mt-2 inline-block text-sm text-primary underline-offset-2 hover:underline"
                      aria-label={`View ${cert.title}`}
                    >
                      View
                    </button>
                  </div>
                </div>

                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-chalk/10 rotate-3" />
              </motion.div>
            ))}
            {/* Dialog for viewing certificate image */}
            <Dialog open={open} onOpenChange={(val) => { if (!val) setSelected(null); setOpen(val); }}>
              <DialogContent className="max-w-3xl">
                {selected ? (
                  <div className="flex flex-col items-center gap-4">
                    <DialogTitle>{selected.title}</DialogTitle>
                    <div className="w-full flex justify-center">
                      <img
                        src={selected.image}
                        alt={selected.title}
                        className="max-h-[70vh] w-auto rounded-md shadow-md"
                      />
                    </div>
                    
                  </div>
                ) : null}
              </DialogContent>
            </Dialog>
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
                <div className="flex items-start gap-4">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-28 h-20 object-cover rounded-sm"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground">{activity.title}</h4>
                    <p className="text-neon-purple font-medium mt-1">{activity.organization}</p>
                    <p className="text-muted-foreground text-sm mt-3">{activity.description}</p>
                    <button
                      onClick={() => handleView({
                        title: activity.title,
                        subtitle: activity.organization,
                        image: activity.image,
                        description: activity.description,
                      })}
                      className="mt-3 text-sm text-primary underline-offset-2 hover:underline"
                      aria-label={`View ${activity.title}`}
                    >
                      View
                    </button>
                  </div>
                </div>
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
